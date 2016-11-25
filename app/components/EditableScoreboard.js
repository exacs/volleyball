import React, { PropTypes } from 'react'
import EditableTeamScore from './EditableTeamScore'

const EditableScoreboard = ({ round, teams, points }) => (
  <div className='score-board pb-3'>
    <h2 className='score-board--title pb-1 pt-1'>SET {round}</h2>
    <div className='score-board--teams'>
      <div className='score-board--team score-board__local'>
        <EditableTeamScore shortName={teams.home.shortName} name={teams.home.name} points={points.home} local />
      </div>
      <div className='score-board--team score-board__visitor'>
        <EditableTeamScore shortName={teams.away.shortName} name={teams.away.name} points={points.away} />
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
  })
}

export default EditableScoreboard
