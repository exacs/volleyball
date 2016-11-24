import React from 'react'

const TimelineEntry = () => (
  <div className='timeline-entry'>
    <time className='timeline-entry--node'>
      <span className='timeline-entry--time'>65'</span>
    </time>

    <div className='timeline-entry--label timeline-entry--label__home__active'>
      <header className='timeline-entry--title'>Home</header>
      <main className='timeline-entry--points'>15</main>
    </div>

    <div className='timeline-entry--label timeline-entry--label__away__active'>
      <header className='timeline-entry--title'>Away</header>
      <main className='timeline-entry--points'>4</main>
    </div>
  </div>
)

export default TimelineEntry
