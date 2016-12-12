/* eslint-env mocha */
import { expect } from 'chai'

import reduce from 'reducers/index'
import { UPDATE_MATCH } from 'actions/index'
import deepFreeze from 'deep-freeze'

describe('Reduce when action.type == UPDATE_MATCH', function () {
  it('returns exactly the same value as action.newState', function () {
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

    const updateMatch = {
      type: UPDATE_MATCH,
      newState: 0
    }

    expect(reduce(initialState, updateMatch)).to.deep.equal(0)
  })
})
