/* eslint-env mocha */
import chai from 'chai'
const expect = chai.expect

import reduce from 'reducers/index'
import { point, undo } from 'actions/index'

describe('Main reducer', function () {
  const oldState = {
    rounds: {
      home: 0,
      away: 0
    },
    points: {
      home: 0,
      away: 0
    },
    history: [{ time: 1, action: 'point', feature: 'home' }]
  }
  describe('with XXXX action.type', function () {
    it('should not change the reference of the state', function () {
      expect(reduce(oldState, { type: 'XXXX' })).to.equal(oldState)
    })
  })

  describe('with POINT action.type', function () {
    it('should POINT home properly', function () {
      expect(reduce(oldState, point('home')).points)
        .to.deep.equal({ home: 1, away: 0 })
    })

    it('should POINT away properly', function () {
      expect(reduce(oldState, point('away')).points)
        .to.deep.equal({ home: 0, away: 1 })
    })

    it('should register the history properly', function () {
      expect(reduce(oldState, point('home', 2)).history)
        .to.deep.equal([
          { time: 1, action: 'point', feature: 'home' },
          { time: 2, action: 'point', feature: 'home' }
        ])
    })

    describe('when home points and score was 24-20', function () {
      const oldState = {
        rounds: {
          home: 0,
          away: 0
        },
        points: {
          home: 24,
          away: 20
        },
        history: [{ time: 1, action: 'point', feature: 'home' }]
      }

      const newState = reduce(oldState, point('home'))

      it('should increment home rounds', function () {
        expect(newState.rounds).to.deep.equal({
          home: 1,
          away: 0
        })
      })

      it('should reset points', function () {
        expect(newState.points).to.deep.equal({
          home: 0,
          away: 0
        })
      })

      it('should reset history', function () {
        expect(newState.history).to.deep.equal([])
      })
    })
  })

  describe('when home points and score was 24-24', function () {
    const oldState = {
      rounds: {
        home: 0,
        away: 0
      },
      points: {
        home: 24,
        away: 24
      },
      history: [{ time: 1, action: 'point', feature: 'home' }]
    }

    const newState = reduce(oldState, point('home'))

    it('should not increment home rounds', function () {
      expect(newState.rounds).to.deep.equal({
        home: 0,
        away: 0
      })
    })

    it('should continue the round', function () {
      expect(newState.points).to.deep.equal({
        home: 25,
        away: 24
      })
    })
  })

  describe('when home points and score was 80-80', function () {
    const oldState = {
      rounds: {
        home: 0,
        away: 0
      },
      points: {
        home: 80,
        away: 80
      },
      history: [{ time: 1, action: 'point', feature: 'home' }]
    }

    const newState = reduce(oldState, point('home'))

    it('should not increment home rounds', function () {
      expect(newState.rounds).to.deep.equal({
        home: 0,
        away: 0
      })
    })

    it('should continue the round 81-80', function () {
      expect(newState.points).to.deep.equal({
        home: 81,
        away: 80
      })
    })
  })

  describe('when home points and score was 25-24', function () {
    const oldState = {
      rounds: {
        home: 0,
        away: 0
      },
      points: {
        home: 25,
        away: 24
      },
      history: [{ time: 1, action: 'point', feature: 'home' }]
    }

    const newState = reduce(oldState, point('home'))

    it('should increment home rounds', function () {
      expect(newState.rounds).to.deep.equal({
        home: 1,
        away: 0
      })
    })

    it('should reset the points', function () {
      expect(newState.points).to.deep.equal({
        home: 0,
        away: 0
      })
    })
  })

  describe('with UNDO action.type', function () {
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
