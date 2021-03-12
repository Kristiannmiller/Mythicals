class Medusa {
  constructor(name) {
    this.name = name
    this.statues = []
  }
  stare(victim) {
    victim.stoned = true
  }
}
module.exports = Medusa
