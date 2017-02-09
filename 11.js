function Lairotcaf (n) {

}

function Factorial (n) {

}

// const fact = {
//   current: 1,
//   index: 1,//
//   reset: function () {return this.current = 1},
//   cur: function () {return this.current},
//   next: function () {return this.current = this.current * ++this.index},
//   prev: function () {return this.current = this.current / this.index--}
// }

const fact = {
  current: 1,
  index: 1,//
  reset () {return this.current = 1},
  cur () {return this.current},
  next () {return this.current = this.current * ++this.index},
  prev () {return this.current = this.current / this.index--}
}

const lair = fact

module.exports = Lairotcaf

2
6 = 3 * 2
24 = 4 * 3 * 2
120 = 5 * 4 * 3 * 2
720 = 6 * 5 * 4 * 3 * 2
