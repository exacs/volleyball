import React, { PropTypes } from 'react'

const UndoableTimelineEntry = ({home = false, time, points, undo}) => (
  <div className='timeline-entry'>
    <time className='timeline-entry--node'>
      <span className='timeline-entry--time'>{ 'X\'' }</span>
    </time>

    <div className='timeline-entry--label timeline-entry--label__home'>
      { home &&
          <i className='material-icons'
            onClick={(e) => undo()}>
            remove_circle
          </i>
      }
      { home && <i className='material-icons'>keyboard_arrow_right</i> }
      <header className='timeline-entry--title'>Home</header>
      <main className='timeline-entry--points'>{ points.home }</main>
    </div>

    <div className='timeline-entry--label timeline-entry--label__away'>
      { !home &&
        <i className='material-icons'
          onClick={(e) => undo()}>
          remove_circle
        </i>
      }
      { !home && <i className='material-icons'>keyboard_arrow_left</i> }
      <header className='timeline-entry--title'>Away</header>
      <main className='timeline-entry--points'>{ points.away }</main>
    </div>
  </div>
)

UndoableTimelineEntry.propTypes = {
  home: PropTypes.bool,
  time: PropTypes.number.isRequired,
  points: PropTypes.shape({
    home: PropTypes.number.isRequired,
    away: PropTypes.number.isRequired
  }),
  undo: PropTypes.func.isRequired
}

export default UndoableTimelineEntry
