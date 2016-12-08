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
  render () {
    return (
      <div>
        <EditableScoreboard
          round={this.props.round}
          teams={teams}
          points={this.props.points}
          incrementHome={this.props.incrementHome}
          incrementAway={this.props.incrementAway} />
        <Timeline
          history={this.props.history}
          undo={this.props.undo} />
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
