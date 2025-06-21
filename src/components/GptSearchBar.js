import React from 'react'
import lang from '../utils/languageConstant';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { addGptMovieResult } from '../utils/gptSlice';

// import openai from '../utils/openai';
// import OpenAI from 'openai';




// const { GoogleGenerativeAI } = require("@google/generative-ai");



// import gptSearchPlaceholder from "../utils/languageConstant"

const GptSearchBar = () => {
  const dispatch = useDispatch();
    const langKey = useSelector((store)=>store.config.lang );
    const searchText = useRef(null);
    // Search Movie In Train
    const searchMovieTMDB = async (movie) =>{
      const data = await 
        fetch("https://api.themoviedb.org/3/search/movie?query=" +movie+ "&include_adult=false&language=en-US&page=1", 
        API_OPTIONS);

      
      const json = await data.json();
      return json.results;
    }; 

  //   const handleGptSearchClick = async () => {
  //     console.log(searchText.current.value);
  //     const gptQuery =
  //         "Act as a Movie Recommendation system and suggest some movies for the query " +
  //         searchText.current.value +
  //         ". Only give me the names of movies, comma-separated like the example result given ahead. Example Result: Sholay, Don, Golmaal, Golmaal Return, Koi Mil Gaya";
  //     try {
  //         const response = await fetch("https://api.openai.com/v1/chat/completions", {
  //             method: "POST",
  //             headers: {
  //                 "Content-Type": "application/json",
  //                 Authorization: OPENAI_KEY, // Replace with your OpenAI API key
  //             },
  //             body: JSON.stringify({
  //                 model: "gpt-3.5-turbo",
  //                 messages: [{ role: "user", content: gptQuery }],
  //             }),
  //         });
  
  //         if (!response.ok) {
  //             throw new Error(`HTTP error! Status: ${response.status}`);
  //         }
  
  //         const gptResults = await response.json();
  //         console.log(gptResults.choices[0].message.content); // Access the response content
  //     } catch (error) {
  //         console.error("Error fetching GPT results:", error);
  //     }
  // };
  

    const handleGptSearchClick= async()=>{
      console.log(searchText.current.value);
      const genAI = new GoogleGenerativeAI("AIzaSyAkoM5uW3kTWbhcya5T6bVcf3L7F3-uKN4");
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' }, { apiVersion: 'v1' });

// const prompt = "Explain how AI works";
const prompt =
        "Act as a Movie Recommendation system and suggest 5 movies for the query " +
        searchText.current.value +
     ". Only give me the names of movies, comma-separated like the example result given ahead. Example Result: Sholay, Don, Golmaal, Golmaal Return, Koi Mil Gaya";


const result = await model.generateContent(prompt);
console.log(result.response.text());
const gptMovies = result.response.text().split(",");

const promiseArray= gptMovies.map((movie)=>searchMovieTMDB(movie));
const tmdbResults  =  await Promise.all(promiseArray);
console.log(tmdbResults);
dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}));
// for each movie i will 


      // Make an API call to Gpt Api and get movie result
// const openai = new OpenAI({
//   apiKey:OPENAI_KEY,
//   dangerouslyAllowBrowser: true,
// });
//       const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query"+searchText.current.value+".only give me name of  movies, comma seperated like the example result given ahead. Example Result:Sholay,Don,Golmaal,Golmaal Return,Koi Mil Gaya";
//       const gptResults = await openai.chat.completions.create({
//         messages:[{role:'user',content:gptQuery}],
//         model:'gpt-3.5-turbo',
//       });
//       console.log(gptResults.choices);

    };
  return (
    <div className= "pt-[10%] flex justify-center">
        <form className=' w-1/2 bg-black  grid grid-cols-12'
          onSubmit={(e)=>e.preventDefault()}
          >
        <input ref={searchText}
        type='text' className='p-4 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder}/>
        <button className=' col-span-3 m-4  py-2 px-4 bg-red-700 text-white rounded-lg' 
       onClick={handleGptSearchClick} 
        >
          {lang[langKey].search}</button>

        </form>
      
    </div>
  )
}

export default GptSearchBar;