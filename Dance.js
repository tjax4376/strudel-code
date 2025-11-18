// --- Dance Music Generator ---
// Captures EDM/House essence with interactive sliders

const tempo = slider("Tempo (BPM)", 120, 90, 150)
const chordIndex = slider("Chord Progression", ["I-V-vi-IV", "vi-IV-I-V", "i-VII-VI"], 0)
const cutoff = slider("Filter Cutoff (Hz)", 800, 200, 2000)
const reverbAmt = slider("Reverb Amount", 0.3, 0, 1)
const bassLevel = slider("Bass Level", 0.8, 0, 1)
const melodyComplexity = slider("Melody Complexity", 0.5, 0, 1)

// Set tempo
setTempo(tempo)

// Kick pattern (four-on-the-floor)
const kick = "bd*4"

// Hi-hats with syncopation
const hats = "hh*8"

// Chord progressions mapped to scale
const progressions = [
  ["Cmaj", "Gmaj", "Am", "Fmaj"],   // I-V-vi-IV
  ["Am", "Fmaj", "Cmaj", "Gmaj"],   // vi-IV-I-V
  ["Am", "Gmaj", "Fmaj"]            // i-VII-VI
]
const chosenProgression = progressions[chordIndex]

// Melody generator based on complexity
const melody = generateMelody({
  scale: "C major",
  complexity: melodyComplexity,
  length: 16
})

// Bass layer
const bass = generateBass({
  rootNotes: chosenProgression,
  intensity: bassLevel
})

// Apply effects
applyFilter(cutoff)
applyReverb(reverbAmt)

// Combine layers
play(stack(kick, hats, chosenProgression, melody, bass))
