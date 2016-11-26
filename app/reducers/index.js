import * as ActionTypes from '../actions'

function reducer (state, action) {
  switch (action.type) {
    case ActionTypes.POINT:
      return pointReducer(state, action)
    case ActionTypes.UNDO:
      return undoReducer(state, action)
    default:
      return state
  }
}

function pointReducer (state, action) {
  return {
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
