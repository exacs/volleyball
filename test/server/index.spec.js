/* eslint-env mocha */
import chai from 'chai'
const expect = chai.expect

import sum from 'index'

describe('Client index', function () {
  describe('#sum()', function () {
    it('Should sum properly', function () {
      expect(sum(1, 1)).to.equal(2)
    })
  })
})
