import React, { PropTypes } from 'react'
import classNames from 'classnames'

/**
 * <TeamScore name shortName points feature />
 */
const TeamScore = ({name, shortName, points, feature} = {}) => {
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
      <main className='team-score__points'>{ points }</main>
    </div>
  )
}

TeamScore.propTypes = {
  local: PropTypes.bool,
  shortName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  feature: PropTypes.oneOf(['home', 'away'])
}

export default TeamScore
