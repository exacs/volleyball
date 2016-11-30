/**
 * Manage the server internal state
 *
 * Uses most of the logic of redux
 */
import { createStore } from 'redux'
import reducer from '../app/reducers'

const match = {
  points: {
    home: 0,
    away: 0
  },
  history: []
}

const store = createStore(reducer, match)

export const dispatch = (action) => store.dispatch(action)
export const getMatch = () => store.getState()
