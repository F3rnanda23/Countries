import React from "react";
import { Routes, Route  } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/homepage/home/Home";




function App() {
 



  return (

    <div>

      {/* {
          location.pathname !== '/' ?  <Navbar /> : null
      } */}

      <Routes>
        
        <Route path="/" element={< Login />} />
        <Route path="/home" element={< Home />} />
       
      </Routes>
      
    </div>
  );
}

export default App
