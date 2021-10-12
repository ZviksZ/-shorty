const stringReverse = (str: string) => str.split('').reverse().join('');

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

export default {
  stringReverse,
  capitalize
}
