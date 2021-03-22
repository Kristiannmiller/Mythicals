function iteratorFactory() {

};

iteratorFactory.prototype.sum = (numbers) => {
  return numbers.reduce((acc, curr) => {
    acc += curr
    return acc
  }, 0)
}

module.exports = iteratorFactory;
