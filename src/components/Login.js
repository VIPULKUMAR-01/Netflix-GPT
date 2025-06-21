import React from 'react'
import Header from './header';
import { useState ,useRef} from 'react';
import {auth} from "../utils/firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { checkValidData } from '../utils/validate';
import { signInWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from 'react-router-dom';
import { getAuth, updateProfile } from "firebase/auth";
const Login = () => {
    const [isSignInForm,setIsSignInForm]= useState(true);
    const[errorMessage,setErrorMessage] = useState(null);
    // const navigate = useNavigate();
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);



    const handleButtonClick= ()=>{
      //validate the form data
      // checkValidData;
      // console.log(email.current.value);
      // console.log(password.current.value);
      const message = checkValidData(email.current.value,password.current.value);
      setErrorMessage(message);
      if(message) return ;


      //sign in sign up logic
      if(!isSignInForm)
      {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // navigate("/browse");
    updateProfile(auth.currentUser, {
      displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      // Profile updated!
      // ...
      // navigate("/browse");
    }).catch((error) => {
      // An error occurred
      // ...
      setErrorMessage(error.message);
    });
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+
    errorMessage)
    // ..
  });

      }
      else{
        // Sign IN Logic Here
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
  });


      }
    };
    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm);
    };
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img
      src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_medium.jpg"
      alt="logo"
      />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
       <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In":"Sign Up"} </h1>
        <input ref = {email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
       {!isSignInForm && ( <input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>)}
        <input ref = {password} type='password' placeholder='password' className='p-4 my-4 w-full bg-gray-700'/>
        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg ' onClick={handleButtonClick}>{isSignInForm ? "Sign In":"Sign Up"}</button>
 
<p className='py-4 cursor-pointer  ' onClick={toggleSignInForm}> {isSignInForm? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>

      </form>
     
    </div>
  );
};


export default Login;
