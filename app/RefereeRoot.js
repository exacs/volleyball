import React from 'react'
import { connect } from 'react-redux'

import EditableScoreboard from './components/EditableScoreboard'
import UndoableTimeline from './components/UndoableTimeline'
import { point, undo } from '../app/actions'

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
  incrementHome: () => dispatch(point('home', Date.now())),
  incrementAway: () => dispatch(point('away', Date.now())),
  undo: () => dispatch(undo())
})

const mapStateToProps = (state) => ({
  round: 1,
  points: state.points,
  history: state.history
})

export default connect(mapStateToProps, mapDispatchToProps)(RefereeRoot)
