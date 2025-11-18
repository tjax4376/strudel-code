// --- Reggae Dub Remix ---
// Adds delay, filter sweeps, and spacious effects

const tempo = slider("Tempo (BPM)", 75, 65, 90)
const key = slider("Key", ["C", "D", "E", "F", "G", "A"], 0)
const bassLevel = slider("Bass Level", 0.8, 0, 1)
const skankIntensity = slider("Skank Intensity", 0.7, 0, 1)
const delayTime = slider("Delay Time (ms)", 400, 200, 800)
const filterSweep = slider("Filter Sweep Depth", 0.5, 0, 1)
const reverbAmt = slider("Reverb", 0.5, 0, 1)

setTempo(tempo)

// Chord progression (I - IV - V)
const chords = [key + "maj", key + "maj", key + "maj", key + "maj"]

// Offbeat skank (beats 2 and 4)
const skankPattern = repeat("~ ch ~ ch", 4)

// Bassline (syncopated, emphasizes beat 3)
const bassPattern = generateBass({
  rootNotes: chords,
  intensity: bassLevel,
  style: "reggae"
})

// Melody (optional, sparse for dub)
const melodyPattern = generateMelody({
  scale: key + " major",
  complexity: 0.3,
  rhythm: "spacey",
  length: 16
})

// Percussion: hi-hats and rimshots
const hats = "hh*4"
const rimshot = "~ rs ~ rs"

// Apply dub effects
applyReverb(reverbAmt)
applyDelay(delayTime, feedback=0.4)
applyFilterSweep(filterSweep, speed=0.2)

// Combine layers
play(stack(
  hats,
  rimshot,
  skankPattern,
  bassPattern,
  melodyPattern
))
