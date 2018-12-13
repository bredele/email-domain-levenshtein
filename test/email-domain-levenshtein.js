/**
  Dependencies
 */

const test = require('tape')
const suggest = require('..')


test('should suggest email #1', assert => {
  assert.plan(1)
  assert.equal(suggest('hello@gnail.com'), 'hello@gmail.com')
})

test('should suggest email #2', assert => {
  assert.plan(1)
  assert.equal(suggest('hello@yahop.com'), 'hello@yahoo.com')
})
