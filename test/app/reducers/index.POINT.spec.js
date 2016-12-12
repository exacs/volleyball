/* eslint-env mocha */
import { expect } from 'chai'

import reduce from 'reducers/index'
import { POINT } from 'actions/index'
import deepFreeze from 'deep-freeze'

describe('Reduce when action.type == POINT', function () {
  describe('and no one is about to win a set', function () {
    const old = {
      winner: null,
      rounds: [{ home: 0, away: 0, winner: null }],
      history: []
    }

    deepFreeze(old)

    const homePoint = { type: POINT, feature: 'home', time: 0 }
    const awayPoint = { type: POINT, feature: 'away', time: 0 }

    const newHome = reduce(old, homePoint)
    const newAway = reduce(old, awayPoint)

    it('sums 1 point to the feature team', function () {
      expect(newHome.rounds).to.deep.equal([{ home: 1, away: 0, winner: null }])
      expect(newAway.rounds).to.deep.equal([{ home: 0, away: 1, winner: null }])
    })

    it('adds a history entry', function () {
      expect(newHome.history).to.deep.equal([{
        time: 0,
        feature: 'home',
        previous: old.rounds
      }])
      expect(newAway.history).to.deep.equal([{
        time: 0,
        feature: 'away',
        previous: old.rounds
      }])
    })

    it('no winner is declared', function () {
      expect(newHome.winner).to.not.equal('home')
      expect(newHome.winner).to.not.equal('away')
      expect(newAway.winner).to.not.equal('home')
      expect(newAway.winner).to.not.equal('away')
    })
  })

  //
  // Check 24-24 > 25-24 or 25-24
  //

  describe('and set was 24-24', function () {
    const old = {
      winner: null,
      rounds: [{ home: 24, away: 24, winner: null }],
      history: []
    }

    deepFreeze(old)

    const homePoint = { type: POINT, feature: 'home', time: 0 }
    const awayPoint = { type: POINT, feature: 'away', time: 0 }

    const newHome = reduce(old, homePoint)
    const newAway = reduce(old, awayPoint)

    it('sums 1 point to the feature team', function () {
      expect(newHome.rounds).to.deep.equal([{ home: 25, away: 24, winner: null }])
      expect(newAway.rounds).to.deep.equal([{ home: 24, away: 25, winner: null }])
    })

    it('adds a history entry', function () {
      expect(newHome.history).to.deep.equal([{
        time: 0,
        feature: 'home',
        previous: old.rounds
      }])
      expect(newAway.history).to.deep.equal([{
        time: 0,
        feature: 'away',
        previous: old.rounds
      }])
    })

    it('no winner is declared', function () {
      expect(newHome.winner).to.not.equal('home')
      expect(newHome.winner).to.not.equal('away')
      expect(newAway.winner).to.not.equal('home')
      expect(newAway.winner).to.not.equal('away')
    })
  })

  //
  // Check 24-23 > 25-23  -or-  23-24 > 23-25
  //

  describe('and one team wins the set', function () {
    const oldHome = {
      winner: null,
      rounds: [{ home: 24, away: 23, winner: null }],
      history: []
    }
    const oldAway = {
      winner: null,
      rounds: [{ home: 23, away: 24, winner: null }],
      history: []
    }

    deepFreeze(oldHome)
    deepFreeze(oldAway)

    const homePoint = { type: POINT, feature: 'home', time: 0 }
    const awayPoint = { type: POINT, feature: 'away', time: 0 }

    const newHome = reduce(oldHome, homePoint)
    const newAway = reduce(oldAway, awayPoint)

    it('sums 1 point to the feature team and a winner of set is declared', function () {
      expect(newHome.rounds[0]).to.deep.equal({ home: 25, away: 23, winner: 'home' })
      expect(newAway.rounds[0]).to.deep.equal({ home: 23, away: 25, winner: 'away' })
    })

    it('starts a new round', function () {
      expect(newHome.rounds[1]).to.deep.equal({ home: 0, away: 0, winner: null })
      expect(newAway.rounds[1]).to.deep.equal({ home: 0, away: 0, winner: null })
    })

    it('adds a history entry', function () {
      expect(newHome.history).to.deep.equal([{
        time: 0,
        feature: 'home',
        previous: oldHome.rounds
      }])
      expect(newAway.history).to.deep.equal([{
        time: 0,
        feature: 'away',
        previous: oldAway.rounds
      }])
    })

    it('no winner of the match is declared', function () {
      expect(newHome.winner).to.not.equal('home')
      expect(newHome.winner).to.not.equal('away')
      expect(newAway.winner).to.not.equal('home')
      expect(newAway.winner).to.not.equal('away')
    })
  })

  //
  // What happens in 5th set
  //
  describe('in the 5th set', function () {
    const fourRounds = [
      { home: 25, away: 20, winner: 'home' },
      { home: 20, away: 25, winner: 'away' },
      { home: 25, away: 20, winner: 'home' },
      { home: 20, away: 25, winner: 'away' }
    ]

    //
    // Check 14-14 > 14-15 or 15-14
    //
    describe('when set was 14-14', function () {
      const old = {
        winner: null,
        rounds: [...fourRounds, { home: 14, away: 14, winner: null }],
        history: []
      }

      deepFreeze(old)

      const homePoint = { type: POINT, feature: 'home', time: 0 }
      const awayPoint = { type: POINT, feature: 'away', time: 0 }

      const newHome = reduce(old, homePoint)
      const newAway = reduce(old, awayPoint)

      it('sums 1 point to the feature team', function () {
        expect(newHome.rounds[4]).to.deep.equal({ home: 15, away: 14, winner: null })
        expect(newAway.rounds[4]).to.deep.equal({ home: 14, away: 15, winner: null })
      })

      it('adds a history entry', function () {
        expect(newHome.history).to.deep.equal([{
          time: 0,
          feature: 'home',
          previous: old.rounds
        }])
        expect(newAway.history).to.deep.equal([{
          time: 0,
          feature: 'away',
          previous: old.rounds
        }])
      })

      it('no winner is declared', function () {
        expect(newHome.winner).to.not.equal('home')
        expect(newHome.winner).to.not.equal('away')
        expect(newAway.winner).to.not.equal('home')
        expect(newAway.winner).to.not.equal('away')
      })
    })

    //
    // Check 13-14 > 14-15  -or-  14-13 > 15-13
    //
    describe('when one team wins the set', function () {
      const oldHome = {
        winner: null,
        rounds: [...fourRounds, { home: 14, away: 13, winner: null }],
        history: []
      }
      const oldAway = {
        winner: null,
        rounds: [...fourRounds, { home: 13, away: 14, winner: null }],
        history: []
      }

      deepFreeze(oldHome)
      deepFreeze(oldAway)

      const homePoint = { type: POINT, feature: 'home', time: 0 }
      const awayPoint = { type: POINT, feature: 'away', time: 0 }

      const newHome = reduce(oldHome, homePoint)
      const newAway = reduce(oldAway, awayPoint)

      it('sums 1 point to the feature team and a winner of set is declared', function () {
        expect(newHome.rounds[4]).to.deep.equal({ home: 15, away: 13, winner: 'home' })
        expect(newAway.rounds[4]).to.deep.equal({ home: 13, away: 15, winner: 'away' })
      })

      it('does not start a new round', function () {
        expect(newHome.rounds).to.have.length(5)
        expect(newAway.rounds).to.have.length(5)
      })

      it('adds a history entry', function () {
        expect(newHome.history).to.deep.equal([{
          time: 0,
          feature: 'home',
          previous: oldHome.rounds
        }])
        expect(newAway.history).to.deep.equal([{
          time: 0,
          feature: 'away',
          previous: oldAway.rounds
        }])
      })

      it('winner of the match is declared', function () {
        expect(newHome.winner).to.equal('home')
        expect(newAway.winner).to.equal('away')
      })
    }) // describe(when action.type == POINT and one teams wins the set
  }) // describe(in the 5th set)

  describe('when a team wins his 3rd set', function () {
    const oldHome = {
      winner: null,
      rounds: [
        { home: 25, away: 0, winner: 'home' },
        { home: 25, away: 0, winner: 'home' },
        { home: 24, away: 13, winner: null }
      ],
      history: []
    }
    const oldAway = {
      winner: null,
      rounds: [
        { home: 0, away: 25, winner: 'away' },
        { home: 0, away: 25, winner: 'away' },
        { home: 13, away: 24, winner: null }
      ],
      history: []
    }

    deepFreeze(oldHome)
    deepFreeze(oldAway)

    const homePoint = { type: POINT, feature: 'home', time: 0 }
    const awayPoint = { type: POINT, feature: 'away', time: 0 }

    const newHome = reduce(oldHome, homePoint)
    const newAway = reduce(oldAway, awayPoint)

    it('sums 1 point to the feature team and a winner of set is declared', function () {
      expect(newHome.rounds[2]).to.deep.equal({ home: 25, away: 13, winner: 'home' })
      expect(newAway.rounds[2]).to.deep.equal({ home: 13, away: 25, winner: 'away' })
    })

    it('winner of the match is declared', function () {
      expect(newHome.winner).to.equal('home')
      expect(newAway.winner).to.equal('away')
    })
  })

  describe('when a winner is already declared', function () {
    const oldState = {
      winner: 'home',
      rounds: [],
      history: []
    }

    const newState = reduce(oldState, { type: POINT, feature: 'home', time: 0 })

    it('doesnt alter state', function () {
      expect(oldState).to.deep.equal(newState)
    })
  })
})
