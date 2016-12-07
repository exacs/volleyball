import React, { PropTypes } from 'react'
import RefactoredTimeline from './UndoableTimeline_refactored'

const Timeline = ({history}) => (
  <RefactoredTimeline history={history} />
)

Timeline.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    time: PropTypes.number,
    action: PropTypes.oneOf(['point']),
    feature: PropTypes.oneOf(['home', 'away'])
  }))
}

export default Timeline
