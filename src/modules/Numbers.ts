const isEven = (num: number) => num % 2 === 0;

const toFixed = (num: number, fixed: number) => ~~(Math.pow(10, fixed) * num) / Math.pow(10, fixed);

const round = (num: number, decimal: number) => Number(Math.round(Number(num + "e" + decimal)) + "e-" + decimal)

export default {
  isEven,
  toFixed,
  round
}
