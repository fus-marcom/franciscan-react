import gql from 'graphql-tag'

export const ProfileQuery = type => {
  return gql`
  query ProfileQuery($name: String) {
    ${type}(where: { name: $name }) {
      edges {
        node {
          id
          title
          slug
          content
          cvField {
            value
          }
          displayNameField {
            value
          }
          emailField {
            value
          }
          featuredImage {
            sourceUrl
            altText
            mediaDetails {
              width
              sizes {
                width
                name
                sourceUrl
              }
            }
          }
          jobTitleField {
            value
          }
          phoneField {
            value
          }
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
