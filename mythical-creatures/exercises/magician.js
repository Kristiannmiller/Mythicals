class Magician {
  constructor({name = "Bob", topHat = true}) {
    this.name = name
    this.topHat = topHat
  }
  incantation(phrase) {
    return `${phrase.toUpperCase()}!`
  }
}
module.exports = Magician
