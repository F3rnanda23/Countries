import React, {  useEffect } from 'react';
import Modal from 'react-modal';
import { Routes, Route  } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/homepage/home/Home";
import DetailPais from "./components/detail/DetailPais";
import TourismForm from "./components/TourismForm/TourismForm";




function App() {
 
  useEffect(() => {
    Modal.setAppElement('#root'); // Aquí '#root' debe ser el ID del elemento raíz de tu aplicación
  }, []);


  return (

    <div>


      <Routes>
        
        <Route path="/" element={< Login />} />
        <Route path="/home" element={< Home />} />
        <Route path="/countries/:idPais" element={<DetailPais />} />
        <Route path="/activities" element={<TourismForm />} />
       
      </Routes>
      
    </div>
  );
}

export default App
