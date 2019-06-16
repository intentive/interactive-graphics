export default function(key, value) {
  const url = new URL(window.location)
  const params = new URLSearchParams(url.search)
  if (value === null || value.length === 0) params.delete(key)
  else params.set(key, encodeURIComponent(value))

  url.search = params.toString()
  // eslint-disable-next-line no-restricted-globals
  history.pushState({}, '', url.toString())
}
