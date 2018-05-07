import gql from 'graphql-tag'

export const FacultyListQuery = type => {
  return gql`
    query FacultyListQuery($name: [String]) {
      facultyDepartments(where: { name: $name }) {
        edges {
          node {
            name
            faculty {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        }
      }
    }
  `
}
