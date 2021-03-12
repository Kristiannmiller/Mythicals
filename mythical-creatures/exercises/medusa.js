class Medusa {
  constructor(name) {
    this.name = name
    this.statues = []
  }
  stare(victim) {
    victim.stoned = true
    if(this.statues.length === 3) {
      let releasedVictim = this.statues.shift()
      releasedVictim.stoned = false
    }
    this.statues.push(victim)
  }
}
module.exports = Medusa
