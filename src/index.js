// components
import { default as DownshiftTypeahead } from './components/DownshiftTypeahead/'

// utils
import parseStateFromUrl from './utils/parseStateFromUrl'
import updateQueryString from './utils/updateQueryString'
import updateQueryStringBatch from './utils/updateQueryStringBatch'

// export the library
const interactiveGraphics = {
  DownshiftTypeahead,
  parseStateFromUrl,
  updateQueryString,
  updateQueryStringBatch
}
export { interactiveGraphics as default }
