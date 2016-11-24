import React, { PropTypes } from 'react'

const TimelineEntry = ({home = false, time, points}) => (
  <div className='timeline-entry'>
    <time className='timeline-entry--node'>
      <span className='timeline-entry--time'>{ time + '\'' }</span>
    </time>

    <div className={`timeline-entry--label timeline-entry--label__home${home ? '__active' : ''}`}>
      <header className='timeline-entry--title'>Home</header>
      <main className='timeline-entry--points'>{ points.home }</main>
    </div>

    <div className={`timeline-entry--label timeline-entry--label__away${home ? '' : '__active'}`}>
      <header className='timeline-entry--title'>Away</header>
      <main className='timeline-entry--points'>{ points.away }</main>
    </div>
  </div>
)

TimelineEntry.propTypes = {
  home: PropTypes.bool,
  time: PropTypes.number.isRequired,
  points: PropTypes.shape({
    home: PropTypes.number.isRequired,
    away: PropTypes.number.isRequired
  })
}

export default TimelineEntry
