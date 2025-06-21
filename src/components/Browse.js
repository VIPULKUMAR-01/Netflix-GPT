import React, { useEffect } from 'react'
import Header from './header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
const Browse = () => {
  const showGptSearch  = useSelector((store)=>store.gpt.showGptSearch);
  // Fetch Data from TMDB API and update stored movies
  useNowPlayingMovies();
  return (
    <div>
      <Header className="overflow-x-hidden overflow-y-auto"/>
      {
        showGptSearch?(<GptSearch/>):( <> <MainContainer/>
        <SecondaryContainer/> </>)
      }
     
     
    </div>
  );
};

export default Browse;
