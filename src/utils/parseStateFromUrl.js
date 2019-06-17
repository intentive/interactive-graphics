import updateQueryStringBatch from './updateQueryStringBatch'

export default function({ initialState, ignoredKeys }) {
  // a whitelist of keys to look for
  const initialKeys = Object.keys(initialState)

  // read the query string in the url
  // parse out and apply any filters found there
  const url = new URL(window.location)
  const params = new URLSearchParams(url.search)
  const newQueryStringState = {}

  // override starting values if they are found in the url
  for (let entry of params.entries()) {
    const key = decodeURIComponent(entry[0])
    if (ignoredKeys && ignoredKeys.includes(key)) {
      continue
    } else {
      // the key is not ignored
      // so we want it in the query string
      const value = decodeURIComponent(entry[1])
      if (initialKeys.includes(key)) {
        // if we find the value in the query string
        // update it
        initialState[key] = value
      }
    }
  }

  // populate new query string state
  initialKeys.forEach(key => {
    if (ignoredKeys && ignoredKeys.includes(key)) {
      // do nothing
    } else {
      newQueryStringState[key] = initialState[key]
    }
  })

  // update the query string
  // handle the case where one or both places
  // are initially absent from the query string
  updateQueryStringBatch(newQueryStringState)

  return initialState
}
