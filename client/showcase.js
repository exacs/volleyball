/**
 * Client-side JS for Components Showcase
 */
import './sass/index.scss'
import React from 'react'
import { render } from 'react-dom'

import TimelineEntry from '../app/components/TimelineEntry'
import Timeline from '../app/components/Timeline'
import TeamScore from '../app/components/TeamScore'
import Scoreboard from '../app/components/Scoreboard'
import { Spectator } from '../app/containers/Spectator'
import { Referee } from '../app/containers/Referee'

render(
  <TimelineEntry
    time={0}
    points={{ home: 0, away: 0 }}
    feature='home'/>,
  document.getElementById('timeline-entry')
)

render(
  <Timeline
    undo={() => {}}
    history={[
      { time: 0, action: 'point', feature: 'home' },
      { time: 0, action: 'point', feature: 'home' }
    ]} />,
  document.getElementById('timeline')
)

render(
  <TeamScore
    name='local'
    shortName='L'
    points={6}
    onPoint={() => {}}
    feature='home' />,
  document.getElementById('team-score')
)

render(
  <Scoreboard
    rounds={[
      { home: 25, away: 21, winner: 'home' },
      { home: 23, away: 24, winner: null }
    ]}
    teams={{
      home: { name: 'home', shortName: 'L' },
      away: { name: 'away', shortName: 'V' }
    }}
    onPoint={{
      home: () => {},
      away: () => {}
    }} />,
  document.getElementById('scoreboard')
)

render(
  <Spectator
    rounds={[
      { home: 25, away: 25, winner: null }
    ]}
    history={[
      { time: 0, action: 'point', feature: 'home' }
    ]} />,
  document.getElementById('spectator')
)

render(
  <Referee
    rounds={[
      { home: 25, away: 25, winner: null }
    ]}
    history={[
      { time: 0, action: 'point', feature: 'home' }
    ]}
    onPoint={{
      home: () => {},
      away: () => {}
    }}
    onUndo={() => {}} />,
  document.getElementById('referee')
)

module.hot.accept()
