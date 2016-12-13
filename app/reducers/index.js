import * as ActionTypes from '../actions'

const initialState = {
  winner: null,
  rounds: [{
    home: 0,
    away: 0,
    winner: null
  }],
  history: []
}

/**
 * Main reducer of the state.
 *
 * See README.md for docs
 */
export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case ActionTypes.POINT:
      return sumPoint(state, action.feature, action.time)
    case ActionTypes.UNDO:
      return undoPoint(state)
    case ActionTypes.UPDATE_MATCH:
      return action.newState
    default:
      return state
  }
}

/**
 * @private
 *
 * Sum a point to a team.
 *
 * @param state     State object
 *
 * @param feature   who features the point
 *                  can have the values 'home' or 'away'
 *
 * @param time      minutes from the beginning of the match
 *
 * @return a new state object
 *
 * If a team reaches at least 25 points with a minimum difference of 2 in the 1st-4th round,
 * automatically is declared the winner of that round and starts a new one.
 *
 * If a team reaches at least 15 points with a minimum difference of 2 in the 5th round,
 * automatically is declared the winner of that round and starts a new one.
 *
 * If a team reaches 15 points in the 5th round, automatically is declared the winner of that
 * round and automatically starts a new one.
 *
 * If a team won three rounds, automatically is declared the winner of the match.
 *
 * The history is updated everytime
 *
 * No action is performed if the match has been ended
 */
function sumPoint (state, feature, time) {
  if (state.winner === 'home' || state.winner === 'away') {
    return state
  }

  if (feature !== 'home' && feature !== 'away') {
    return state
  }

  // Increment the number of points
  const round = state.rounds.length - 1
  const oldCurrentRound = state.rounds[round]
  // The following operation can be performed using type coercion
  const currentRound = {
    home: feature === 'home' ? oldCurrentRound.home + 1 : oldCurrentRound.home,
    away: feature === 'away' ? oldCurrentRound.away + 1 : oldCurrentRound.away,
    winner: null
  }

  // Determine if some team has won the current round
  const diff = Math.abs(currentRound.home - currentRound.away)
  const max = Math.max(currentRound.home, currentRound.away)

  let rounds = state.rounds.slice(0, -1).concat(currentRound)

  if ((max >= 25 || (round === 4 && max >= 15)) && diff >= 2) {
    currentRound.winner = currentRound.home > currentRound.away ? 'home' : 'away'
  }

  // Determine if someone won the match
  const roundsHome = rounds.filter(r => r.winner === 'home').length
  const roundsAway = rounds.filter(r => r.winner === 'away').length

  let winner = null
  if (roundsHome >= 3 || roundsAway >= 3) {
    winner = roundsHome > roundsAway ? 'home' : 'away'
  } else if (currentRound.winner === 'home' || currentRound.winner === 'away') {
    rounds.push({ home: 0, away: 0, winner: null })
  }

  // Add the action to history
  const history = state.history.concat({
    time,
    feature,
    previous: state.rounds
  })

  return { winner, rounds, history }
}

/**
 * @private
 *
 * Undo the last action
 *
 * @param state    State object
 * @return a new state object
 *
 */
function undoPoint (state) {
  if (state.history.length === 0) {
    return state
  }

  const previous = state.history[state.history.length - 1].previous

  return {
    winner: null,
    rounds: previous,
    history: state.history.slice(0, -1)
  }
}

