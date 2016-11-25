import React, { PropTypes } from 'react'

const EditableTeamScore = ({local = false, shortName, name, points} = {}) => (
  <div className={`team-score ${local ? '' : 'team-score__visitor'} p-1`}>
    <header className='team-score--team'>
      <h3 className='team-score--title'>{ local ? 'Local' : 'Visitor' }</h3>
      <figure className={`team-score--avatar ${local ? '' : 'team-score--avatar__visitor'} my-1 mx-auto rounded-circle`}>
        <div className='team-score--abbr'>{ shortName }</div>
      </figure>
      <div className='team-score--name'>{ name }</div>
    </header>
    <main className='team-score--points'>{ points }</main>
  </div>
)

EditableTeamScore.propTypes = {
  local: PropTypes.bool,
  shortName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired
}

export default EditableTeamScore
