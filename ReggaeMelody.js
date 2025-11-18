// --- Reggae Band Generator ---
// Includes melody, chords, bass, and percussion with sliders

const tempo = slider("Tempo (BPM)", 75, 65, 90)
const key = slider("Key", ["C", "D", "E", "F", "G", "A"], 0)
const bassLevel = slider("Bass Level", 0.8, 0, 1)
const skankIntensity = slider("Skank Intensity", 0.7, 0, 1)
const melodyComplexity = slider("Melody Complexity", 0.5, 0, 1)
const reverbAmt = slider("Reverb", 0.3, 0, 1)

setTempo(tempo)

// Chord progression (I - IV - V)
const chords = [key + "maj", key + "maj", key + "maj", key + "maj"]

// Offbeat skank (beats 2 and 4)
const skankPattern = repeat("~ ch ~ ch", 4) // ch = chord hit

// Bassline (syncopated, emphasizes beat 3)
const bassPattern = generateBass({
  rootNotes: chords,
  intensity: bassLevel,
  style: "reggae"
})

// Melody (simple, bouncy, based on complexity)
const melodyPattern = generateMelody({
  scale: key + " major",
  complexity: melodyComplexity,
  rhythm: "syncopated",
  length: 16
})

// Percussion: hi-hats and rimshots
const hats = "hh*4"
const rimshot = "~ rs ~ rs"

// Apply effects
applyReverb(reverbAmt)

// Combine layers
play(stack(
  hats,
  rimshot,
  skankPattern,
  bassPattern,
  melodyPattern
