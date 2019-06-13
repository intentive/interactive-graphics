export const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 40,
    '& .MuiInput-underline:before': {
      borderBottomColor: 'lightgray'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'black'
    }
  },
  container: {
    flexGrow: 1,
    position: 'relative'
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: '8px',
    left: 0,
    right: 0
  },
  chip: {
    margin: '4px 2px'
  },
  inputRoot: {
    flexWrap: 'wrap'
  },
  inputInput: {
    width: 'auto',
    flexGrow: 1
  },
  divider: {
    height: '16px'
  }
})
