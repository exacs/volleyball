import React, { PropTypes } from 'react'

const EditableTeamScore = ({
  local = false,
  shortName,
  name,
  points,
  onIncrement
} = {}) => (
  <div className={`editable-team-score ${local ? '' : 'editable-team-score__visitor'} p-1`}>
    <header className='editable-team-score--team'>
      <h3 className='editable-team-score--title'>{ local ? 'Local' : 'Visitor' }</h3>
      <div className='editable-team-score--name'>{ name }</div>
    </header>
    <main className='editable-team-score--form'>
      <div className='editable-team-score--control'>
        <button
          onClick={ function (e) { onIncrement() } }
          className='editable-team-score--button rounded-circle'>
          +
        </button>
      </div>
      <div className='editable-team-score--points'>
        { points }
      </div>
    </main>
  </div>
)

EditableTeamScore.propTypes = {
  local: PropTypes.bool,
  shortName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired
}

export default EditableTeamScore
