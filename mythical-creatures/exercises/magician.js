class Magician {
  constructor({name = "Bob", topHat = true}) {
    this.name = name
    this.topHat = topHat
    this.confident = false
    this.practice = 0
  }
  incantation(phrase) {
    return `${phrase.toUpperCase()}!`
  }
  cast() {
    this.practice++
    if(this.practice > 2) this.confident = true
    return this.topHat ? 'PULL RABBIT FROM TOP HAT' : 'PULL DOVE FROM SLEEVE'
  }
}
module.exports = Magician
