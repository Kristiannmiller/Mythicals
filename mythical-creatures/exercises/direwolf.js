class Direwolf {
  constructor(name, home, size) {
    this.name = name
    this.home = home || 'Beyond the Wall'
    this.size = size || 'Massive'
    this.starksToProtect = []
    this.huntsWhiteWalkers = true
  }
  protect(stark) {
    if(stark.location === this.home && this.starksToProtect.length < 2) {
      this.starksToProtect.push(stark)
      stark.changeSafeStatus()
      this.huntsWhiteWalkers = false
    }
  }
  leave(stark) {
    this.starksToProtect = this.starksToProtect.filter((s => s.name !== stark.name))
    stark.changeSafeStatus()
    this.starksToProtect[0] ? this.huntsWhiteWalkers = false : this.huntsWhiteWalkers = true
  }
}

module.exports = Direwolf;
