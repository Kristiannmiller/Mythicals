class Stark {
  constructor(name, location) {
    this.name = name
    this.location = location || 'Winterfell'
    this.safe = false
  }
  houseWords() {
    return this.safe ? 'The North Remembers' : 'Winter is Coming'
  }
  changeSafeStatus() {
    this.safe = !this.safe
  }
}

module.exports = Stark;
