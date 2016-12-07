import React, { PropTypes } from 'react'
import Entry from './UndoableTimelineEntry_refactored'

const UndoableTimelineEntry = ({home = false, time, points, undo}) => (
  <Entry
    home={home}
    time={time}
    points={points}
    undo={undo}
  />
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
