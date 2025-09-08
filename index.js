// Boiler room 3

// Grundfunktioner



// filmer)
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", year: 2010, ratings: [9, 8, 9, 7, 8] },
  { id: 2, title: "The Matrix", genre: "Sci-Fi", year: 1999, ratings: [9, 9, 8, 9, 8] },
  { id: 3, title: "Titanic", genre: "Romance", year: 1997, ratings: [7, 8, 6, 7, 8] },
  { id: 4, title: "Avatar", genre: "Sci-Fi", year: 2009, ratings: [8, 7, 8, 9, 7] }
];


//1)

const calculateAverage = ratings => {
    ratings.reduce((sum, r) => sum + r, 0) / ratings.length
}

// tester 

