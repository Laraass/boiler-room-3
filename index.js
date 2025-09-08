// Boiler room 3

// Grundfunktioner


const calculateAverage = ratings => {
    ratings.reduce((sum, r) => sum + r, 0) / ratings.length
}