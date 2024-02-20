const fetchData = async (query = "", { variables } = {}) => {
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
};

export const getPostsByCategoryName = async (category) => {
  const data = await fetchData(`
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
