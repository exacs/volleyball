import React, { PropTypes } from 'react'
import TimelineEntry from './TimelineEntry'

/**
 * <Timeline history undo inverse>
 */
const Timeline = ({history, undo, inverse = false}) => {
  const states = calculatePoints(history).reverse()
  const first = states[0]

  const firstItem = () => (first &&
    <li className='timeline__item'>
      <TimelineEntry
        undo={undo}
        time={first.time}
        points={first.points}
        feature={first.feature}
        inverse={inverse} />
    </li>
  )

  const item = state => (
    <li className='timeline__item'>
      <TimelineEntry
        time={state.time}
        points={state.points}
        home={state.home}
        inverse={inverse} />
    </li>
  )

  return (
    <div className='timeline'>
      <ul className='timeline__list'>
        { firstItem() }
        { states.slice(1).map(item) }
      </ul>
    </div>
  )
}

Timeline.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    time: PropTypes.number,
    action: PropTypes.oneOf(['point']),
    feature: PropTypes.oneOf(['home', 'away'])
  })),
  undo: PropTypes.func.isRequired,
  inverse: PropTypes.bool
}

export default Timeline

/** Return an array of actions (event + home/away result after that event) */
function calculatePoints (events) {
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
      feature: event.feature
    })
  })
  return states
}
