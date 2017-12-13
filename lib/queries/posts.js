import gql from 'graphql-tag'

export const SampleQuery = gql`
  query SampleQuery {
    Post(id: "cixmn378k0hwn01010poqkle9") {
      title
    }
  }
`
