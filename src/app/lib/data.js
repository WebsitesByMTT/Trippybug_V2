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
