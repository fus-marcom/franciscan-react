import gql from 'graphql-tag'

export const FacultyListQuery = type => {
  return gql`
    query FacultyListQuery($name: [String]) {
      facultyDepartments(where: { slug: $name }) {
        edges {
          node {
            slug
            name
            faculty {
              edges {
                node {
                  title
                  slug
                  content
                }
              }
            }
          }
        }
      }
    }
  `
}
