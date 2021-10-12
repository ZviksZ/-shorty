const isEven = (num: number) => num % 2 === 0;

const toFixed = (num: number, fixed: number) => ~~(Math.pow(10, fixed) * num) / Math.pow(10, fixed);

module.exports = {
  isEven,
  toFixed
}
