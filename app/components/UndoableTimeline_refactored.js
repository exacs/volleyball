import React, { PropTypes } from 'react'
import TimelineEntry from './UndoableTimelineEntry_refactored'

function eventsToStates (events) {
  const states = []
  const acc = {home: 0, away: 0}

  events.forEach(event => {
    acc.home = acc.home + (event.feature === 'home')
    acc.away = acc.away + (event.feature === 'away')

    states.push({
      time: event.time,
      points: {
        home: acc.home,
        away: acc.away
      },
      home: event.feature === 'home'
    })
  })
  return states
}

const Item = ({item, undo}) => (
  <li className='timeline--item'>
    <TimelineEntry
      undo={undo}
      time={item.time}
      points={item.points}
      home={item.home} />
  </li>
)

const UndoableTimeline = ({history, undo}) => {
  const states = eventsToStates(history).reverse()
  const first = states[0]

  return (
    <div className='timeline'>
      <ul className='timeline--list'>
        { first && <Item item={first} undo={undo} /> }
        { states.slice(1).map(state => <Item item={state} />) }
      </ul>
    </div>
  )
}
UndoableTimeline.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    time: PropTypes.number,
    action: PropTypes.oneOf(['point']),
    feature: PropTypes.oneOf(['home', 'away'])
  })),
  undo: PropTypes.func
}

export default UndoableTimeline
