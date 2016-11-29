import React from 'react'
import { connect } from 'react-redux'

import EditableScoreboard from './components/EditableScoreboard'
import UndoableTimeline from './components/UndoableTimeline'
import { emitPoint, emitUndo } from '../app/actions/io'

const teams = {
  home: {
    shortName: 'UAH',
    name: 'Alcalá'
  },
  away: {
    shortName: 'UAM',
    name: 'Autónoma'
  }
}

const RefereeRoot = ({
  round,
  points,
  incrementHome,
  incrementAway,
  history,
  undo
}) => (
  <div>
    <EditableScoreboard
      round={round}
      teams={teams}
      points={points}
      incrementHome={incrementHome}
      incrementAway={incrementAway} />
    <UndoableTimeline history={history} undo={undo} />
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  incrementHome: () => dispatch(emitPoint('home', Date.now())),
  incrementAway: () => dispatch(emitPoint('away', Date.now())),
  undo: () => dispatch(emitUndo())
})

const mapStateToProps = (state) => ({
  round: 1,
  points: state.points,
  history: state.history
})

export default connect(mapStateToProps, mapDispatchToProps)(RefereeRoot)
