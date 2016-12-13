/* eslint-env mocha */
import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import TeamScore from 'components/TeamScore'

describe('<TeamScore>', function () {
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
})
