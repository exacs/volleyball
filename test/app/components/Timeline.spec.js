/* eslint-env mocha */
import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Timeline from 'components/Timeline'

describe('<Timeline', function () {
  const fn = () => {}
  const e = { time: 0, action: 'point', feature: 'home' }

  describe('history=[]>', function () {
    const wrapper = shallow(<Timeline history={[]} undo={fn} />)

    it('renders 0 .timeline__item', function () {
      expect(wrapper.find('.timeline__item')).to.have.length(0)
    })
  })

  describe('history=[e]>', function () {
    const wrapper = shallow(<Timeline history={[e]} undo={fn} />)

    it('renders 1 .timeline__item', function () {
      expect(wrapper.find('.timeline__item')).to.have.length(1)
    })
  })

  describe('history=[e, e]>', function () {
    const wrapper = shallow(<Timeline history={[e, e]} undo={fn} />)

    it('renders 1 .timeline__item', function () {
      expect(wrapper.find('.timeline__item')).to.have.length(2)
    })
  })
})
