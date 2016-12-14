import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import Scoreboard from '../components/Scoreboard'
import Timeline from '../components/Timeline'
import { emitPoint, emitUndo } from '../../app/actions'

/**
 * <Referee round points incrementHome incrementAway history undo>
 */
export class Referee extends React.Component {
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
        <Scoreboard
          onPoint={this.props.onPoint}
          rounds={this.props.rounds}
          teams={this.state.teams} />
        <Timeline
          history={this.props.history}
          undo={this.props.onUndo}
        />
      </div>
    )
  }
}

Referee.propTypes = {
  rounds: PropTypes.arrayOf(PropTypes.shape({
    home: PropTypes.number.isRequired,
    away: PropTypes.number.isRequired
  })),
  onPoint: PropTypes.shape({
    home: PropTypes.func,
    away: PropTypes.func
  }),
  onUndo: PropTypes.func.isRequired
}

/** React-Redux */
const mapDispatchToProps = (dispatch) => ({
  onPoint: {
    home: () => dispatch(emitPoint('home')),
    away: () => dispatch(emitPoint('away'))
  },
  onUndo: () => dispatch(emitUndo())
})

const mapStateToProps = (state) => ({
  rounds: state.rounds,
  history: state.history
})

export default connect(mapStateToProps, mapDispatchToProps)(Referee)
