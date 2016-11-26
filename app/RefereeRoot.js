import React from 'react'
import { connect } from 'react-redux'

import EditableScoreboard from './components/EditableScoreboard'
import Timeline from './components/Timeline'
import { point } from '../app/actions'

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
  history
}) => (
  <div>
    <EditableScoreboard
      round={round}
      teams={teams}
      points={points}
      incrementHome={incrementHome}
      incrementAway={incrementAway} />
    <Timeline history={history} />
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  incrementHome: () => dispatch(point('home', Date.now())),
  incrementAway: () => dispatch(point('away', Date.now()))
})

const mapStateToProps = (state) => ({
  round: 1,
  points: state.points,
  history: state.history
})

export default connect(mapStateToProps, mapDispatchToProps)(RefereeRoot)
