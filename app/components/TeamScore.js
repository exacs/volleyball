import React, { PropTypes } from 'react'
import classNames from 'classnames'

/**
 * <TeamScore name shortName points feature onPoint />
 */
const TeamScore = ({name, shortName, points, feature, onPoint} = {}) => {
  const cnAvatar = classNames('team-score__team-avatar', {
    'team-score__team-avatar--home': feature === 'home',
    'team-score__team-avatar--away': feature === 'away'
  })

  return (
    <div className='team-score'>
      <header className='team-score__team'>
        <h3 className='team-score__team-title'>{ feature }</h3>
        <figure className={cnAvatar}>
          <div className='team-score__team-abbr'>{ shortName }</div>
        </figure>
        <div className='team-score__team-name'>{ name }</div>
      </header>
      <main>
        <div className='team-score__points'>{ points }</div>
        { onPoint &&
          <button className='team-score__button btn btn-link' onClick={e => onPoint()}>
            <i className='material-icons'>add</i>
          </button>
        }
      </main>
    </div>
  )
}

TeamScore.propTypes = {
  local: PropTypes.bool,
  shortName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  feature: PropTypes.oneOf(['home', 'away']),
  onPoint: PropTypes.func
}

export default TeamScore
