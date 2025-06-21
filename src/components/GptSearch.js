import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';

const GptSearch = () => {
  return (
    <>
           <div className='absolute -z-10'>
      <img 
      src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_medium.jpg"
      alt="logo"
      />
      </div>
      <div className='pt-[30%] md:p-0'>
      <GptSearchBar/>
      <GptMovieSuggestions/>

      </div>
     
    </>
  )
}

export default GptSearch;
