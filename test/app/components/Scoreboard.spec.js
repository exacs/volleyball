/* eslint-env mocha */
import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Scoreboard from 'components/Scoreboard'

describe('<Scoreboard>', function () {
  describe('untoggled', function () {
    const wrapper = shallow(
      <Scoreboard
      rounds={[
        { home: 25, away: 21, winner: 'home' },
        { home: 23, away: 24, winner: null }
      ]}
      teams={{
        home: { name: 'home', shortName: 'L' },
        away: { name: 'away', shortName: 'V' }
      }} />
    )

    it('renders .scoreboard__rounds, .scoreboard__rounds__toggle', function () {
      expect(wrapper.find('.scoreboard__rounds .scoreboard__rounds__toggle')).to.have.length(1)
    })

    it('renders .scoreboard__teams', function () {
      expect(wrapper.find('.scoreboard__teams .scoreboard__team')).to.have.length(2)
      expect(wrapper.find('.scoreboard__teams .scoreboard__team--home')).to.have.length(1)
      expect(wrapper.find('.scoreboard__teams .scoreboard__team--away')).to.have.length(1)
    })

    it('shows .scoreboard__rounds--summary', function () {
      expect(wrapper.find('.scoreboard__rounds--summary')).to.have.length(1)
      expect(wrapper.find('.scoreboard__rounds--all')).to.have.length(0)
    })
  })

  describe('toggled', function () {
    const wrapper = shallow(
      <Scoreboard
        rounds={[
          { home: 25, away: 21, winner: 'home' },
          { home: 23, away: 24, winner: null }
        ]}
        teams={{
          home: { name: 'home', shortName: 'L' },
          away: { name: 'away', shortName: 'V' }
        }} />
    )

    const btn = wrapper.find('.scoreboard__rounds__toggle')
    expect(btn).have.length(1)
    btn.simulate('click')

    it('changes the CSS class --all', function () {
      expect(wrapper.find('.scoreboard__rounds--summary')).to.have.length(0)
      expect(wrapper.find('.scoreboard__rounds--all')).to.have.length(1)
    })

    it('shows a table with the results', function () {
      expect(wrapper.find('.scoreboard__rounds--all .scoreboard__table')).to.have.length(1)
    })
  })
})
