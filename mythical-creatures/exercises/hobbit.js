class Hobbit {
  constructor(name) {
    this.name = name
    this.age = 0
    this.adult = false
    this.old = false
  }
  celebrateBirthday() {
    this.age++
    this.isAdult()
  }
  isAdult() {
    this.age > 32 ? this.adult = true : this.adult = false
    this.age > 100 ? this.old = true : this.old = false
  }
}
module.exports = Hobbit
