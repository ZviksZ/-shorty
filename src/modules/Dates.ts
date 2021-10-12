const isWeekday = (date: Date) => date.getDay() % 6 !== 0;

const timeFromDate = (date: Date) => date.toTimeString().slice(0, 8);

module.exports = {
  isWeekday,
  timeFromDate
}
