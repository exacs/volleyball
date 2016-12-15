import React, { PropTypes } from 'react'

/** <Timeouts timeouts onTimeout> */
const Timeouts = ({ timeouts, onTimeout }) => (
  <div className='timeouts'>
    <div className='timeouts__timeout timeouts__timeout--home'>
      <span>{timeouts.home}</span>
      <button
        onClick={onTimeout.home}
        className='btn btn-link'>
        <i className='material-icons'>remove</i>
      </button>
    </div>
    <div className='timeouts__timeout timeouts__timeout--away'>
      <span>{timeouts.away}</span>
      <button
        onClick={onTimeout.away}
        className='btn btn-link'>
        <i className='material-icons'>remove</i>
      </button>
    </div>
  </div>
)

Timeouts.propTypes = {
  timeouts: PropTypes.shape({
    home: PropTypes.number.isRequired,
    away: PropTypes.number.isRequired
  }).isRequired,
  onTimeout: PropTypes.shape({
    home: PropTypes.func.isRequired,
    away: PropTypes.func.isRequired
  })
}
