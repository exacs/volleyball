import React, { PropTypes } from 'react'
import classNames from 'classnames'

/**
 * <TimelineEntry home time points undo inverse>
 */
const TimelineEntry = ({ feature, time, points, undo, inverse }) => {
  const icon = (side) => (
    <i className='material-icons timeline-entry__label__icon'>
      { side === 'left' ? 'chevron_right' : 'chevron_left' }
    </i>
  )

  const undoButton = () => (undo && (
    <button className='timeline-entry__undo btn btn-link' onClick={e => undo()}>
      <i className='material-icons'>remove_circle</i>
    </button>
  ))

  // Classname for timeline-entry__label--home
  const cnHome = classNames('timeline-entry__label', 'timeline-entry__label--home', {
    'timeline-entry__label--left': !inverse,
    'timeline-entry__label--right': inverse
  })

  // Classname for timeline-entry__label--away
  const cnAway = classNames('timeline-entry__label', 'timeline-entry__label--away', {
    'timeline-entry__label--left': inverse,
    'timeline-entry__label--right': !inverse
  })

  return (
    <div className='timeline-entry'>
      <time className='timeline-entry__node'>{`${time}'`}</time>
      <div className='timeline-entry__labels'>
        <div className={cnHome}>
          { feature === 'home' && undoButton() }
          { feature === 'home' && icon(inverse ? 'right' : 'left') }
          <header className='timeline-entry__label__title'>Home</header>
          <main className='timeline-entry__label__points'>{ points.home }</main>
        </div>
        <div className={cnAway}>
          { feature === 'away' && undoButton() }
          { feature === 'away' && icon(inverse ? 'left' : 'right') }
          <header className='timeline-entry__label__title'>Away</header>
          <main className='timeline-entry__label__points'>{ points.away }</main>
        </div>
      </div>
    </div>
  )
}

TimelineEntry.propTypes = {
  feature: PropTypes.oneOf(['home', 'away']),
  time: PropTypes.number.isRequired,
  points: PropTypes.shape({
    home: PropTypes.number.isRequired,
    away: PropTypes.number.isRequired
  }),
  undo: PropTypes.func,
  inverse: PropTypes.bool
}

export default TimelineEntry

