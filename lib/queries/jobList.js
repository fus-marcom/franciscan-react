import gql from 'graphql-tag'

export const JobListQuery = type => {
  return gql`
    {
      jobs {
        edges {
          node {
            jobCategories {
              edges {
                node {
                  slug
                }
              }
            }
            slug
            title
            facultyDepartments {
              edges {
                node {
                  slug
                }
              }
            }
            staffDepartments {
              edges {
                node {
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
