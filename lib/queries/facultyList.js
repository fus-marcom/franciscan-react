import gql from 'graphql-tag'

export const FacultyListQuery = type => {
  return gql`
    query FacultyListQuery($name: [String]) {
      facultyDepartments(where: { slug: $name }) {
        edges {
          node {
            slug
            name
            faculty(last: 100, where: { orderby: { field: SLUG } }) {
              edges {
                node {
                  title
                  slug
                  content
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
