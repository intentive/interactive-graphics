import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Downshift from 'downshift'
import { withStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core/'

import { styles } from './styles'
import renderInput from './renderInput'
import renderSuggestion from './renderSuggestion'
import getSuggestions from './getSuggestions'

class DownshiftTypeahead extends Component {
  state = {}

  render() {
    const {
      classes,
      data,
      placeholderText,
      onChange,
      initialSelectedItem
    } = this.props

    const { isOpen } = this.state

    return (
      <div className={classes.root}>
        <Downshift
          id="downshift-simple"
          onChange={onChange}
          initialSelectedItem={initialSelectedItem}
          isOpen={isOpen}
        >
          {({
            getInputProps,
            getItemProps,
            getMenuProps,
            highlightedIndex,
            inputValue,
            isOpen,
            selectedItem,
            clearSelection
          }) => (
            <div className={classes.container}>
              {renderInput({
                fullWidth: true,
                classes,
                InputProps: getInputProps({
                  placeholder: placeholderText,
                  onClick: clearSelection
                })
              })}
              <div {...getMenuProps()}>
                {isOpen ? (
                  <Paper className={classes.paper} square>
                    {getSuggestions({
                      value: inputValue,
                      suggestions: data
                    }).map((suggestion, index) =>
                      renderSuggestion({
                        suggestion,
                        index,
                        itemProps: getItemProps({ item: suggestion.label }),
                        highlightedIndex,
                        selectedItem
                      })
                    )}
                  </Paper>
                ) : null}
              </div>
            </div>
          )}
        </Downshift>
      </div>
    )
  }
}

DownshiftTypeahead.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(DownshiftTypeahead)
