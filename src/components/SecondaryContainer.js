import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies);
  return (
    <div className='-mt-34 relative z-20'>
      
      <MovieList className="div.flex.overflow-x-scroll.snap-x.snap-mandatory.ai-style-change-1" title={"Now Playing "} movies= {movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies= {movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies= {movies.nowPlayingMovies}/>
      <MovieList title={"Upcoming Movies"} movies= {movies.nowPlayingMovies}/>
      <MovieList title={"Horror "} movies= {movies.nowPlayingMovies}/>
     
     
    </div>
  )
}

export default SecondaryContainer
