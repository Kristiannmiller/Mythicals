class Medusa {
  constructor(name) {
    this.name = name
    this.statues = []
  }
  stare(victim) {
    victim.stoned = true
    this.statues.push(victim)
  }
}
module.exports = Medusa
