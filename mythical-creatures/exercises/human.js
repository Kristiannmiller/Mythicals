class Human {
  constructor(name) {
    this.name = name
    this.encounterCounter = 0
  }
  noticesOgre() {
    if(this.encounterCounter === 0) return false
    return this.encounterCounter % 3 === 0 ? true : false
  }
}
module.exports = Human
