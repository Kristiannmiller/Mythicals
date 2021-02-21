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
    return this.cranky ? 'NO!' : 'Twang!!!'
  }
  run() {
    this.increaseAction()
    return this.cranky ? 'NO!' : 'Clop clop clop clop!!!'
  }
  sleep() {
    return this.standing ? 'NO!' : 'zzzzz'
  }
  layDown() {
    this.standing = false
    this.layingDown = true
  }
  standUp() {
    this.standing = true
    this.layingDown = false
  }
}

module.exports = Centaur;
