import React from 'react'
import MovieCard from './MovieCard'
import './MovieList.css';
const MovieList = ({title,movies}) => {
  // console.log(movies);
return (
  <div className='p-6 bg-black '>
     <h1 className='text-3xl py-4 text-white'>{title}</h1>
      <div className='flex overflow-x-auto snap-x snap-mandatory scrollbar-hide'>
         
          <div className='flex space-x-4'>
            {movies?.map((movie)=>( <MovieCard key={movie.id} className="snap-center" posterPath={movie.poster_path}/>))}
             
          </div>
      </div>
    
  </div>
)
}
export default MovieList;
