import React, { PropTypes } from 'react'
import Entry from './UndoableTimelineEntry_refactored'

const TimelineEntry = ({home = false, time, points}) => (
  <Entry
    home={home}
    time={time}
    points={points}
  />
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
