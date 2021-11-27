import React from 'react';

export default function SuggestedMovies({ movies, handleClick, listName }) {
  let results = Object.values(
    movies.reduce((a, { id }) => {
      a[id] = a[id] || { id, count: 0 };
      a[id].count++;
      return a;
    }, {})
  );

  results.sort((a, b) => (a.count < b.count ? 1 : -1));

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
        results.map((movie) => (
          <h5 key={movie.id} onClick={() => handleClick(getMovie(movie.id))}>
            {getMovie(movie.id).title}
            <span className='red'>
              {getMovie(movie.id).release_date.substring(0, 4)}
            </span>
            <span className='red language'>
              {getMovie(movie.id).original_language}
            </span>
            <span className='purple bolded bold'>{movie.count}</span>
          </h5>
        ))}
    </div>
  );
}
