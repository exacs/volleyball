import { POINT, UNDO } from './index'
import { EMIT_IO } from '../middleware/io'

export const emitPoint = (feature, time) => ({
  [EMIT_IO]: {
    event: 'referee_update',
    data: {
      type: POINT,
      time,
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
