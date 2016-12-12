/**
 * Redux actions
 */
export const POINT = 'point'
export const UNDO = 'undo'

export const point = (feature, time) => ({
  type: POINT,
  time,
  feature
})

export const undo = () => ({
  type: UNDO
})
