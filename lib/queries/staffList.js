import gql from 'graphql-tag'

export const StaffListQuery = type => {
  return gql`
    query StaffListQuery($name: [String]) {
      staffDepartments(where: { slug: $name }) {
        edges {
          node {
            slug
            name
            staffMembers(last: 100, where: { orderby: { field: SLUG } }) {
              edges {
                node {
                  title
                  slug
                  content
                  phoneField {
                    value
                  }
                  featuredImage {
                    sourceUrl
                    altText
                    mediaDetails {
                      sizes {
                        name
                        sourceUrl
                      }
                    }
                  }
                  jobTitleField {
                    value
                  }
                  displayNameField {
                    value
                  }
                }
              }
            }
          }
        }
      }
    }
  `
}
