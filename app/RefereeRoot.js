import React from 'react'
import EditableScoreboard from './components/EditableScoreboard'
import Timeline from './components/Timeline'

const teams = {
  home: {
    shortName: 'UAH',
    name: 'Alcalá'
  },
  away: {
    shortName: 'UAM',
    name: 'Autónoma'
  }
}

const history = [
  { time: 3, action: 'point', feature: 'away' },
  { time: 4, action: 'point', feature: 'away' },
  { time: 6, action: 'point', feature: 'home' },
  { time: 7, action: 'point', feature: 'away' },
  { time: 9, action: 'point', feature: 'away' }
]

class RefereeRoot extends React.Component {
  constructor (props) {
    super(props)

    this.handleScoreChange = this.handleScoreChange.bind(this)
    this.state = {
      points: {
        home: 1,
        away: 4
      }
    }
  }

  handleScoreChange (key) {
    return () => {
      this.setState(prevState => ({
        points: {
          home: prevState.points.home + (key === 'home'),
          away: prevState.points.away + (key === 'away')
        }
      }))
    }
  }

  render () {
    const {home, away} = this.state.points

    return (
      <div>
        <EditableScoreboard
          round={3}
          teams={teams}
          points={{home, away}}
          incrementHome={this.handleScoreChange('home')}
          incrementAway={this.handleScoreChange('away')} />
        <Timeline history={history} />
      </div>
    )
  }
}

export default RefereeRoot
