import React from 'react';

export default function FavouriteMovies({ moviesList, handleClick, listName }) {
  const movies = moviesList.sort((a, b) =>
    a.original_language > b.original_language ? 1 : -1
  );
  return (
    <div className='movie-listing'>
      <p>
        <span className='red underlined'>{listName}</span> {movies.length}
      </p>
      {movies.map((movie) => (
        <p key={movie.id} onClick={() => handleClick(movie)}>
          {movie.title}
          <span className='red'>{movie.release_date.substring(0, 4)}</span>
          <span className='red language'>{movie.original_language}</span>
        </p>
      ))}
    </div>
  );
}
