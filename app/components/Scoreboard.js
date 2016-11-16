import React from 'react'
import TeamScore from './TeamScore'

const Scoreboard = () => (
  <div className='score-board'>
    <h2 className='score-board--title'>First set</h2>
    <div className='score-board--teams'>
      <div className='score-board--team score-board__local'>
        <TeamScore shortName='UPM' name='Politécnica' points={15} local />
      </div>
      <div className='score-board--team score-board__visitor'>
        <TeamScore shortName='UCM' name='Complutense' points={4} />
      </div>
    </div>
  </div>
)

export default Scoreboard
