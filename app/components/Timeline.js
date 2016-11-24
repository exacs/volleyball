import React, { PropTypes } from 'react'
import TimelineEntry from './TimelineEntry'

/**
 * Converts an array of events to an array of states.
 *
 * events are objects like { time, action, feature }
 * states are objects like { time, points, home }
 */
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

const Timeline = ({history}) => (
  <div className='timeline'>
    <ul className='timeline--list'>
      {
        eventsToStates(history).reverse().map(state =>
          <li className='timeline--item' key={state.time}>
            <TimelineEntry
              time={state.time}
              points={{home: state.points.home, away: state.points.away}}
              home={state.home} />
          </li>
        )
      }
    </ul>
  </div>
)

Timeline.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    time: PropTypes.number,
    action: PropTypes.oneOf(['point']),
    feature: PropTypes.oneOf(['home', 'away'])
  }))
}

export default Timeline
