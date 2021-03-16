class Sphinx {
  constructor(name) {
    this.name = name || null
    this.riddles = []
    this.heroesEaten = 0
  }
  collectRiddle(riddle) {
    if(this.riddles.length === 3) {
      this.riddles.shift()
    }
    this.riddles.push(riddle)
  }
  attemptAnswer(guess) {
    let result = this.riddles.filter(riddle => riddle.answer !== guess)
    if(result.length < this.riddles.length) {
      this.riddles = result
      return this.riddles.length === 0 ?
      `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${guess}"???` :
      'That wasn\'t that hard, I bet you don\'t get the next one'
    } else {
      this.heroesEaten++
    }
  }
}
module.exports = Sphinx
