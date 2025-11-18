// --- Reggae Dub Performance Project ---

// Sliders for global controls
const tempo = slider("Tempo (BPM)", 75, 65, 90)
const key = slider("Key", ["C", "D", "E", "F", "G", "A"], 0)
const reverbAmt = slider("Reverb", 0.5, 0, 1)
const delayTime = slider("Delay Time (ms)", 400, 200, 800)
const filterSweep = slider("Filter Sweep Depth", 0.5, 0, 1)

// Layer mix controls
const muteDrums = slider("Mute Drums", [false, true], 0)
const muteBass = slider("Mute Bass", [false, true], 0)
const muteSkank = slider("Mute Skank", [false, true], 0)
const muteMelody = slider("Mute Melody", [false, true], 0)

// Instrument-specific sliders
const bassLevel = slider("Bass Level", 0.8, 0, 1)
const skankIntensity = slider("Skank Intensity", 0.7, 0, 1)
const melodyComplexity = slider("Melody Complexity", 0.3, 0, 1)

// Set tempo
setTempo(tempo)

// --- Helper Functions ---
function generateBass({ rootNotes, intensity, style }) {
  return rootNotes.map(note => `${note}2`).join(" ~ ") // simple reggae bass
}

function generateMelody({ scale, complexity, rhythm, length }) {
  const notes = ["C4", "D4", "E4", "G4", "A4"]
  return notes.slice(0, Math.floor(complexity * notes.length)).join(" ~ ")
}

// --- Patterns ---
const chords = [key + "maj", key + "maj", key + "maj", key + "maj"]
const skankPattern = repeat("~ ch ~ ch", 4)
const bassPattern = generateBass({ rootNotes: chords, intensity: bassLevel, style: "reggae" })
const melodyPattern = generateMelody({ scale: key + " major", complexity: melodyComplexity, rhythm: "spacey", length: 16 })
const drums = stack("hh*4", "~ rs ~ rs")

// Apply dub effects
applyReverb(reverbAmt)
applyDelay(delayTime, feedback=0.4)
applyFilterSweep(filterSweep, speed=0.2)

// --- Live Mix ---
play(stack(
  muteDrums ? "" : drums,
  muteBass ? "" : bassPattern,
  muteSkank ? "" : skankPattern,
  muteMelody ? "" : melodyPattern
))
