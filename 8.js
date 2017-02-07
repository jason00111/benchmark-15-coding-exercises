const real = new Float32Array(2);
const imag = new Float32Array(2);
const ac = new AudioContext();
const osc1 = ac.createOscillator();
const osc2 = ac.createOscillator();

real[0] = 0;
imag[0] = 0;
real[1] = 1
imag[1] = 0;
real[2] = 0.7
imag[2] = 0;
real[3] = 0.5
imag[3] = 0;
real[4] = 0.3
imag[4] = 0;
real[5] = 0.2
imag[5] = 0;
real[6] = 0.1
imag[6] = 0;

const wave1 = ac.createPeriodicWave(real, imag);
const wave2 = ac.createPeriodicWave(real, imag);

osc1.setPeriodicWave(wave1);
osc2.setPeriodicWave(wave1);
osc1.setPeriodicWave(wave2);
osc2.setPeriodicWave(wave2);

osc1.connect(ac.destination);
osc2.connect(ac.destination);

const C = 440 * 3 / 5 //4/3 * 5/4
osc1.frequency.value = 440
osc2.frequency.value = C

const D = C * 3 / 2
const SD = C * 4 / 3


osc1.start();
osc2.start();

while (ac.currentTime < 2) {
  5// console.log(ac.currentTime)
}

osc1.frequency.value = D
osc2.frequency.value = D / 2

console.log('osc1:', osc1)
console.log('osc2:', osc2)


while (ac.currentTime < 4) {
  5// console.log(ac.currentTime)
}

osc1.frequency.value = SD
osc2.frequency.value = C / 2

console.log('osc1:', osc1)
console.log('osc2:', osc2)

while (ac.currentTime < 6) {
  5// console.log(ac.currentTime)
}

osc1.stop(0);
osc2.stop(0);








1234567
1234567
1234567
1234567
