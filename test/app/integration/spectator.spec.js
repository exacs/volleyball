/* eslint-env mocha */
import React from 'react'
import { expect } from 'chai'
import { render } from 'enzyme'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Spectator from 'containers/Spectator'
import reducer from 'reducers'
import { updateState } from 'actions'

describe('<Spectator> - Store', function () {
  const initialState = {
    winner: null,
    rounds: [
      { home: 3, away: 25, winner: 'away' },
      { home: 4, away: 24, winner: null }
    ],
    history: []
  }
  const store = createStore(reducer, initialState)

  const wrapper = render(
    <Provider store={store}>
      <Spectator />
    </Provider>
  )

  describe('without actions', function () {
    it('renders properly', function () {
      // Points of the current Round
      expect(wrapper.find('.scoreboard__team--home .team-score__points').text())
        .to.equal('4')
      expect(wrapper.find('.scoreboard__team--away .team-score__points').text())
        .to.equal('24')
    })
  })
})
