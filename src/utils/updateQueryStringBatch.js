import updateQueryString from './updateQueryString'

export default function(props) {
  let value
  Object.keys(props).forEach(key => {
    value = props[key]
    updateQueryString(key, value)
  })
}
