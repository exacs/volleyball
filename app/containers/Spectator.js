import React, { PropTypes } from 'react'
import Scoreboard from '../components/Scoreboard'
import Timeline from '../components/Timeline'

/**
 * <Spectator rounds history>
 */
export class Spectator extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      teams: {
        home: { name: 'home', shortName: 'H' },
        away: { name: 'away', shortName: 'A' }
      }
    }
  }

  render () {
    return (
      <div>
        <Scoreboard rounds={this.props.rounds} teams={this.state.teams} />
        <Timeline history={this.props.history} />
      </div>
    )
  }
}

Spectator.propTypes = {
  rounds: PropTypes.arrayOf(PropTypes.shape({
    home: PropTypes.number.isRequired,
    away: PropTypes.number.isRequired
  })),
  history: PropTypes.arrayOf(PropTypes.shape({
    time: PropTypes.number,
    action: PropTypes.oneOf(['point']),
    feature: PropTypes.oneOf(['home', 'away'])
  }))
}
