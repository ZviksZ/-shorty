import Dates from '../src/modules/Dates'

describe('Dates module', () => {
  test('datesDiff', () => {
    expect(Dates.datesDiff(new Date('2021/10/01'), new Date('2021/10/03'))).toEqual(2)
    expect(Dates.datesDiff(new Date('2021/10/28'), new Date('2021/11/02'))).toEqual(5)
    expect(Dates.datesDiff(new Date('2021/12/28'), new Date('2022/01/02'))).toEqual(5)
  })

  test('timeFromDate', () => {
    expect(Dates.timeFromDate(new Date('2021/10/01'))).toEqual("00:00:00")
    expect(Dates.timeFromDate(new Date('2021-10-16T12:27:59.211Z'))).toEqual("15:27:59")
  })

  test('isWeekday', () => {
    expect(Dates.isWeekday(new Date('2021/10/01'))).toEqual(true)
    expect(Dates.isWeekday(new Date('2021/10/02'))).toEqual(false)
  })

  test('isWeekday', () => {
    const pastWeek = Dates.pastWeek()
    expect(pastWeek).toHaveLength(7)
    expect(Dates.datesDiff(pastWeek[pastWeek.length - 1], pastWeek[0])).toEqual(6)
  })
})
