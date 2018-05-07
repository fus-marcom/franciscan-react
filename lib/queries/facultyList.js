import gql from 'graphql-tag'

export const FacultyListQuery = type => {
  return gql`
    query {
      facultyDepartments(where: { name: "education" }) {
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
