import React, { useState } from 'react';
import { Input, SearchResults } from './';

export default function Search({ storedMovies, handleSelectedMovie }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const API_KEY = '4cb1eeab94f45affe2536f2c684a5c9e';
  const API_URL = 'https://api.themoviedb.org/3/';

  //SEARCH FUNCTION - on query change setMovies to state object
  async function handleSearchChange(q) {
    setQuery(q);
    if (q.length !== 0) {
      setLoading(true);
      try {
        const response = await fetch(
          `${API_URL}search/movie?api_key=${API_KEY}&query=${q}`
        );
        const json = await response.json();
        setMovies(json.results);
        setLoading(false);
      } catch (error) {
        setError('Something went wrong');
        setLoading(false);
      }
    } else {
      setError('Search needs letters');
    }
  }

  return (
    <>
      <div className='container'>
        <Input
          nameClass='search-field'
          placeholder='Search for a movie'
          value={query}
          onInputChange={(e) => handleSearchChange(e)}
        />
      </div>
      <div className='underline'></div>
      <SearchResults
        loading={loading}
        erorr={error}
        query={query}
        movies={movies}
        storedMovies={storedMovies}
        handleSelectedMovie={handleSelectedMovie}
      />
    </>
  );
}
