class Fairy {
  constructor(name) {
    this.name = name
    this.dust = 10
    this.clothes = {dresses: ['Iris']}
    this.disposition = 'Good natured'
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
}
module.exports = Fairy
