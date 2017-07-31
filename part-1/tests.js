const assert = require('chai').assert;
const {month, reverseSentence, nameProps, filterBetween} = require('./functions.js')

describe('tests for month', () => {
  it('month should return a month', () => {
    assert.equal(month('1977, 9, 28'),'Sept')
  })
  it('month should throw an error', () => {
    assert.notEqual(month('1977, 9, 28'),'Oct')
  })
  it('month should throw an error', () => {
    assert.throws(() => {month(1977,9)}, Error, 'please enter valid date "YYYY, MM, DD"')
  })
})

describe('tests for reverseSentence', () => {
  it('reverseSentence should return string reversed', () => {
    assert.equal(reverseSentence('Hello world!'),'world! Hello')
  })
  it('reverseSentence should return string reversed', () => {
    assert.equal(reverseSentence('supercalafragalisticexpialadoshus'),'supercalafragalisticexpialadoshus')
  })
  it('reverseSentence should throw an error', () => {
    assert.throws(() => {reverseSentence(1, 2, 3, 4, )}, Error, 'please enter a valid string')
  })
})

describe('tests for nameProps', () => {
  it('nameProps should check for correct input', () => {
    assert.throws(() => {
      nameProps('hello there')}, Error, 'please enter a valid object')
  })
  it('nameProps should return names of proporties alphabetically', () => {
    assert.deepEqual(
      nameProps({
        name: 'Dominique',
        age: 30,
        phone: '555-555-5555'}), ['age', 'name', 'phone'])
    })
  })

  describe('tests for filterBetween', () => {
  it('filterBetween should return a new array with the valid input', () => {
    assert.deepEqual(filterBetween(['dog', 'cat', 'zebra', 'ape', 'lion', 'cow'], 'chimp', 'lobster'), ['dog', 'lion', 'cow'])
  })
  it('filterBetween should check for correct input', () => {
    assert.throws(() => {
      filterBetween('hello there')}, Error, 'please enter valid array')
  })
  it('filterBetween should return an empty array', () => {
    assert.deepEqual(filterBetween(['dog', 'cat', 'zebra', 'ape', 'lion', 'cow'], 'chickadee', 'chimpanzee'), [])
  })
})