var real = new Float32Array(2);
var imag = new Float32Array(2);
var ac = new AudioContext();
var osc = ac.createOscillator();

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

var wave = ac.createPeriodicWave(real, imag);

osc.setPeriodicWave(wave);

osc.connect(ac.destination);

osc.start();
osc.stop(2);
