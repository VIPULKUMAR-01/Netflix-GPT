import React from 'react';
import {createBrowserRouter, useNavigate,  } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';
import { RouterProvider } from 'react-router-dom';

// import { useDispatch } from 'react-redux';



const Body = () => {
  
  // const navigate  = useNavigate();
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>,
        },
        {
            path:"/browse",
            element:<Browse />,
        },

    ]);
      
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
};

export default Body;
