import React from 'react';

export default function SearchResults({
  loading,
  error,
  query,
  movies,
  storedMovies,
  handleSelectedMovie,
}) {
  function isMovieHere(movieId, list) {
    return list.some((film) => film.id === movieId);
  }
  return (
    <div className='results movie-listing container'>
      <h5>{(loading && 'Loading...') || error}</h5>
      {query.length !== 0 && movies.length !== 0 ? (
        movies.map((movie) => (
          <h5 key={movie.id} onClick={() => handleSelectedMovie(movie)}>
            {movie.title}{' '}
            <span className='purple'>
              {movie.release_date?.substring(0, 4)}
            </span>
            {isMovieHere(movie.id, storedMovies) && (
              <i className='fa fa-star red'></i>
            )}
          </h5>
        ))
      ) : (
        <h5>No movies found</h5>
      )}
    </div>
  );
}
