/* eslint-env mocha */
import chai from 'chai'
const expect = chai.expect

import reduce from 'reducers/index'
import { point, undo } from 'actions/index'

describe('Main reducer', function () {
  const oldState = {
    points: {
      home: 0,
      away: 0
    },
    history: [{ time: 1, action: 'point', feature: 'home' }]
  }
  describe('reduce for unknown action.type', function () {
    it('Should not change the reference of the state', function () {
      expect(reduce(oldState, { type: 'XXXX' })).to.equal(oldState)
    })
  })

  describe('reduce with POINT action.type', function () {
    it('Should POINT home properly', function () {
      expect(reduce(oldState, point('home')).points)
        .to.deep.equal({ home: 1, away: 0 })
    })

    it('Should POINT away properly', function () {
      expect(reduce(oldState, point('away')).points)
        .to.deep.equal({ home: 0, away: 1 })
    })

    it('Should register the history properly', function () {
      expect(reduce(oldState, point('home', 2)).history)
        .to.deep.equal([
          { time: 1, action: 'point', feature: 'home' },
          { time: 2, action: 'point', feature: 'home' }
        ])
    })
  })

  describe('reduce with UNDO action.type', function () {
    it('Should UNDO', function () {
      expect(reduce(oldState, undo()))
        .to.deep.equal({
          points: {
            home: -1,
            away: 0
          },
          history: []
        })
    })
  })
})
