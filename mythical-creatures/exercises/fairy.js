class Fairy {
  constructor(name) {
    this.name = name
    this.dust = 10
    this.clothes = {dresses: ['Iris']}
    this.disposition = 'Good natured'
    this.humanWards = []
  }
  receiveBelief() {
    this.dust++
  }
  believe() {
    this.dust += 10
  }
  makeDresses(flowers) {
    flowers.forEach(flower => this.clothes.dresses.push(flower))
  }
  provoke() {
    this.disposition = 'Vengeful'
  }
  replaceInfant(infant) {
    if(this.disposition === 'Vengeful') {
      this.humanWards.push(infant)
      this.determineCalm()
      infant.disposition = 'Malicious'
    }
    return infant
  }
  determineCalm() {
    if(this.humanWards.length % 3 === 0) {
      this.disposition = 'Good natured'
    }
  }
}
module.exports = Fairy
