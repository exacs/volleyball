import React from 'react'
import TimelineEntry from './TimelineEntry'

const Timeline = () => (
  <div className='timeline'>
    <ul className='timeline--list'>
    {
      [1, 2].map(i =>
        <li className='timeline--item'>
          <TimelineEntry key={i} />
        </li>
      )
    }
    </ul>
  </div>
)

export default Timeline
