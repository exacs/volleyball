/**
 * Manage the server internal state
 *
 * Uses most of the logic of redux
 */
import { createStore } from 'redux'
import reducer from '../app/reducers'

const state = {
  score: {
    winner: null,
    rounds: [{
      home: 0,
      away: 0,
      winner: null
    }],
    history: []
  }
}

export default createStore(reducer, state)
