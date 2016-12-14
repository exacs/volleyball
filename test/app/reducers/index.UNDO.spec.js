/* eslint-env mocha */
import { expect } from 'chai'

import reduce from 'reducers/index'
import { UNDO } from 'actions/index'
import deepFreeze from 'deep-freeze'

describe('Reduce when action.type == UNDO', function () {
  describe('when there is no history', function () {
    const oldState = {
      winner: null,
      rounds: [],
      history: []
    }

    deepFreeze(oldState)

    const newState = reduce(oldState, { type: UNDO })

    it('doesnt change the state', function () {
      expect(newState).to.deep.equal(oldState)
    })
  })

  describe('from a normal state', function () {
    const oldState = {
      winner: null,
      rounds: [{ home: 1, away: 0, winner: null }],
      history: [{
        time: 0,
        feature: 'home',
        previous: [
          { home: 0, away: 0, winner: null }
        ]
      }]
    }

    deepFreeze(oldState)

    const newState = reduce(oldState, { type: UNDO })

    it('sets rounds score to the old state', function () {
      expect(newState.rounds).to.deep.equal([{ home: 0, away: 0, winner: null }])
    })

    it('removes the last action from history', function () {
      expect(newState.history).to.deep.equal([])
    })
  })

  describe('from a state where previous action was winning the set', function () {
    const oldState = {
      winner: null,
      rounds: [
        { home: 25, away: 0, winner: 'home' },
        { home: 0, away: 0, winner: null }
      ],
      history: [{
        time: 0,
        feature: 'home',
        previous: [
          { home: 24, away: 0, winner: null }
        ]
      }]
    }

    deepFreeze(oldState)

    const newState = reduce(oldState, { type: UNDO })

    it('restores the old state', function () {
      expect(newState.rounds).to.deep.equal([{ home: 24, away: 0, winner: null }])
    })

    it('removes the last action from history', function () {
      expect(newState.history).to.deep.equal([])
    })
  })
})
