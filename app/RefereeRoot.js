import React from 'react'
import { connect } from 'react-redux'

import EditableScoreboard from './components/EditableScoreboard'
import Timeline from './components/Timeline'
import { emitPoint, emitUndo } from '../app/actions/io'

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

class RefereeRoot extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      inverted: false
    }

    this.handleInvert = this.handleInvert.bind(this)
  }

  handleInvert () {
    this.setState(prevState => ({
      inverted: !prevState.inverted
    }))
  }

  render () {
    return (
      <div>
        <section className='referee--scoreboard'>
          <EditableScoreboard
            round={this.props.round}
            teams={teams}
            points={this.props.points}
            incrementHome={this.props.incrementHome}
            incrementAway={this.props.incrementAway}
            inverted={this.state.inverted} />
          <footer className='referee--footer'>
            <button className='referee--change-sides btn-link' onClick={this.handleInvert}>
              <i className='material-icons'>swap_horiz</i>
            </button>
          </footer>
        </section>
        <section>
          <Timeline
            history={this.props.history}
            undo={this.props.undo}
            inverted={this.state.inverted} />
        </section>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  incrementHome: () => dispatch(emitPoint('home', Date.now())),
  incrementAway: () => dispatch(emitPoint('away', Date.now())),
  undo: () => dispatch(emitUndo())
})

const mapStateToProps = (state) => ({
  round: 1,
  points: state.points,
  history: state.history
})

export default connect(mapStateToProps, mapDispatchToProps)(RefereeRoot)
