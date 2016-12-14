/* eslint-env mocha */
import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

import reduce from 'reducers/index'

describe('Reduce called with no state or action argument', function () {
  it('returns the initialState', function () {
    const initialState = {
      winner: null,
      rounds: [{
        home: 0,
        away: 0,
        winner: null
      }],
      history: []
    }
    deepFreeze(initialState)
    expect(reduce()).to.deep.equal(initialState)
  })
})
