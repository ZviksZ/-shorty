const randomBoolean = () => Math.random() >= 0.5;

const randomNumberInRange = (min: number = 0, max: number = 100) => Math.floor(Math.random() * (max - min + 1)) + min;



module.exports = {
  randomBoolean,
  randomNumberInRange
}
