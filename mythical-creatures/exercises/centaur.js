class Centaur {
  constructor(data) {
    this.name = data.name
    this.breed = data.type
    this.cranky = false
    this.standing = true
    this.layingDown = false
    this.actionCount = 0
  }
  increaseAction() {
    this.actionCount++
    if(this.actionCount > 2) {
      this.cranky = true
    }
  }
  shoot() {
    this.increaseAction()
    return this.cranky || this.layingDown ? 'NO!' : 'Twang!!!'
  }
  run() {
    this.increaseAction()
    return this.cranky || this.layingDown ? 'NO!' : 'Clop clop clop clop!!!'
  }
  sleep() {
    if(this.standing) {
      return 'NO!'
    } else {
      this.cranky = false
      this.actionCount = 0
      return 'ZZZZ'
    }
  }
  layDown() {
    this.standing = false
    this.layingDown = true
  }
  standUp() {
    this.standing = true
    this.layingDown = false
  }
  drinkPotion() {
    this.cranky = false
  }
}

module.exports = Centaur;
