import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardsPaises from "../cards/CardsPaises";
import Navbar from "../navbar/Nabvar";
import Pagination from "../pagination/Patigation";
import ButtonsToOrder from "../buttons/ButtonToOrderFilter";





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
             <h2> COUNTRIES </h2>

             

            <div>
                {isLoggedIn && (
                    <button onClick={handleLogout}>Logout</button>
                )};
                

                <button onClick={handleResetFilters} style={{ cursor: 'pointer' }}>
                    Reset Filters
                </button>
            </div>

            <div>
                <Navbar />
            </div>

            <div>
                <button onClick={handleActivities} style={{ cursor: 'pointer' }}>
                    Crear actividad turística
                </button> 
            </div>

            <div>
                <ButtonsToOrder />
            </div>


            <div>
                <CardsPaises />
            </div>

            <div>
                <Pagination />
            </div>

           

        </div>
    )
}

export default Home;