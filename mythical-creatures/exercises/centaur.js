class Centaur {
  constructor(data) {
    this.name = data.name
    this.breed = data.type
    this.cranky = false
    this.standing = true
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
    return 'Twang!!!'
  }
  run() {
    this.increaseAction()
    return 'Clop clop clop clop!!!'
  }
}

module.exports = Centaur;
