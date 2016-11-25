import React from 'react'
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

const history = [
  { time: 3, action: 'point', feature: 'away' },
  { time: 4, action: 'point', feature: 'away' },
  { time: 6, action: 'point', feature: 'home' },
  { time: 7, action: 'point', feature: 'away' },
  { time: 9, action: 'point', feature: 'away' }
]

const RefereeRoot = () => (
  <div>
    <Scoreboard round={3} teams={teams} points={{ home: 1, away: 4 }} />
    <Timeline history={history} />
  </div>
)

export default RefereeRoot
