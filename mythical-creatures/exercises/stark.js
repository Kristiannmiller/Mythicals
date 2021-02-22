class Stark {
  constructor(name, location) {
    this.name = name
    this.location = location || 'Winterfell'
    this.safe = false
  }
  houseWords() {
    return 'Winter is Coming'
  }
}

module.exports = Stark;
