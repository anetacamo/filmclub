import React, { useState } from 'react';
import Like from './like.jsx';
import Seen from './seen.jsx';

import Stars from './stars.jsx';

const MovieDetails = ({ movie, handleLike, handleSeen, handleDirector }) => {
  const [director, setDirector] = useState('add director');
  return (
    <div className='film-details'>
      {movie ? (
        <div>
          <h2>
            <span>{movie.title}</span>
            {movie.title !== movie.original_title ? (
              <span className='red'> {movie.original_title}</span>
            ) : null}
          </h2>
          <Like onClick={handleLike} featured={movie.like} />
          <Seen
            onClick={handleSeen}
            featured={movie.seen === undefined ? false : movie.seen}
          />
          <Stars popularity={movie.vote_average / 2} />
          <span> {movie.vote_count} votes</span>
          <p>{movie.overview}</p>
          <p>
            <b>release date</b> {movie.release_date}
            <br></br>
            <b>original language</b> {movie.original_language}
            <br></br>
            <b className='underlined'>director</b> {movie.director}
          </p>
          <div className='director'>
            <input
              onChange={(e) => setDirector(e.target.value)}
              placeholder='add director'
            />
            <button onClick={() => handleDirector(director)}>+</button>
          </div>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};
export default MovieDetails;
