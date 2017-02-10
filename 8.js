const audioContext = new AudioContext()

let oscillators = Array(4).fill(null)

oscillators = oscillators.map(() => audioContext.createOscillator())

const harmonicLevels = [ 0, 1, 0.7, 0.5, 0.3, 0.2, 0.1 ]

const real = new Float32Array(2)
const imag = new Float32Array(2)

harmonicLevels.forEach((level, index) => {
  real[index] = level
  imag[index] = 0
})

const wave = audioContext.createPeriodicWave(real, imag)

const gainNode = audioContext.createGain()
gainNode.gain.value = 0.5

oscillators.forEach(oscillators => {
  oscillators.setPeriodicWave(wave)
  oscillators.connect(gainNode)
})

gainNode.connect(audioContext.destination)

const C4 = 440 * 3 / 5
const G4 = C4 * 3 / 2
const F4 = C4 * 4 / 3
const E4 = C4 * 5 / 4
const B4 = G4 * 5 / 4
const A4 = F4 * 5 / 4
const D4 = G4 * 3 / 4
const C5 = C4 * 2
const C3 = C4 / 2
const G3 = G4 / 2
const B3 = B4 / 2
const A3 = A4 / 2
const F2 = F4 / 4
const G2 = G3 / 2
const E3 = E4 / 2
const A2 = A3 / 2
const F3 = F4 / 2
const E2 = E3 / 2

const chords = [
          [ 1, G4, C4, G3, E2 ],
          [ 1, F4, C4, A3, F2 ],
          [ 1, E4, C4, G3, G2 ],
          [ 1, C4, C4, E3, A2 ],
          [ 1, D4, C4, A3, F2 ],
          [ .5, D4, B3, G3, G2 ],
          [ .5, D4, B3, F3, G2 ],
          [ 2, C4, C4, E3, C3 ]
]

const scale = [
  [1, C4],
  [1, D4],
  [1, E4],
  [1, F4],
  [1, G4],
  [1, A4],
  [1, B4],
  [1, C5],
]

oscillators[0].start()
oscillators[1].start()
oscillators[2].start()
oscillators[3].start()


const playTheNotes = notes => {
  let now
  for (let note of notes) {
    console.log('playing frequency', note[1], 'for', note[0], `[${audioContext.currentTime}]`)
    oscillators.forEach(
      (oscillator, index) => oscillator.frequency.value = note[index + 1]
    )
    now = audioContext.currentTime
    while (audioContext.currentTime < now + note[0]) {}
  }
}

playTheNotes(chords)


gainNode.gain.value = 0



// Rustington -Hubert Parry
