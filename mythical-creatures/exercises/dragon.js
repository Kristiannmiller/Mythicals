class Dragon {
  constructor(name, rider, color) {
    this.name = name
    this.rider = rider
    this.color = color
    this.hungry = true
    this.stomach = 0
  }
  eat() {
    this.stomach++
    if(this.stomach > 2) {
      this.hungry = false
    }
  }
}

module.exports = Dragon;
