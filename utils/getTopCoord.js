import mapValues from 'lodash/mapValues'

export const sliceHeaders = headers => {
  const headerPositions = []
  mapValues(headers, ({ offsetTop }) => {
    headerPositions.push(offsetTop)
  })
  return headerPositions
}
