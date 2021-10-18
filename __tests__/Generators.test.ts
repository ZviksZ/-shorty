import Generators from '../src/modules/Generators'

describe('Generators module', () => {
  test('randomHex', () => {
    expect(Generators.randomHex()).toHaveLength(7)
    expect(Generators.randomHex()[0]).toEqual('#')
  })

  test('randomBoolean', () => {
    expect(typeof Generators.randomBoolean()).toEqual('boolean')
  })

  test('randomID', () => {
    expect(typeof Generators.randomID()).toEqual('string')
  })

  test('randomNumberInRange', () => {
    const randomRangeNumber = Generators.randomNumberInRange(0, 5)
    expect(randomRangeNumber >= 0 && randomRangeNumber <= 5).toBeTruthy()
  })
})
