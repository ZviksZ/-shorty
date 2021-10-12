const randomBoolean = () => Math.random() >= 0.5;

const randomNumberInRange = (min: number = 0, max: number = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;

const randomID = () => Math.random().toString(36).substring(2)

export default  {
  randomBoolean,
  randomNumberInRange,
  randomHex,
  randomID
}
