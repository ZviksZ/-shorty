const isWeekday = (date: Date) => date.getDay() % 6 !== 0;

const timeFromDate = (date: Date) => date.toTimeString().slice(0, 8);

const pastWeek = () => [...Array(7).keys()].map(days => new Date(Date.now() - 86400000 * days))

const datesDiff = (date1: Date, date2: Date) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)

export default  {
  isWeekday,
  timeFromDate,
  pastWeek,
  datesDiff
}
