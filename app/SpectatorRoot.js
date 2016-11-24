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

const SpectatorRoot = () => (
  <div>
    <Scoreboard round={3} teams={teams} points={{ home: 1, away: 4 }} />
    <Timeline />
  </div>
)

export default SpectatorRoot
