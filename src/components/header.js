import { onAuthStateChanged,signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGE } from '../utils/constants';
import { useEffect } from 'react';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
const user = useSelector((store)=>store.user);
const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)
  const handleSignOUt = ()=>{
    signOut(auth).then(()=>{
      // navigate("/");
// Sign-OUt Successful.
    }).catch((error) => {
       // navigate("/error");
    }); 
  };
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
      if(user){
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        navigate("/browse");
      }
      else{
        //user is signed out
        dispatch(removeUser());
        navigate("/");
      }
    }); 
    // ubsubscribe when component unmounts
    return () => unsubscribe();
  },[]);
   
const handleGptSearchClick=() =>{
  // Toggle Gpt Search 
  dispatch(toggleGptSearchView());
    
};
const handleLanguageChange = (e)=>{
  // console.log(e.target.value);
  dispatch(changeLanguage(e.target.value))
};
  return (
    // <div className='absolute'>
      /* <img
      src='https://cdn-icons-png.flaticon.com/512/5977/5977590.png'
      alt='logo'
      /> */
    // </div>
    <div className=" flex p-2 absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row  md:justify-between ">
        <img
        className="w-44 mx-auto md:mx-0"
        src={LOGO}
        alt="logo"
        />
        <div className='flex p-2'>
      
          <button className='   text-white'
          onClick={handleGptSearchClick}>
            GPT Search
          </button>
{/* <img className='w-12 h-12' alt='usericon' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAY1BMVEX///8AAACxsbFSUlLh4eE9PT14eHgoKCj39/fy8vJiYmL6+vpLS0u+vr4VFRXPz8/o6OjW1tYPDw+ZmZmrq6s1NTWNjY1vb28iIiJEREQdHR1dXV2AgIDJyclYWFiGhoahoaGrq4KOAAAEXUlEQVR4nO2c6XarIBSFrUHjWCVOSc30/k95QZoOUayiXghrfz9j4jrbcAYOoOMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWE8c5DSt/Tbx9vsqaf06pXkQ67ZKgTgkaZ289UjqlISvJSikbvPeVyJ4b1wa6rZwMnl6O37bXiXXNmqv16T6/ux4S3PdVk4iL5uHzaemvpdpRgkhlGZpea+b0+NaU5ovJyyjQ2fsISrSLH/yjjjP0uLrC6Xhgy2NxACrigsJhr8SkEshRtwxSv+vdbOIb8LKkytTIgiIK4ZbdTM2sFERiit3wvAJU6E7odvbpUL50QXe+8SHHd+74P1RbmuVEuFNeDWZ/pNchIKbcXEg97sRNvMxl91Y8w0L0qTLLUk293dZ52bNjL9ze4SWRuEJ541pakJu0XutNPbDmjtOY47fdFqK0dQiJyh4VGvWtUideomWh5p6TYvUcbktZ2UtTA2P6gd3PYvUoR4zpV2ghalp2S08A2qBIOL5ZWGmyHm+iRY9kFUoeEmy+KFSXgoVa9izhIyXv/fl97nzYnt2zl2X8MwT/xp34qXAWW+2SfcsDq3iuZTlzr3WyVpXXg4O9dwdZER3obvkvBwkkSz/amr8ZneR3otHtIP88uaE/I8phyZj9bAW9uylbhGXo5c3h/IQNFjw7mRiRiZvhAdGbZkz5sN8eJbMxByuZ/+JcTExD8+Frg5HyDJdNZwbmJh9r9gKxsU4GfOaD13jLJVP4JXEdG0EXdHZl9e6SmIclwVHfyXjZhKz0n8ncVg1MZT97F2P09CRAkRNTFcc6Yln95ESU03M6C23hc2oKpm7DoqJvc+smMuePu/ZtqsZOAfmMlfZcx4U42T+mUdyGiWSTg65MqdZz8LphLynIpscDotxwk5DI3W2gF/SkWk6/5ddlIgRRPKerK4I4I71h0bFhG/S/icvUHW0aVhhdpT2yUfFdBmKefqAw5VHPa2A80gw+0OME+x4T3bXV8PDmXTsbggrZjzpXOqXmJA8k4tFtv6y2cXTU9AwN/ak7ZSfYojv9TiJRUDv2W8yJibazmYpLGeepIHnp5hCNlF76/8L9KQna64i5rn5r0vM9GHWyIfZcwjQNcysCgDLQ/NAZacrNC9Ims7BtKS5WTmjY5eDSqEpqmYDC02FKcClbXj8M3AKMH9yFldipmng5Gz+tPmrB5BTSQtG37TZqoaGVa0mq5qAVrVn7WqcW7WkYdVi09rLgIm2WMaxaoHWqqVzuzY1WLXdxK6NQFZt0bJr89zntsaF48OUbY1WbTgVte6yrcA8ipixFdiuTdp2bZ9feLCh02LOwQarjpw81OysOAxk1zEtpQN0xNQDdI5VRxud70On6ZRDp67Zh07tOg7sWHVQ2/nrCH3wUkfoGWTw5QbkFV9uwOm9duLavuprJzgWvRCEY9GrWgQ/X6LjvfJLdAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABm8g88rUKVk8ctAgAAAABJRU5ErkJggg=='/> */}
<button  onClick={handleSignOUt} className='font-bold text-white'>
  (Sign Out)
  </button>
  </div>

        </div>
        )}
  
export default Header;
