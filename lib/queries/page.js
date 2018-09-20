import gql from 'graphql-tag'

export const PageQuery = type => {
  return gql`
  query PageQuery($name: String!) {
    ${type}(where: { name: $name }) {
      edges {
        node {
          id
          title
          slug
          content
          menuSlugField {
            value
          }
          featuredImage {
            sourceUrl
          }
        }
      }
    }
  }
`
}
