import React from 'react';
import { Featured } from '.';
import { useAuth } from '../firebase';
import seen from '../seen.json';

const MovieDetails = ({ movie, handleFeatured, storedMovies }) => {
  const currentUser = useAuth();
  return (
    <div className='film-details container'>
      {movie ? (
        <div>
          <h2>
            <span>{movie.title}</span>
            {movie.title !== movie.original_title ? (
              <span className='red'> {movie.original_title}</span>
            ) : null}
          </h2>
          {/*}
          {currentUser && (
            <Featured
              onClick={handleFeatured}
              featured={storedMovies.find((film) => film.id === movie.id)?.like}
              icon='fa-heart'
              type='like'
            />
          )}
          */}
          {currentUser && (
            <Featured
              onClick={handleFeatured}
              featured={
                storedMovies.find((film) => film.id === movie.id)?.suggested
              }
              icon='fa-lightbulb-o'
              type='suggested'
            />
          )}
          {/*<Stars popularity={movie.vote_average / 2} /> */}
          <span className='red bold'>{movie.vote_average}</span>
          {movie.runtime && <span> {movie.runtime} min</span>}
          <p>{movie.overview}</p>
          <p>
            <b>release date</b> {movie.release_date}
            <br></br>
            <b>original language</b> {movie.original_language}
            <br></br>
          </p>
          <br />

          {seen.some((film) => film.id === movie.id) ? (
            <h5 className='purple'>{`we watched this movie on ${
              seen.find((film) => film.id === movie.id).watched
            }`}</h5>
          ) : currentUser ? (
            <button
              className='small'
              onClick={() => handleFeatured({ type: 'suggested' })}
            >
              {storedMovies.find((film) => film.id === movie.id)?.suggested
                ? 'UNVOTE'
                : 'VOTE FOR THIS'}
            </button>
          ) : (
            <h5 className='purple'>login or sign up to vote</h5>
          )}
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};
export default MovieDetails;
