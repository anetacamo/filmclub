import React, { useState, useEffect } from 'react';
import {
  FavouriteMovies,
  MovieDetails,
  Search,
  SuggestedMovies,
  UserForm,
} from './';
import { useAuth } from '../firebase';
import db from '../firebase';
import { setDoc, doc, onSnapshot, collection } from 'firebase/firestore';

import '../style.scss';

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [storedMovies, setStoredMovies] = useState([]);
  const [saved, setSaved] = useState(false);
  const currentUser = useAuth();
  const [download, setDownload] = useState(false);
  const [allSuggested, setAllSuggested] = useState([]);

  const removeIncomplete = (array) => {
    const newArray = array.filter((item) => item !== null && 'id' in item);
    return newArray;
  };

  // first get items from local storage - if exist.
  // then : if user is signed in AND database has a movie entry with users uid - set the filmLists
  // ADD those to the movie lisst
  useEffect(() => {
    // first get items from local storage - if exist.
    console.log('useEffect run');
    /*
    if (localStorage.getItem('films') !== null) {
      let moviesFromStorage = JSON.parse(localStorage.getItem('films'));
      setStoredMovies(removeIncomplete(moviesFromStorage));
    }
    */

    const unsubscribe = onSnapshot(collection(db, 'users'), (snapshot) => {
      // here collect all the suggested movies and store them in suggested items in one level array.
      console.log(snapshot.docs);

      let suggestedItems = [];
      const allUsersData = snapshot.docs.map((doc) => {
        const array = JSON.parse(doc.data().movies);
        console.log(JSON.parse(doc.data().movies));
        if (array !== []) {
          array.filter((item) => {
            item.suggested && suggestedItems.push(item);
          });
        }
      });
      console.log('alluser', allUsersData);
      // let suggestedItems = [];

      setAllSuggested(suggestedItems);
      console.log(suggestedItems);

      // user is signed:
      if (currentUser) {
        const user = snapshot.docs.filter((doc) => doc.id === currentUser.uid);
        // user has no data in db, yet - save the local storage data.
        if (user[0] === undefined) {
          createUserDb();
          async function createUserDb() {
            const docRef = doc(db, 'users', currentUser.uid);
            const payload = { movies: localStorage.getItem('films') };
            await setDoc(docRef, payload);
          }
          setSaved(true);
          // else take the users movies from its db and set them to storedMovies
        } else {
          const moviesFromDb = JSON.parse(user[0].data().movies);
          if (moviesFromDb !== null) {
            setStoredMovies(removeIncomplete(moviesFromDb));
          }
          //let result = _.unionBy(storedMovies, moviesFromDb, 'id');
          //setStoredMovies(removeIncomplete(result));
        }
      }
    });
    return unsubscribe;
  }, [download, currentUser]);

  function updateStoredMovies(m) {
    // here I copy the list of liked and suggested movies WITHOUT the incoming movie
    const moviesWithoutSelected = storedMovies.filter(
      (film) => film.id !== m.id
    );
    let updatedMovies = storedMovies;
    //the movie IS in the list
    if (isMovieHere(m.id, storedMovies)) {
      //remove it from the list ONLY if the movie has all features set to none
      if (m.like === undefined) {
        if (m.suggested === undefined) {
          updatedMovies = [...moviesWithoutSelected];
        } else {
          updatedMovies = [...moviesWithoutSelected, m];
        }
      } else {
        //otherwise update the list
        updatedMovies = [...moviesWithoutSelected, m];
      }
    } else {
      //if not here - add to the list
      updatedMovies = [...storedMovies, m];
    }
    return updatedMovies;
  }

  const simplifyMovie = (movie) => {
    const simplifiedMovie = [
      'title',
      'id',
      'seen',
      'like',
      'suggested',
      'original_title',
      'release_date',
      'original_language',
      'vote_average',
      'overview',
    ].reduce((newObj, key) => {
      movie[key] !== undefined && (newObj[key] = movie[key]);
      return newObj;
    }, {});
    return simplifiedMovie;
  };

  function saveMovies(movies) {
    console.log('saving movies to local storage');
    localStorage.setItem('films', JSON.stringify(movies));
    setStoredMovies(movies);
  }

  //only save to storage onclick.
  async function saveMoviesToDb(movies) {
    // if logged in, sent to db
    console.log('saving movies to online db');
    if (currentUser === undefined || currentUser === null) {
      setSaved(false);
    } else {
      const docRef = doc(db, 'users', currentUser.uid);
      const payload = { movies: JSON.stringify(movies) };
      await setDoc(docRef, payload);
      setSaved(true);
    }
  }

  // on feature icon click update the selected movie. then stored Movies
  function onFeatureChange(movie, feature) {
    console.log('featured changed', feature);
    const fState = movie[feature] === true ? undefined : true;
    console.log('feature state', fState);
    const updatedMovie = { ...movie, [feature]: fState };
    console.log(
      'updated movie like: ',
      updatedMovie.like,
      updatedMovie.suggested
    );
    const simplified = simplifyMovie(updatedMovie);
    setSelectedMovie(simplified);
    console.log(
      'simplified movie like: ',
      simplified.like,
      simplified.suggested
    );
    //on the feature change, update stored movies
    const updatedMovies = updateStoredMovies(simplified);
    console.log(simplified);
    console.log(updatedMovies);
    saveMovies(updatedMovies);
    setSaved(false);
  }

  function isMovieHere(movieId, list) {
    return list.some((film) => film.id === movieId);
  }

  return (
    <div className='search'>
      <Search
        storedMovies={storedMovies}
        handleSelectedMovie={(m) => setSelectedMovie(m)}
      />
      <UserForm
        saved={saved}
        handleSave={() => saveMoviesToDb(storedMovies)}
        handleDownload={() => setDownload(!download)}
      />
      {selectedMovie && (
        <MovieDetails
          movie={selectedMovie}
          handleFeatured={(type) => onFeatureChange(selectedMovie, type.type)}
          storedMovies={storedMovies}
        />
      )}
      <div className='favourite-movies container'>
        {currentUser && (
          <FavouriteMovies
            listName='your liked movies'
            moviesList={storedMovies.filter((movie) => movie.like)}
            handleClick={setSelectedMovie}
          />
        )}
        {currentUser && (
          <FavouriteMovies
            listName='your suggested movies'
            moviesList={storedMovies.filter((movie) => movie.suggested)}
            handleClick={setSelectedMovie}
          />
        )}
        <SuggestedMovies
          listName='suggested by all'
          movies={allSuggested}
          handleClick={setSelectedMovie}
        />
      </div>
    </div>
  );
}
