import React from "react";
import { Routes, Route  } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/homepage/home/Home";
import DetailPais from "./components/detail/DetailPais";




function App() {
 



  return (

    <div>


      <Routes>
        
        <Route path="/" element={< Login />} />
        <Route path="/home" element={< Home />} />
        <Route path="/countries/:idPais" element={<DetailPais />} />
       
      </Routes>
      
    </div>
  );
}

export default App
