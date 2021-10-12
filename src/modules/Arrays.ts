const randomArrayItem = <T>(collection: Array<T>) => collection[Math.floor(Math.random() * collection.length)]

const shuffle = <T>(collection: Array<T>) => collection.sort(() => 0.5 - Math.random())

const average = (collection: Array<number>) => collection.reduce((a, b) => a + b) / collection.length

const removeDuplicates = <T>(collection: Array<T>) => [...new Set(collection)];

export default {
  randomArrayItem,
  shuffle,
  average,
  removeDuplicates
}
