import React, { PropTypes } from 'react'
import RefactoredTimeline from './UndoableTimeline_refactored'

const UndoableTimeline = ({history, undo}) => (
  <RefactoredTimeline history={history} undo={undo} />
)

UndoableTimeline.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    time: PropTypes.number,
    action: PropTypes.oneOf(['point']),
    feature: PropTypes.oneOf(['home', 'away'])
  })),
  undo: PropTypes.func.isRequired
}

export default UndoableTimeline
