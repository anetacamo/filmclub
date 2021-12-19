import React from 'react';
import movies from '../seen.json';

export default function WatchedMovies({ handleClick, listName }) {
  movies.sort((a, b) => (a.watched < b.watched ? 1 : -1));

  function getMovie(id) {
    const film = movies.find((movie) => movie.id === id);
    return film;
  }

  return (
    <div
      className='movie-listing'
      style={{
        backgroundColor: 'black',
        color: 'white',
        padding: '16px 20px',
        marginRight: '-20px',
      }}
    >
      <h5 className='purple bold' style={{ marginRight: 0 }}>
        {listName}
      </h5>

      {movies?.length > 0 &&
        movies.map((movie) => (
          <h5 key={movie.id} onClick={() => handleClick(getMovie(movie.id))}>
            {getMovie(movie.id).title}
            <span className='red'>
              {getMovie(movie.id).release_date.substring(0, 4)}
            </span>
            <span className='red language'>
              {getMovie(movie.id).original_language}
            </span>
            <span className='purple bolded bold'>{movie.watched}</span>
          </h5>
        ))}
    </div>
  );
}
