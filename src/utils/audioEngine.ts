// Interactive Web Audio Synth Engine for KickFlip K-Pop Beats
let audioCtx: AudioContext | null = null;
let currentOsc: OscillatorNode | null = null;
let isPlaying = false;
let intervalId: any = null;

export function getAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Play a single skateboard pop / trick sound effect
export function playSkateSound() {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(120, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(30, ctx.currentTime + 0.12);
    
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.12);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.12);
  } catch (e) {
    console.error(e);
  }
}

// Play a celebratory chime for quiz result
export function playChime() {
  try {
    const ctx = getAudioContext();
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C, E, G, High C
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);
      gain.gain.setValueAtTime(0.2, ctx.currentTime + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.08 + 0.4);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + idx * 0.08);
      osc.stop(ctx.currentTime + idx * 0.08 + 0.45);
    });
  } catch (e) {
    console.error(e);
  }
}

// Play a synthetic K-Pop beat loop based on track frequency
export function startTrackBeat(baseFreq: number, onTick?: () => void) {
  stopTrackBeat();
  try {
    const ctx = getAudioContext();
    isPlaying = true;
    
    let step = 0;
    const bpm = 128;
    const interval = (60 / bpm / 2) * 1000; // 16th note rhythm

    const chords = [baseFreq, baseFreq * 1.25, baseFreq * 1.5, baseFreq * 1.8];

    intervalId = setInterval(() => {
      if (!isPlaying) return;
      if (onTick) onTick();

      const time = ctx.currentTime;
      // Kick on 0, 4, 8, 12
      if (step % 4 === 0) {
        const kick = ctx.createOscillator();
        const kickGain = ctx.createGain();
        kick.type = 'sine';
        kick.frequency.setValueAtTime(150, time);
        kick.frequency.exponentialRampToValueAtTime(35, time + 0.15);
        kickGain.gain.setValueAtTime(0.4, time);
        kickGain.gain.exponentialRampToValueAtTime(0.01, time + 0.15);
        kick.connect(kickGain);
        kickGain.connect(ctx.destination);
        kick.start(time);
        kick.stop(time + 0.16);
      }

      // Snare on 4, 12
      if (step % 8 === 4) {
        const snare = ctx.createOscillator();
        const snareGain = ctx.createGain();
        snare.type = 'triangle';
        snare.frequency.setValueAtTime(240, time);
        snare.frequency.exponentialRampToValueAtTime(80, time + 0.1);
        snareGain.gain.setValueAtTime(0.25, time);
        snareGain.gain.exponentialRampToValueAtTime(0.01, time + 0.1);
        snare.connect(snareGain);
        snareGain.connect(ctx.destination);
        snare.start(time);
        snare.stop(time + 0.12);
      }

      // Synth melody
      const chordTone = chords[step % chords.length];
      const melody = ctx.createOscillator();
      const melodyGain = ctx.createGain();
      melody.type = 'sawtooth';
      melody.frequency.setValueAtTime(chordTone, time);
      melodyGain.gain.setValueAtTime(0.05, time);
      melodyGain.gain.exponentialRampToValueAtTime(0.001, time + 0.12);
      melody.connect(melodyGain);
      melodyGain.connect(ctx.destination);
      melody.start(time);
      melody.stop(time + 0.14);

      step = (step + 1) % 16;
    }, interval);

  } catch (e) {
    console.error(e);
  }
}

export function stopTrackBeat() {
  isPlaying = false;
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
  if (currentOsc) {
    try {
      currentOsc.stop();
      currentOsc.disconnect();
    } catch (e) {}
    currentOsc = null;
  }
}
