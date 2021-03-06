/**
 * Redux Asynchronous actions related to WebSocket
 *
 * The Store needs to have the IO Middleware inside to work
 */
import { POINT, UNDO } from './index'
import { EMIT_IO } from '../middleware/io'

export const emitPoint = (feature) => ({
  [EMIT_IO]: {
    event: 'referee_update',
    data: {
      type: POINT,
      time: 0,
      feature
    }
  }
})

export const emitUndo = () => ({
  [EMIT_IO]: {
    event: 'referee_update',
    data: {
      type: UNDO
    }
  }
})
