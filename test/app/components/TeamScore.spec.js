/* eslint-env mocha */
import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import TeamScore from 'components/TeamScore'

describe('<TeamScore', function () {
  describe('onPoint=undefined>', function () {
    const wrapper = shallow(
      <TeamScore
        name='local'
        shortName='L'
        points={6}
        feature='home' />
    )

    it('renders team-title', function () {
      expect(wrapper.find('.team-score__team-title').text()).to.equal('home')
    })

    it('renders team-avatar', function () {
      expect(wrapper.find('.team-score__team-avatar').hasClass('team-score__team-avatar--home')).to.be.true
    })

    it('doesnt render the button', function () {
      expect(wrapper.find('.team-score__button')).to.have.length(0)
    })
  })

  describe('onPoint=fn>', function () {
    const fn = sinon.spy()
    const wrapper = shallow(
      <TeamScore
        name='local'
        shortName='L'
        points={6}
        feature='home'
        onPoint={fn} />
    )

    it('renders team-title', function () {
      expect(wrapper.find('.team-score__team-title').text()).to.equal('home')
    })

    it('renders team-avatar', function () {
      expect(wrapper.find('.team-score__team-avatar').hasClass('team-score__team-avatar--home')).to.be.true
    })

    it('renders a button that works', function () {
      const btn = wrapper.find('.team-score__button')
      expect(btn).to.have.length(1)
      btn.simulate('click')
      expect(fn).to.have.property('callCount', 1)
    })
  })
})
