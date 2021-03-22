function iteratorFactory() {

};

iteratorFactory.prototype.sum = (collection) => {
  if(typeof collection[0] === 'string') {
    return collection.join("")
  }
  return collection.reduce((acc, curr) => {
    acc += curr
    return acc
  }, 0)
}

iteratorFactory.prototype.sumAndSquare = (collection) => {
  const sum = collection.reduce((acc, curr) => {
    acc += curr
    return acc
  }, 0)
  return sum * sum
}

module.exports = iteratorFactory;
