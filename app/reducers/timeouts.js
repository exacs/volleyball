import * as ActionTypes from '../actions'

const initialState = {
  home: 2,
  away: 2
}

/**
 * Main reducer
 */
export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case ActionTypes.START_TIMEOUT:
      return {
        home: action.feature === 'home' ? state.home - 1 : state.home,
        away: action.feature === 'away' ? state.away - 1 : state.away
      }
    default:
      return state
  }
}
