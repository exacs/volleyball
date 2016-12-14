/**
 * Redux actions
 */
import { emitUndo, emitPoint } from './io'

/* Synchronous actions */
export const POINT = 'point'
export const UNDO = 'undo'
export const UPDATE_STATE = 'update_state'

export const point = (feature, time) => ({
  type: POINT,
  time,
  feature
})

export const undo = () => ({
  type: UNDO
})

export const updateState = (newState) => ({
  type: UPDATE_STATE,
  newState
})

/* IO related actions */
export {
  emitUndo,
  emitPoint
}
