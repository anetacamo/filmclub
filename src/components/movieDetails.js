import React from 'react';
import { Featured, Stars } from '.';

const MovieDetails = ({ movie, handleFeatured, storedMovies }) => {
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
          <Featured
            onClick={handleFeatured}
            featured={storedMovies.find((film) => film.id === movie.id)?.like}
            icon='fa-heart'
            type='like'
          />
          {/*
          <Featured
            onClick={handleFeatured}
            featured={storedMovies.find((film) => film.id === movie.id)?.seen}
            icon='fa-eye'
            type='seen'
          /> */}
          <Featured
            onClick={handleFeatured}
            featured={
              storedMovies.find((film) => film.id === movie.id)?.suggested
            }
            icon='fa-lightbulb-o'
            type='suggested'
          />
          <Stars popularity={movie.vote_average / 2} />
          <span className='red bold'>{movie.vote_average}</span>
          {movie.runtime && <span> {movie.runtime} min</span>}
          <p>{movie.overview}</p>
          <p>
            <b>release date</b> {movie.release_date}
            <br></br>
            <b>original language</b> {movie.original_language}
            <br></br>
          </p>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};
export default MovieDetails;
