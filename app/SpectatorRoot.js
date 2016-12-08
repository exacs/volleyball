import React from 'react'
import { connect } from 'react-redux'

import Scoreboard from './components/Scoreboard'
import Timeline from './components/Timeline'

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

const SpectatorRoot = ({
  round,
  points,
  history
}) => (
  <div>
    <Scoreboard round={round} teams={teams} points={points} />
    <Timeline history={history} />
  </div>
)

const mapStateToProps = (state) => ({
  round: 1,
  points: state.points,
  history: state.history
})

export default connect(mapStateToProps)(SpectatorRoot)
