// --- Reggae Generator ---
// Bouncy, offbeat skank with interactive sliders

const tempo = slider("Tempo (BPM)", 75, 65, 90)
const key = slider("Key", ["C", "D", "E", "F", "G", "A"], 0)
const bassLevel = slider("Bass Level", 0.8, 0, 1)
const skankIntensity = slider("Skank Intensity", 0.7, 0, 1)
const reverbAmt = slider("Reverb", 0.3, 0, 1)

setTempo(tempo)

// Chord progression (I - IV - V)
const chords = [key + "maj", key + "maj", key + "maj", key + "maj"]

// Offbeat skank (beats 2 and 4)
const skank = "ch*2 ~ ch*2" // ch = chord hit
const skankPattern = repeat(skank, 4)

// Bassline (syncopated, emphasizes beat 3)
const bassPattern = "bd ~ bd ~ bd bd ~" // simple reggae bass feel

// Hi-hats and rimshots
const hats = "hh*4"
const rimshot = "~ rs ~ rs"

// Apply effects
applyReverb(reverbAmt)

// Combine layers
play(stack(
  hats,
  rimshot,
  skankPattern,
  bassPattern
))
