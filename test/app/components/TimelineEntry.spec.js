/* eslint-env mocha */
import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import TimelineEntry from 'components/TimelineEntry'

describe('<TimelineEntry', function () {
  const te = (feature, undo, inverse = false) => (
    <TimelineEntry
      time={0}
      points={{ home: 0, away: 1 }}
      feature={feature}
      undo={undo}
      inverse={inverse} />
  )

  function commonTests (wrapper) {
    it('renders time', function () {
      expect(wrapper.find('.timeline-entry__node').text())
        .to.equal('0\'')
    })
    it('renders .timeline-entry__node', function () {
      expect(wrapper.find('.timeline-entry__node')).to.have.length(1)
    })
    it('renders points 0-1', function () {
      expect(wrapper.find('.timeline-entry__label--home .timeline-entry__label__points').text())
        .to.equal('0')
      expect(wrapper.find('.timeline-entry__label--away .timeline-entry__label__points').text())
        .to.equal('1')
    })
    it('renders .timeline-entry__label', function () {
      expect(wrapper.find('.timeline-entry__label.timeline-entry__label--home')).to.have.length(1)
      expect(wrapper.find('.timeline-entry__label.timeline-entry__label--away')).to.have.length(1)
    })
  }

  describe('feature=home>', function () {
    const wrapper = shallow(te('home'))
    commonTests(wrapper)

    it('renders .timeline-entry__label--left and .timeline-entry__label--right', function () {
      expect(wrapper.find('.timeline-entry__label--home').hasClass('timeline-entry__label--left')).to.be.true
      expect(wrapper.find('.timeline-entry__label--away').hasClass('timeline-entry__label--right')).to.be.true
    })

    it('renders .timeline-entry__label__icon', function () {
      expect(wrapper.find('.timeline-entry__label__icon').text()).to.equal('chevron_right')
      expect(wrapper.find('.timeline-entry__undo')).to.have.length(0)
    })
  })

  describe('feature=home undo=fn>', function () {
    const fn = sinon.spy()
    const wrapper = shallow(te('home', fn))
    commonTests(wrapper)

    it('renders .timeline-entry__label--left and .timeline-entry__label--right', function () {
      expect(wrapper.find('.timeline-entry__label--home').hasClass('timeline-entry__label--left')).to.be.true
      expect(wrapper.find('.timeline-entry__label--away').hasClass('timeline-entry__label--right')).to.be.true
    })

    it('renders .timeline-entry__label__icon', function () {
      expect(wrapper.find('.timeline-entry__label__icon').text()).to.equal('chevron_right')
      expect(wrapper.find('.timeline-entry__undo')).to.have.length(1)
    })

    it('handles "undo" click', function () {
      wrapper.find('.timeline-entry__undo').simulate('click')
      expect(fn).to.have.property('callCount', 1)
    })
  })

  describe('feature=home inverse>', function () {
    const wrapper = shallow(te('home', undefined, true))
    commonTests(wrapper)

    it('renders .timeline-entry__label--left and .timeline-entry__label--right', function () {
      expect(wrapper.find('.timeline-entry__label--home').hasClass('timeline-entry__label--right')).to.be.true
      expect(wrapper.find('.timeline-entry__label--away').hasClass('timeline-entry__label--left')).to.be.true
    })

    it('renders .timeline-entry__label__icon', function () {
      expect(wrapper.find('.timeline-entry__label__icon').text()).to.equal('chevron_left')
      expect(wrapper.find('.timeline-entry__undo')).to.have.length(0)
    })
  })

  describe('feature=home undo=fn inverse>', function () {
    const fn = sinon.spy()
    const wrapper = shallow(te('home', fn, true))
    commonTests(wrapper)

    it('renders .timeline-entry__label--left and .timeline-entry__label--right', function () {
      expect(wrapper.find('.timeline-entry__label--home').hasClass('timeline-entry__label--right')).to.be.true
      expect(wrapper.find('.timeline-entry__label--away').hasClass('timeline-entry__label--left')).to.be.true
    })

    it('renders .timeline-entry__label__icon', function () {
      expect(wrapper.find('.timeline-entry__label__icon').text()).to.equal('chevron_left')
      expect(wrapper.find('.timeline-entry__undo')).to.have.length(1)
    })

    it('handles "undo" click', function () {
      wrapper.find('.timeline-entry__undo').simulate('click')
      expect(fn).to.have.property('callCount', 1)
    })
  })

  describe('feature=home>', function () {
    const wrapper = shallow(te('home'))
    commonTests(wrapper)

    it('renders .timeline-entry__label--left and .timeline-entry__label--right', function () {
      expect(wrapper.find('.timeline-entry__label--home').hasClass('timeline-entry__label--left')).to.be.true
      expect(wrapper.find('.timeline-entry__label--away').hasClass('timeline-entry__label--right')).to.be.true
    })

    it('renders .timeline-entry__label__icon', function () {
      expect(wrapper.find('.timeline-entry__label__icon').text()).to.equal('chevron_right')
      expect(wrapper.find('.timeline-entry__undo')).to.have.length(0)
    })
  })

  describe('feature=away undo=fn>', function () {
    const fn = sinon.spy()
    const wrapper = shallow(te('away', fn))
    commonTests(wrapper)

    it('renders .timeline-entry__label--left and .timeline-entry__label--right', function () {
      expect(wrapper.find('.timeline-entry__label--home').hasClass('timeline-entry__label--left')).to.be.true
      expect(wrapper.find('.timeline-entry__label--away').hasClass('timeline-entry__label--right')).to.be.true
    })

    it('renders .timeline-entry__label__icon', function () {
      expect(wrapper.find('.timeline-entry__label__icon').text()).to.equal('chevron_left')
      expect(wrapper.find('.timeline-entry__undo')).to.have.length(1)
    })

    it('handles "undo" click', function () {
      wrapper.find('.timeline-entry__undo').simulate('click')
      expect(fn).to.have.property('callCount', 1)
    })
  })

  describe('feature=away inverse>', function () {
    const wrapper = shallow(te('away', undefined, true))
    commonTests(wrapper)

    it('renders .timeline-entry__label--left and .timeline-entry__label--right', function () {
      expect(wrapper.find('.timeline-entry__label--home').hasClass('timeline-entry__label--right')).to.be.true
      expect(wrapper.find('.timeline-entry__label--away').hasClass('timeline-entry__label--left')).to.be.true
    })

    it('renders .timeline-entry__label__icon', function () {
      expect(wrapper.find('.timeline-entry__label__icon').text()).to.equal('chevron_right')
      expect(wrapper.find('.timeline-entry__undo')).to.have.length(0)
    })
  })

  describe('feature=away undo=fn inverse>', function () {
    const fn = sinon.spy()
    const wrapper = shallow(te('away', fn, true))
    commonTests(wrapper)

    it('renders .timeline-entry__label--left and .timeline-entry__label--right', function () {
      expect(wrapper.find('.timeline-entry__label--home').hasClass('timeline-entry__label--right')).to.be.true
      expect(wrapper.find('.timeline-entry__label--away').hasClass('timeline-entry__label--left')).to.be.true
    })

    it('renders .timeline-entry__label__icon', function () {
      expect(wrapper.find('.timeline-entry__label__icon').text()).to.equal('chevron_right')
      expect(wrapper.find('.timeline-entry__undo')).to.have.length(1)
    })

    it('handles "undo" click', function () {
      wrapper.find('.timeline-entry__undo').simulate('click')
      expect(fn).to.have.property('callCount', 1)
    })
  })
})
