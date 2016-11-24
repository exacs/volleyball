import React from 'react'
import TimelineEntry from './TimelineEntry'

const Timeline = () => (
  <div className='timeline'>
    <ul className='timeline--list'>
      <li className='timeline--item'>
        <TimelineEntry time={60} points={{home: 15, away: 4}} home />
      </li>

      <li className='timeline--item'>
        <TimelineEntry time={50} points={{home: 15, away: 3}} />
      </li>

      <li className='timeline--item'>
        <TimelineEntry time={48} points={{home: 15, away: 2}} />
      </li>
    </ul>
  </div>
)

export default Timeline
