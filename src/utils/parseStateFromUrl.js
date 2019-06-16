import updateQueryStringBatch from './updateQueryStringBatch'

export default function({ initialState }) {
  // a whitelist of keys to look for
  const initialKeys = Object.keys(initialState)

  // read the query string in the url
  // parse out and apply any filters found there
  const url = new URL(window.location)
  const params = new URLSearchParams(url.search)

  // override starting values if they are found in the url
  for (let entry of params.entries()) {
    const key = decodeURIComponent(entry[0])
    const value = decodeURIComponent(entry[1])
    if (initialKeys.includes(key)) {
      initialState[key] = value
    }
  }

  // update the query string
  // handle the case where one or both places
  // are initially absent from the query string
  updateQueryStringBatch({
    source: initialState.source,
    compare: initialState.compare
  })

  return initialState
}
