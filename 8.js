////
// GLOBAL VARIABLES
//

  const audioContext = new AudioContext()

  const gainNode = audioContext.createGain()
  gainNode.gain.value = 0.5
  gainNode.connect(audioContext.destination)

  let base = 220

  let oscillators = Array(2).fill(null)

//
//
////

////
// GLOBAL FUNCTIONS
//
//---> initializeOcillators and friends
//

  function initializeOcillators (numberOfOcillators) {
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

//
//---> playTheNotes and friends
//

  function volumeOff () {
    gainNode.gain.value = 0
  }

  function volumeOn (volume = 0.5) {
    gainNode.gain.value = volume
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

//
//
////


////
// THINGS ARE HAPPENING HERE
//

  let chords = [
    [3/2, 2],
    [1,   2]
  ]

  initializeOcillators(2)

  playTheNotes( // BLOCKING
    chords
      .map(ratios => ratios.map(ratio => ratio * base))
      .map(frequencies => [2, ...frequencies])
  )

//
////
