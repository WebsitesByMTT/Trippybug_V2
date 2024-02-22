async function fetchAPI(query = "", { variables } = {}) {
  const headers = { "Content-Type": "application/json" };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  // WPGraphQL Plugin must be enabled
  const res = await fetch(`https://cms.trippybug.com/graphql`, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getPreviewPost(id, idType = "DATABASE_ID") {
  const data = await fetchAPI(
    `
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,
    {
      variables: { id, idType },
    }
  );
  return data.post;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts(first: 100, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  return data?.posts;
}

export async function getAllCategoriesWithSlug() {
  const data = await fetchAPI(`
    {
      categories(first: 100, where: { }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  return data?.categories;
}

//modified to get all blogs in blogs page
export async function getAllPostsForHome(preview, after) {
  const data = await fetchAPI(
    `query AllPosts($after: String) {
		posts(first: 100, after: $after, where: { orderby: { field: DATE, order: DESC } }) {
		  pageInfo {
			hasNextPage
			endCursor
		  }
		  edges {
			node {
			  title
			  excerpt
			  slug
			  date
			  featuredImage {
				node {
				  sourceUrl(size:MEDIUM )
				}
			  }
			  author {
				node {
				  name
				  firstName
				  lastName
				  avatar {
					url
				  }
				}
			  }
			}
		  }
		}
	  }
	`,
    {
      variables: {
        after,
        onlyEnabled: !preview,
        preview,
      },
    }
  );

  return data?.posts;
}

export async function getPostsByCategoryId(categoryId) {
  const data = await fetchAPI(
    `
		query PostsByCategoryId {
			posts(
				where: {categoryId: ${categoryId}, orderby: {field: DATE, order: DESC}}
				first: 100
			) {
				edges {
					node {
						postId
						title
						slug
						date
						excerpt
						author
					{
						node{
							name
						firstName
						lastName
						avatar {
						  url
						}
					}
					}
						featuredImage {
							node {
								sourceUrl(size:MEDIUM )
							}
						}
					}
				}
			}
		}
		`
  );

  return data.posts;
}

export async function getMorePosts(postId = "", categoryId) {
  const data = await fetchAPI(
    `
		query MorePosts {
			posts(
				where: {categoryId: ${categoryId}, notIn: "${postId}", orderby: {field: DATE, order: DESC}}
				first: 100
			) {
				edges {
					node {
						postId
						title
						slug
						date
						excerpt
						featuredImage {
							node {
								sourceUrl(size:MEDIUM )
							}
						}
					}
				}
			}
		}
		`
  );

  return data.posts;
}

export async function getPostBySlug(slug, preview, previewData) {
  const postPreview = preview && previewData?.post;

  // The slug may be the id of an unpublished post
  const isId = Number.isInteger(Number(slug));

  const isSamePost = isId
    ? Number(slug) === postPreview.id
    : slug === postPreview.slug;

  const isDraft = isSamePost && postPreview?.status === "draft";
  const isRevision = isSamePost && postPreview?.status === "publish";


  const data = await fetchAPI(
    `
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
		postId
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
			categoryId
			count
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
	  comments(first: 100) {
		nodes {
		  id
		  content
		  parentId
		  date
		  author{
			node{
				name
				avatar{
					url
				}
			}
		  }
		}
	  }
	  seo {
		canonical
		metaDesc
		metaKeywords
		opengraphDescription
		opengraphImage {
			sourceUrl
			srcSet
			altText
		}
		opengraphUrl
      	opengraphType
		}
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        ${
          // Only some of the fields of a revision are considered as there are some inconsistencies
          isRevision
            ? `
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              content
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }
        `
            : ""
        }
      }
    }
  `,
    {
      variables: {
        id: isDraft ? postPreview.id : slug,
        idType: isDraft ? "DATABASE_ID" : "SLUG",
      },
    }
  );

  // Draft posts may not have an slug
  if (isDraft) data.post.slug = postPreview.id;
  // Apply a revision (changes in a published post)
  if (isRevision && data.post.revisions) {
    const revision = data.post.revisions.edges[0]?.node;

    if (revision) Object.assign(data.post, revision);
    delete data.post.revisions;
  }

  // Filter out the main post
  // data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug)
  // // If there are still 3 posts, remove the last one
  // if (data.posts.edges.length > 2) data.posts.edges.pop()

  return data;
}

export async function commentOnPost() {
  const data = await fetchAPI(`
	mutation CREATE_COMMENT {
		createComment(input: {
		  commentOn: 2756, 
		  content: "This is a test comment, yo", 
		  author: "Jason"
		}) {
		  success
		  comment {
			id
			content
			date
			author {
			  node {
				name
			  }
			}
		  }
		}
	  }`);
  return data;
}

export async function getAllCategoriesForHome(ids = [], preview) {
  const _ids = `[${ids.join(",")}]`;
  const data = await fetchAPI(
    `query AllCategories {
			categories(first: 100, where: {exclude: "1", orderby: TERM_ORDER, include: ${_ids} }) {
				edges {
				node {
					id
					categoryId
					description
					name
					slug
					posts(first: 100, where: {orderby: {field: DATE, order: DESC}}) {
					edges {
						node {
						title
						slug
						excerpt
						date
						featuredImage {
							node {
							altText
							sourceUrl(size:MEDIUM )
							}
						}
						author {
							node {
							name
							firstName
							lastName
							avatar {
								url
							}
							}
						}
						}
					}
					}
				}
				}
			}
		}`,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  );

  return data?.categories;
}

export async function getCategoriesForSidebar(ids = []) {
  const _ids = `[${ids.join(",")}]`;

  const data = await fetchAPI(
    `query AllCategories {
			categories(first: 10, where: {exclude: "1", orderby: TERM_ORDER, include: ${_ids} }) {
				edges {
					node {
						id
						categoryId
						description
						name
						slug
						count
					}
				}
			}
		}`
  );

  return data?.categories;
}

export async function getCategoryBySlug(slug) {
  const data = await fetchAPI(
    `query NewQuery {
			category(id: "${slug}", idType: SLUG) {
				categoryId
				count
				description
				name
				slug
				seo {
					metaDesc
					metaKeywords
					opengraphDescription
					opengraphImage {
						sourceUrl
					}
					opengraphTitle
					opengraphType
					title
				}
			}
		}`
  );

  return data;
}

// POST BY CATEGORY NAME
export const getPostsByCategoryName = async (category) => {
  const data = await fetchAPI(`
    query PostsByCategoryName {
        posts(
            where: {categoryName: "${category}",orderby: {field: DATE, order: DESC}}
            first: 6
        ) {
            edges {
                node {
                    postId
                    title
                    slug
                    date
                    excerpt
                    author
                {
                    node{
                        name
                    firstName
                    lastName
                    avatar {
                      url
                    }
                }
                }

                comments(first: 100) {
                    nodes {
                      id}}
                      
                    featuredImage {
                        node {
                            sourceUrl(size:LARGE )
                        }
                    }
                }
            }
        }
    }
    `);

  return data.posts;
};

// GET RECENT POST
export async function getRecentPosts(numberOfPosts) {
  const data = await fetchAPI(
    `query RecentPosts {
			posts(
				last: ${numberOfPosts}
			) {
			  edges {
				node {
				  id
				  title
				  excerpt
				  slug
          featuredImage {
            node {
            altText
            sourceUrl(size:MEDIUM )
            }
          }
				  author {
					node {
					  avatar {
						url
					  }
					  name
					}
				  }
				  comments(first: 100) {
					nodes {
					  id					  
					}
				  }
				  date
				}
			  }
			}
		  } 
		`
  );
  return data.posts;
}

// GET CATEGORIES
export async function getCategories(ids = [], preview) {
  const _ids = Array.isArray(ids) ? `[${ids.join(",")}]` : "[]";
  const data = await fetchAPI(
    `query AllCategories {
			categories(first: 100, where: {exclude: "1", orderby: TERM_ORDER, include: ${_ids} }) {
				edges {
				node {
					id
					name
					posts(first: 1, where: {orderby: {field: DATE, order: DESC}}) {
					edges {
						node {
						title
						featuredImage {
							node {
							altText
							sourceUrl(size:MEDIUM )
							}
						}
						}
					}
					}
				}
				}
			}
		}`,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  );

  return data?.categories;
}
