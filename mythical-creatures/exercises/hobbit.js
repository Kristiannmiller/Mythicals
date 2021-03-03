class Hobbit {
  constructor(name) {
    this.name = name
    this.age = 0
    this.adult = false
  }
  celebrateBirthday() {
    this.age++
    this.isAdult()
  }
  isAdult() {
    this.age > 32 ? this.adult = true : this.adult = false
  }
}
module.exports = Hobbit
