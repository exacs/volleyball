/**
 * Manage the server internal state
 *
 * Uses most of the logic of redux
 */
import { createStore } from 'redux'
import reducer from '../app/reducers'

const match = {
  winner: null,
  rounds: {
    home: 0,
    away: 0
  },
  points: {
    home: 0,
    away: 0
  },
  history: []
}

export default createStore(reducer, match)
