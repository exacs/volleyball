import React, { PropTypes } from 'react'
import classNames from 'classnames'
import TeamScore from './TeamScore'

/** <Scoreboard teams rounds > */
class Scoreboard extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      toggled: false
    }
  }

  handleToggle () {
    this.setState(prevState => ({
      toggled: !prevState.toggled
    }))
  }

  render () {
    const cnRounds = classNames('scoreboard__rounds', {
      'scoreboard__rounds--summary': !this.state.toggled,
      'scoreboard__rounds--all': this.state.toggled
    })

    const cnHome = classNames('scoreboard__team', 'scoreboard__team--home')
    const cnAway = classNames('scoreboard__team', 'scoreboard__team--away')

    const row = (team, rounds) => (
      <tr>
        <th className='scoreboard__table__team'>{team.name}</th>
        { rounds.map(round => <td className='scoreboard__table__score'>{round}</td>)}
      </tr>
    )

    const table = () => this.state.toggled && (
      <table className='scoreboard__table'>
        <tbody>
          { row(this.props.teams.home, this.props.rounds.map(r => r.home)) }
          { row(this.props.teams.away, this.props.rounds.map(r => r.away)) }
        </tbody>
      </table>
    )

    const wonHome = this.props.rounds.filter(r => r.winner === 'home').length
    const wonAway = this.props.rounds.filter(r => r.winner === 'away').length

    return (
      <div className='scoreboard'>
        <div className={cnRounds}>
          <h2 className='scoreboard__title'>{wonHome} · SETS · {wonAway}</h2>
          <button
            className='scoreboard__rounds__toggle btn btn-link'
            onClick={() => this.handleToggle()}>
            <i className='material-icons'>
              { !this.state.toggled ? 'expand_more' : 'expand_less' }
            </i>
          </button>
          { table() }
        </div>
        <div className='scoreboard__teams'>
          <div className={cnHome}>
            <TeamScore
              feature='home'
              name={this.props.teams.home.name}
              shortName={this.props.teams.home.shortName}
              onPoint={this.props.onPoint && this.props.onPoint.home}
              points={this.props.rounds[this.props.rounds.length - 1].home} />
          </div>
          <div className={cnAway}>
            <TeamScore
              feature='away'
              name={this.props.teams.away.name}
              shortName={this.props.teams.away.shortName}
              onPoint={this.props.onPoint && this.props.onPoint.away}
              points={this.props.rounds[this.props.rounds.length - 1].away} />
          </div>
        </div>
      </div>
    )
  }
}

const teamShape = {
  shortName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

Scoreboard.propTypes = {
  rounds: PropTypes.arrayOf(PropTypes.shape({
    home: PropTypes.number.isRequired,
    away: PropTypes.number.isRequired
  })),
  teams: PropTypes.shape({
    home: PropTypes.shape(teamShape),
    away: PropTypes.shape(teamShape)
  }),
  onPoint: PropTypes.shape({
    home: PropTypes.func,
    away: PropTypes.func
  })
}

export default Scoreboard
