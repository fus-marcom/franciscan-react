import gql from 'graphql-tag'

export const FacultyListQuery = type => {
  return gql`
    query FacultyListQuery($slug: [String]) {
      facultyDepartments(where: { slug: $slug }) {
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
