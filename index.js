// Boiler room 3

// Grundfunktioner


// filmer)
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", year: 2010, ratings: [9, 8, 9, 7, 8] },
  { id: 2, title: "The Matrix", genre: "Sci-Fi", year: 1999, ratings: [9, 9, 8, 9, 8] },
  { id: 3, title: "Titanic", genre: "Romance", year: 1997, ratings: [7, 8, 6, 7, 8] },
  { id: 4, title: "Avatar", genre: "Sci-Fi", year: 2009, ratings: [8, 7, 8, 9, 7] }
];


//Räcknar ut medelvärdet av betygen 

const calculateAverage = ratings =>
  ratings.reduce((sum, r) => sum + r, 0) / ratings.length;



// Lägger till Ratingmedelvärdet i en filmobjekt 

const addAverageRating = movie => ({...movie, averageRating: calculateAverage(movie.ratings)}
);


// Filtrerar filmer efter genre
    const filterByGenre = (genre, movies) => movies.filter(m => m.genre === genre);


// Filtrera filmer efter minsta årtal
    const filterByYear = (minYear, movies) => movies.filter(m => m.year >= minYear);

// TESTER 



console.log("Inception:", calculateAverage(movies[0].ratings));


const inceptionWithAverage = addAverageRating(movies[0]);
console.log(inceptionWithAverage);


const sciFiMovies = filterByGenre("Sci-Fi", movies);
console.log(sciFiMovies);


const moviesFrom2000 = filterByYear(2000, movies);
console.log(moviesFrom2000);