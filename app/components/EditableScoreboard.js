import React, { PropTypes } from 'react'
import EditableTeamScore from './EditableTeamScore'

const EditableScoreboard = ({
  round,
  teams,
  points,
  inverted = false,
  incrementHome,
  incrementAway
}) => (
  <div className='score-board pb-3 px-1'>
    <h2 className='score-board--title py-1 m-0'>SET {round}</h2>
    <div className={`score-board--teams ${inverted ? 'score-board--teams__inverted' : ''}`}>
      <div className='score-board--team score-board__local'>
        <EditableTeamScore
          shortName={teams.home.shortName}
          name={teams.home.name}
          points={points.home}
          onIncrement={incrementHome}
          local={!inverted} />
      </div>
      <div className='score-board--team score-board__visitor'>
        <EditableTeamScore
          shortName={teams.away.shortName}
          name={teams.away.name}
          onIncrement={incrementAway}
          points={points.away}
          local={inverted}/>
      </div>
    </div>
  </div>
)

const teamShape = {
  shortName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

EditableScoreboard.propTypes = {
  round: PropTypes.number.isRequired,
  teams: PropTypes.shape({
    home: PropTypes.shape(teamShape),
    away: PropTypes.shape(teamShape)
  }),
  points: PropTypes.shape({
    home: PropTypes.number.isRequired,
    away: PropTypes.number.isRequired
  }),
  incrementHome: PropTypes.func.isRequired,
  incrementAway: PropTypes.func.isRequired,
  inverted: PropTypes.boolean
}

export default EditableScoreboard
