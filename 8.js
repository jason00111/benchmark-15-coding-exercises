const real = new Float32Array(2)
const imag = new Float32Array(2)
const audioContext = new AudioContext()
const oscillator1 = audioContext.createOscillator()
const oscillator2 = audioContext.createOscillator()
const oscillator3 = audioContext.createOscillator()
const oscillator4 = audioContext.createOscillator()

real[0] = 0
imag[0] = 0
real[1] = 1
imag[1] = 0
real[2] = 0.7
imag[2] = 0
real[3] = 0.5
imag[3] = 0
real[4] = 0.3
imag[4] = 0
real[5] = 0.2
imag[5] = 0
real[6] = 0.1
imag[6] = 0

const wave1 = audioContext.createPeriodicWave(real, imag)

oscillator1.setPeriodicWave(wave1)
oscillator2.setPeriodicWave(wave1)
oscillator3.setPeriodicWave(wave1)
oscillator4.setPeriodicWave(wave1)

const gainNode1 = audioContext.createGain()
const gainNode2 = audioContext.createGain()

oscillator1.connect(gainNode1)
oscillator2.connect(gainNode2)
oscillator3.connect(gainNode2)
oscillator4.connect(gainNode2)

gainNode1.gain.value = 0.5
gainNode2.gain.value = 0

gainNode1.connect(audioContext.destination)
gainNode2.connect(audioContext.destination)

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

oscillator1.frequency.value = C4

oscillator1.start()

while (audioContext.currentTime < 1) {}

oscillator1.frequency.value = D4

while (audioContext.currentTime < 2) {}

oscillator1.frequency.value = E4

while (audioContext.currentTime < 3) {}

oscillator1.frequency.value = F4

while (audioContext.currentTime < 4) {}

oscillator1.frequency.value = G4

while (audioContext.currentTime < 5) {}

oscillator1.frequency.value = A4

while (audioContext.currentTime < 6) {}

oscillator1.frequency.value = B4

while (audioContext.currentTime < 7) {}

oscillator1.frequency.value = C5

while (audioContext.currentTime < 8) {}

gainNode1.gain.value = 0

oscillator1.frequency.value = G4
oscillator2.frequency.value = C4
oscillator3.frequency.value = G3
oscillator4.frequency.value = E2

oscillator2.start()
oscillator3.start()
oscillator4.start()

while (audioContext.currentTime < 10) {}

gainNode1.gain.value = 0.5
gainNode2.gain.value = 0.5

while (audioContext.currentTime < 11) {}

oscillator1.frequency.value = F4
oscillator2.frequency.value = C4
oscillator3.frequency.value = A3
oscillator4.frequency.value = F2

while (audioContext.currentTime < 12) {}

oscillator1.frequency.value = E4
oscillator2.frequency.value = C4
oscillator3.frequency.value = G3
oscillator4.frequency.value = G2

while (audioContext.currentTime < 13) {}

oscillator1.frequency.value = C4
oscillator2.frequency.value = C4
oscillator3.frequency.value = E3
oscillator4.frequency.value = A2

while (audioContext.currentTime < 14) {}

oscillator1.frequency.value = D4
oscillator2.frequency.value = C4
oscillator3.frequency.value = A3
oscillator4.frequency.value = F2

while (audioContext.currentTime < 15) {}

oscillator1.frequency.value = D4
oscillator2.frequency.value = B3
oscillator3.frequency.value = G3
oscillator4.frequency.value = G2

while (audioContext.currentTime < 15.5) {}

oscillator1.frequency.value = D4
oscillator2.frequency.value = B3
oscillator3.frequency.value = F3
oscillator4.frequency.value = G2

while (audioContext.currentTime < 16) {}

oscillator1.frequency.value = C4
oscillator2.frequency.value = C4
oscillator3.frequency.value = E3
oscillator4.frequency.value = C3

while (audioContext.currentTime < 18) {}

gainNode1.gain.value = 0
gainNode2.gain.value = 0

// Rustington -Hubert Parry
