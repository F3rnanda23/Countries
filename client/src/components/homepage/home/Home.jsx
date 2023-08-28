import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardsPaises from "../cards/CardsPaises";
import Navbar from "../navbar/Nabvar";
import Pagination from "../pagination/Patigation";
import ButtonsToOrder from "../buttons/ButtonToOrderFilter";
import  style from './home.module.css';





const Home = () =>{

    const [isLoggedIn, setIsLoggedIn] = useState(true);  //false, estás indicando que el usuario ya no está autenticado.
    const navigate= useNavigate()
    
    const handleLogout= () => {
        setIsLoggedIn(false); //false, lo que indica que el usuario ha cerrado sesión.
        navigate('/');//redirigir al usuario a la ruta
    };

    const handleActivities =()=>{
        navigate('/activities');//redirigir al usuario a la ruta
    };

    const handleResetFilters = () => {
        window.location.reload(); 
    };

    return (
        <div>
          
            <div className={style.containerUpHome}>
                <div className={style.h2}>
                <h2 style={{ fontFamily: 'Comic Sans MS' }}>COUNTRIES</h2>
                </div>

                <div className={style.buttons}>
                    {isLoggedIn && (
                        <button onClick={handleLogout} className={style.buttonsLogout}>Logout</button>
                    )}
                    <br />

                    <button onClick={handleResetFilters} className={style.buttonsReset}>
                        Reset Filters
                    </button>
                </div>

                <div className={style.containerNav}>
                    <Navbar />
                </div>

                <div className={style.crearActividad}>
                    <button onClick={handleActivities} >
                        Crear actividad turística
                    </button> 
                </div>

                <div className={style.botonesSelectores}>
                    <ButtonsToOrder />
                </div>
            </div>


            <div className={style.containerCardsHome}>
                <CardsPaises />
            </div>

            <div>
                <Pagination />
            </div>

           

        </div>
    )
}

export default Home;