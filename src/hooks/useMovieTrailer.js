import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants"


const useMovieTrailer = ()=>{

    const dispatch = useDispatch();
    // fetch trailer video && updating the store with trailer video data
      // fetch movie trailer
    
      const getMovieVideos = async()=>{
        // const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_OPTIONS)
        // const data = await fetch('https://api.themoviedb.org/3/movie/926670/videos?language=en-US', API_OPTIONS);
       const data = await  fetch('https://api.themoviedb.org/3/movie/539972/videos?language=en-US', API_OPTIONS);
       const json = await data.json();
       console.log(json);
    
    
       const filterData = json.results.filter((video)=>video.type==="Trailer");
       const trailer = filterData.length?filterData[0]:json.results[0];
       console.log(trailer);
       dispatch(addTrailerVideo(trailer));
      };
      useEffect(()=>{
        getMovieVideos();
      },[]);
}
export default useMovieTrailer;