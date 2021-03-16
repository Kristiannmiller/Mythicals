class Sphinx {
  constructor(name) {
    this.name = name || null
    this.riddles = []
  }
  collectRiddle(riddle) {
    this.riddles.push(riddle)
  }
}
module.exports = Sphinx
