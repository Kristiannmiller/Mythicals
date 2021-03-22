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

iteratorFactory.prototype.onlyEvens = (collection) => {
  return collection.filter(num => num % 2 === 0)
}

iteratorFactory.prototype.onlyOdds = (collection) => {
  return collection.filter(num => num % 2 !== 0)
}

iteratorFactory.prototype.squareAndSum = (collection) => {
  return collection.reduce((acc, curr) => {
    acc += (curr * curr)
    return acc
  }, 0)
}



module.exports = iteratorFactory;
