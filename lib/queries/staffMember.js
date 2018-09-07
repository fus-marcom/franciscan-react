import gql from 'graphql-tag'

export const StaffMemberQuery = type => {
  return gql`
  query StaffMemberQuery($name: String) {
    ${type}(where: { name: $name }) {
      edges {
        node {
          id
          title
          slug
          content
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
        }
      }
    }
  }
`
}
