import gql from 'graphql-tag'

export const DepartmentQuery = gql`
  query DepartmentQuery($name: String!) {
    departments(where: { name: $name }) {
      edges {
        node {
          id
          title
          slug
          content
        }
      }
    }
  }
`
