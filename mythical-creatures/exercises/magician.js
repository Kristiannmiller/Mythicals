class Magician {
  constructor({name = "Bob", topHat = true}) {
    this.name = name
    this.topHat = topHat
    this.confident = false
  }
  incantation(phrase) {
    return `${phrase.toUpperCase()}!`
  }
  cast() {
    return this.topHat ? 'PULL RABBIT FROM TOP HAT' : 'PULL DOVE FROM SLEEVE'
  }
}
module.exports = Magician
