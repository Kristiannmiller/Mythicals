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

module.exports = iteratorFactory;
