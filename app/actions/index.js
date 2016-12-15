/**
 * Redux actions
 */
import { emitUndo, emitPoint } from './io'

/* Synchronous actions */
export const POINT = 'point'
export const UNDO = 'undo'
export const UPDATE_MATCH = 'update_state'
export const START_TIMEOUT = 'start_timeout'

export const point = (feature, time) => ({
  type: POINT,
  time,
  feature
})

export const undo = () => ({
  type: UNDO
})

export const updateMatch = (newState) => ({
  type: UPDATE_MATCH,
  newState
})

export const startTimeout = feature => ({
  type: START_TIMEOUT,
  feature
})

/* IO related actions */
export {
  emitUndo,
  emitPoint
}
