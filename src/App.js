import React, { useState, useEffect } from "react";
import MovieDetails from "./components/moviedetails.jsx";
import FavouriteMovies from "./components/favouritemovies.jsx";
import './App.css';

const API_KEY = "4cb1eeab94f45affe2536f2c684a5c9e";
const API_URL = "https://api.themoviedb.org/3/search/movie";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null); 
  const [likedMoviesList, setLikedMovieList] = useState([]);

  useEffect(() => {
    if (query.length !== 0) {
      setLoading(true);
      setError(null);
      const timeout = setTimeout(() => {
        async function getMovies() {
          try {
            const response = await fetch(
              `${API_URL}?api_key=${API_KEY}&query=${query}`
            );
            const json = await response.json();
            setMovies(json.results);
            setLoading(false);            
          } catch (error) {
            setError("Something went wrong");
            setLoading(false);
          }
        }
        getMovies();
      }, 250);
      return () => clearTimeout(timeout);
    } else {
      setMovies([]);
    }
  }, [query]);

  useEffect(() => { 
    if (localStorage.getItem("liked") !== null) {
      const likedMovies = JSON.parse(localStorage.getItem('liked'))
      setLikedMovieList(likedMovies);
    }
  }, []);

  function handleLike(movie) {
    setLikedMovieList(movies => {
      const isMovieHere = movies.some(film => film.id === movie.id);
      if (!isMovieHere) {
        const updatedMovies = ([...movies, movie])
        saveInStorage(updatedMovies)
        return updatedMovies
      } else {
        const updatedMovies = movies.filter(film => film.id !== movie.id) 
        saveInStorage(updatedMovies)
        return updatedMovies
      }
    })
  };

  function saveInStorage(movies) {
    localStorage.setItem('liked', JSON.stringify(movies));
  }

  return (
    <div className="search">
      <input
        className="search-field"
        placeholder="Search for a movie"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <div className="underline"></div>
      <div className="results movie-listing">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : query.length !== 0 && movies.length === 0 ? (
          <p>No movies found</p>
        ) : (
          movies.map(movie => {
            const isMovieLiked = likedMoviesList.some(
              film => film.id === movie.id);
            return ( 
              <p key={movie.id} onClick={() => setSelectedMovie(movie)}>
                {movie.title} 
                {isMovieLiked && (
                  <i class="fa fa-heart red"></i>
                )}
              </p>
            );
          })
        )}
      </div>
      <MovieDetails 
        movie={selectedMovie} 
        movies={likedMoviesList} 
        handleClick={() => handleLike(selectedMovie)} />
      <FavouriteMovies moviesList={likedMoviesList} handleClick={setSelectedMovie}/>  
    </div>
  );
}
