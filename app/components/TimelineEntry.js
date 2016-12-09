import React, { PropTypes } from 'react'

const Undo = ({undo}) => (
  <i
    onClick={e => undo()}
    className='material-icons'>remove_circle</i>
)

const ArrowIcon = ({home}) => (
  <i className='material-icons'>
    { home ? 'keyboard_arrow_right' : 'keyboard_arrow_left' }
  </i>
)

const UndoableTimelineEntry = ({home = false, time, points, undo, inverted = false}) => (
  <div className='timeline-entry'>
    <time className='timeline-entry--node'>
      <span className='timeline-entry--time'>{ 'X\'' }</span>
    </time>

    <div className={`timeline-entry--label timeline-entry--label__${!inverted ? 'home' : 'away'}`}>
      { undo && home && <Undo undo={undo} /> }
      { home && <ArrowIcon home={true} /> }
      <header className='timeline-entry--title'>Home</header>
      <main className='timeline-entry--points'>{ points.home }</main>
    </div>

    <div className={`timeline-entry--label timeline-entry--label__${!inverted ? 'away' : 'home'}`}>
      { undo && !home && <Undo undo={undo} /> }
      { !home && <ArrowIcon home={false} /> }
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
  undo: PropTypes.func,
  inverted: PropTypes.bool
}

export default UndoableTimelineEntry
