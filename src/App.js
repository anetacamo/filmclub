import React, { useState, useEffect } from 'react';
import MovieDetails from './components/moviedetails.jsx';
import FavouriteMovies from './components/favouritemovies.jsx';

import './App.css';

const API_KEY = '4cb1eeab94f45affe2536f2c684a5c9e';
const API_URL = 'https://api.themoviedb.org/3/search/movie';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [storedMovies, setStoredMovies] = useState([]);

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
            setError('Something went wrong');
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

  /*
  useEffect(() => {
    if (localStorage.getItem('liked') !== null) {
      const likedMovies = JSON.parse(localStorage.getItem('liked'));
      setLikedMovieList(likedMovies);
    }
    if (localStorage.getItem('seen') !== null) {
      const seenMovies = JSON.parse(localStorage.getItem('seen'));
      setSeenMovieList(seenMovies);
    }
  }, []);


  function handleLike(movie, saveAs) {
    setLikedMovieList((movies) => {
      if (!isMovieHere(movie, movies)) {
        const updatedMovies = [...movies, movie];
        saveInStorage(updatedMovies, saveAs);
        return updatedMovies;
      } else {
        const updatedMovies = movies.filter((film) => film.id !== movie.id);
        saveInStorage(updatedMovies, saveAs);
        return updatedMovies;
      }
    });
  }


  function addDirector(movie, director) {
    const updatedMovie = (movie['director'] = director);
    console.log(updatedMovie);
    return updatedMovie, director;
  }

  function updateMovies(movies, movie, saveAs) {
    if (!isMovieHere(movie, movies)) {
      const updatedMovies = [...movies, movie];
      saveInStorage(updatedMovies, saveAs);
      return updatedMovies;
    } else {
      const updatedMovies = movies.filter((film) => film.id !== movie.id);
      saveInStorage(updatedMovies, saveAs);
      return updatedMovies;
    }
  }



  function putInStorage(movie, key) {
    // onclick, look for the id of movie in the storage
    if (!isMovieHere(movie, storedMovies)) {
      if (key in movie) {
        const updatedMovie = (movie[key] = !key);
        const updatedMovies = [...storedMovies, updatedMovie];
        setStoredMovies(updatedMovies);
        localStorage.setItem('films', JSON.stringify(updatedMovies));
      } else {
        const updatedMovie = (movie[key] = true);
        const updatedMovies = [...storedMovies, updatedMovie];
        setStoredMovies(updatedMovies);
        localStorage.setItem('films', JSON.stringify(updatedMovies));
      }

      // then look for the feature,
      // if present toggle or overwrite
      // if not, add - true, or name
    } else {
      const updatedMovie = (movie[key] = true);
      const updatedMovies = [...storedMovies, updatedMovie];
      setStoredMovies(updatedMovies);
      localStorage.setItem('films', JSON.stringify(updatedMovies));
    }
  }
  */

  useEffect(() => {
    // when iniciated get films from storage
    if (localStorage.getItem('films') !== null) {
      const moviesInStorage = JSON.parse(localStorage.getItem('films'));
      setStoredMovies(moviesInStorage);
    }
  }, []);

  function updateFilms(mov) {
    let updatedMovies = storedMovies;
    if (isMovieHere(mov.id, storedMovies)) {
      const moviesWithoutSelected = storedMovies.filter(
        (film) => film.id !== mov.id
      );
      updatedMovies = [...moviesWithoutSelected, mov];
    } else {
      updatedMovies = [...storedMovies, mov];
    }
    setStoredMovies(updatedMovies);
    localStorage.setItem('films', JSON.stringify(updatedMovies));
  }

  function addFeature(movie, feature, value) {
    let updatedMovie = movie;
    // if value non-existent do this, else  updatedMovie = { ...movie, [feature]: value };
    if ([feature] in movie) {
      updatedMovie = { ...movie, [feature]: !movie[feature] };
    } else {
      updatedMovie = { ...movie, [feature]: true };
    }
    setSelectedMovie(updatedMovie);
    updateFilms(updatedMovie);
  }

  function addFeatureText(movie, feature, director) {
    let updatedMovie = movie;
    updatedMovie = { ...movie, [feature]: director };
    setSelectedMovie(updatedMovie);
    updateFilms(updatedMovie);
  }

  function isMovieHere(movieId, movies) {
    return movies.some((film) => film.id === movieId);
  }

  function onDirector(director) {
    addFeatureText(selectedMovie, 'director', director);
  }

  return (
    <div className='search'>
      <input
        className='search-field'
        placeholder='Search for a movie'
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className='underline'></div>
      <div className='results movie-listing'>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : query.length !== 0 && movies.length === 0 ? (
          <p>No movies found</p>
        ) : (
          movies.map((movie) => {
            return (
              <p key={movie.id} onClick={() => setSelectedMovie(movie)}>
                {movie.title}{' '}
                {isMovieHere(movie.id, storedMovies) && (
                  <i class='fa fa-heart'></i>
                )}
                {isMovieHere(movie.id, storedMovies) && (
                  <i class='fa fa-eye'></i>
                )}{' '}
              </p>
            );
          })
        )}
      </div>
      <MovieDetails
        movie={selectedMovie}
        handleLike={() => addFeature(selectedMovie, 'like')}
        handleSeen={() => addFeature(selectedMovie, 'seen')}
        handleDirector={onDirector}
      />
      <div className='favourite-movies'>
        <FavouriteMovies
          listName='liked movies'
          moviesList={storedMovies.filter((movie) => movie.like)}
          handleClick={setSelectedMovie}
        />
        <FavouriteMovies
          listName='seen movies'
          moviesList={storedMovies.filter((movie) => movie.seen)}
          handleClick={setSelectedMovie}
        />
      </div>
    </div>
  );
}

/*
things for later

export database 
connect database online
show/hode onclick input field
add scss
add sorting by year 
+ sorting by year in the language

*/
