import Arrays from '../src/modules/Arrays'

describe('Arrays module', () => {
  const arrayOfNumbers = [1, 3, 4, 6, 7]

  test('average', () => {
    expect(Arrays.average(arrayOfNumbers)).toEqual(4.2)
  })

  test('randomArrayItem', () => {
    const randomNumber = Arrays.randomArrayItem(arrayOfNumbers)
    expect(arrayOfNumbers.includes(randomNumber)).toBeTruthy();
  })

  test('shuffle', () => {
    const shuffledArray = Arrays.shuffle(arrayOfNumbers)
    expect(shuffledArray).toHaveLength(5)
    expect(shuffledArray.includes(1)).toBeTruthy()
    expect(shuffledArray.includes(3)).toBeTruthy()
    expect(shuffledArray.includes(4)).toBeTruthy()
    expect(shuffledArray.includes(6)).toBeTruthy()
    expect(shuffledArray.includes(7)).toBeTruthy()
  })

  test('removeDuplicates', () => {
    const arrayWithoutDublicates = Arrays.removeDuplicates([...arrayOfNumbers, ...arrayOfNumbers])
    expect(arrayWithoutDublicates).toHaveLength(5)

    //Check for same numbers
    const checkNumbers = arrayWithoutDublicates.filter(item => item === 1)
    expect(checkNumbers).toHaveLength(1)
  })
})
