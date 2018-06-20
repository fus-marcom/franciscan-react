import gql from 'graphql-tag'

export const JobQuery = type => {
  return gql`
  query JobQuery($name: String!) {
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
                slug
                name
           
              }
            }
          }
          staffDepartments {
            edges {
              node {
                slug
                name
              }
            }
          }
        }
      }
    }
  }
`
}
