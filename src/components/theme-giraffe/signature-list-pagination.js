import React from 'react'
import PropTypes from 'prop-types'

export const PreviousButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className='mo-btn petition-details__comments__toggle'
    style={{ float: 'left' }}
  >
    Previous
  </button>
)
PreviousButton.propTypes = { onClick: PropTypes.func }

export const NextButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className='mo-btn petition-details__comments__toggle'
    style={{ float: 'right' }}
  >
    Next
  </button>
)
NextButton.propTypes = { onClick: PropTypes.func }

export const Pager = ({ previousButton, nextButton }) => (
  <div style={{ height: '70px' }}>
    {previousButton}
    {nextButton}
  </div>
)
Pager.propTypes = {
  previousButton: PropTypes.node,
  nextButton: PropTypes.node
}
