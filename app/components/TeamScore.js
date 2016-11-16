import React, { PropTypes } from 'react'

const TeamScore = ({local = false, shortName, name, points} = {}) => (
  <div className='team-score'>
    <header>
      <h3 className='team-score--title'>{ local ? 'Local' : 'Visitor' }</h3>
      <figure className={`team-score--avatar ${local ? '' : 'team-score--avatar__visitor'}`}>
        <div className='team-score--abbr'>{ shortName }</div>
      </figure>
      <div className='team-score--name'>{ name }</div>
    </header>
    <main className='team-score--points'>{ points }</main>
  </div>
)

TeamScore.propTypes = {
  local: PropTypes.boolean,
  shortName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired
}

export default TeamScore
