const audioContext = new AudioContext()

const gainNode = audioContext.createGain()
gainNode.gain.value = 0.5
gainNode.connect(audioContext.destination)

// base = 440

function initializeOcillators (numberOfOcillators) {

  let oscillators = Array(2).fill(null)

  oscillators = oscillators.map(() => audioContext.createOscillator())

  oscillators.forEach(oscillators => {
    oscillators.setPeriodicWave(normalWave())
    oscillators.connect(gainNode)
  })

  for (let index = 0; index < numberOfOcillators; index++) {
    oscillators[index].start()
  }
}

const normalWave = () => { //!!^^
  const harmonicLevels = [ 0, 1, 0.7, 0.5, 0.3, 0.2, 0.1 ]

  const real = new Float32Array(2)
  const imag = new Float32Array(2)

  harmonicLevels.forEach((level, index) => {
    real[index] = level
    imag[index] = 0
  })

  return audioContext.createPeriodicWave(real, imag)
}

const chords = [
  [base * 3/4, base],
  // [base * 3/4, base * 3/4 * 3/2], //9/8
  [base * 3/4, base * 3/4 * 5/4], //15/16
  [base * 1/2, base]
]

base = 220

const chords2 = [
  // [base * 3/2, base * 2],
  [base * 3/2, base * 3/2 * 3/2], //9/8
  [base * 1, base * 2]
]

const chords3 = [
  // [base * 3/2, base * 2],
  [base * 3/2, base * 3/2 * 5/4], //15/16
  [base * 1, base * 2]
]

initializeOcillators(2)
turnOnOcillators(2)

playTheNotes(chords2.concat(chords3).map(notes => [1, ...notes]))
// playTheNotes(chords2.map(notes => [1, ...notes]))

function volumeOff () {
  gainNode.gain.value = 0
}

function volumeOn (volume = 0.5) {
  gainNode.gain.value = volume
}

function turnOnOcillators (numberOfOcillators) {
  for (let index = 0; index < numberOfOcillators; index++) {
    oscillators[index].start()
  }
}

function showFrequencies() {
  const sortedFrequencies = Array.from(arguments).sort((a, b) => a - b)
  console.log(...sortedFrequencies)
}

function playTheNotes (notes) {
  volumeOn()

  let now
  for (let note of notes) {
    showFrequencies(
      note[1],
      note[1] * 2,
      note[1] * 3,
      note[1] * 4,
      note[1] * 5,
      note[1] * 6,
      note[2],
      note[2] * 2,
      note[2] * 3,
      note[2] * 4,
      note[2] * 5,
      note[2] * 6
    )
    oscillators.forEach(
      (oscillator, index) => oscillator.frequency.value = note[index + 1]
    )
    now = audioContext.currentTime
    while (audioContext.currentTime < now + note[0]) {}  // BLOCKING
  }

  volumeOff()
}

/*
// spectrum
// const generateChords =

// const C4 = 440 * 3 / 5
// const G4 = C4 * 3 / 2
// const F4 = C4 * 4 / 3
// const E4 = C4 * 5 / 4
// const B4 = G4 * 5 / 4
// const A4 = F4 * 5 / 4
// const D4 = G4 * 3 / 4
// const C5 = C4 * 2
// const C3 = C4 / 2
// const G3 = G4 / 2
// const B3 = B4 / 2
// const A3 = A4 / 2
// const F2 = F4 / 4
// const G2 = G3 / 2
// const E3 = E4 / 2
// const A2 = A3 / 2
// const F3 = F4 / 2
// const E2 = E3 / 2

const chords = [
  [ 1, G4, C4, G3, E2 ],
  [ 1, F4, C4, A3, F2 ],
  [ 1, E4, C4, G3, G2 ],
  [ 1, C4, C4, E3, A2 ],
  [ 1, D4, C4, A3, F2 ],
  [.5, D4, B3, G3, G2 ],
  [.5, D4, B3, F3, G2 ],
  [ 2, C4, C4, E3, C3 ]
]
// Rustington -Hubert Parry
*/
