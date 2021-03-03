class Hobbit {
  constructor(name) {
    this.name = name
    this.age = 0
    this.adult = false
  }
  celebrateBirthday() {
    this.age++
  }
}
module.exports = Hobbit
