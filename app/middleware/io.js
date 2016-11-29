export const EMIT_IO = Symbol('Emit IO Message')

export default io => store => next => action => {
  const emitIO = action[EMIT_IO]

  if (typeof emitIO === 'undefined') {
    return next(action)
  }

  const { event, data } = emitIO

  io.emit(event, data)
  return next(data)
}
