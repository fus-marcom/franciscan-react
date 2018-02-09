import gql from 'graphql-tag'

export const ProfileQuery = type => {
  return gql`
  query ProfileQuery($name: String!) {
    ${type}(where: { name: $name }) {
      edges {
        node {
          id
          title
          slug
          content
          facultyDepartments {
            edges {
              node {
                id
                name
                count
              }
            }
          }
        }
      }
    }
  }
`
}
