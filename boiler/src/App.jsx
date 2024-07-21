import React, { useState } from "react";

import "./App.css";

import { RouterProvider } from "react-router-dom";
import Routes from "./routes";

function App() {

  const Router = Routes()

  return (
    
    <RouterProvider router={Router}  />
  
   
  );
}

export default App;
