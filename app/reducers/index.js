import * as ActionTypes from '../actions'

function reducer (state, action) {
  if (state.winner !== null) return state

  switch (action.type) {
    case ActionTypes.POINT:
      return winMatch(winRound(pointReducer(state, action)))
    case ActionTypes.UNDO:
      return Object.assign(
        { history: state.history },
        undoReducer(state, action)
      )
    default:
      return state
  }
}

function winMatch (state) {
  if (state.rounds.home >= 3 || state.rounds.away >= 3) {
    return Object.assign({}, state,
      { winner: state.rounds.home >= 3 ? 'home' : 'away' }
    )
  } else {
    return state
  }
}

function winRound (state) {
  const max = state.rounds.home + state.rounds.away === 4 ? 15 : 25
  const diff = Math.abs(state.points.home - state.points.away)
  if (diff >= 2 && (state.points.home >= max || state.points.away >= max)) {
    return {
      winner: state.winner,
      points: {
        home: 0,
        away: 0
      },
      rounds: {
        home: state.rounds.home + (state.points.home > state.points.away),
        away: state.rounds.away + (state.points.away > state.points.home)
      },
      history: []
    }
  } else {
    return state
  }
}

function pointReducer (state, action) {
  return {
    winner: state.winner,
    rounds: state.rounds,
    points: {
      home: state.points.home + (action.feature === 'home'),
      away: state.points.away + (action.feature === 'away')
    },
    history: state.history.concat({
      time: action.time,
      action: 'point',
      feature: action.feature
    })
  }
}

function undoReducer (state) {
  const lastAction = state.history[state.history.length - 1]

  return {
    points: {
      home: state.points.home - (lastAction.feature === 'home'),
      away: state.points.away - (lastAction.feature === 'away')
    },
    history: state.history.slice(0, -1)
  }
}

export default reducer
