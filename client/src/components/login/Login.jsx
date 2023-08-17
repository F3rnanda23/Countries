import { useState, useEffect } from "react";
import validation from "./validation";
import {Link, useNavigate } from 'react-router-dom';
import  style from './login.module.css';

const Login = ()=>{  // OJO AQUI CON EL LOGIN 

    const navigate = useNavigate();
    

    const [errors, setErrors] = useState({ // estado errores
        nombre: '',
        email: '',
        password:''
        
    })

    const [userData, setUserData] = useState({   //estado
        nombre: '',
        email: '',
        password:''
    });

    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);



    const handlerChange= (event) =>{
        setUserData({
            ...userData,
            [event.target.name] : event.target.value
        }),


        setErrors(validation({
            ...userData,
            [event.target.name] : event.target.value
        }))

    };

    useEffect(() => {
        const hasErrors = Object.values(errors).some(error => error !== '') || Object.values(userData).some(value => value === '');
        setIsSubmitDisabled(hasErrors);
    }, [errors, userData]);

    const handleSubmit = (event) =>{
         event.preventDefault();
          
        

        if (!isSubmitDisabled) {
            navigate("/home");
        }
            
    };   

   

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="nombre" >Nombre: </label>
            <input type="nombre" name="nombre" id="nombre" value={userData.nombre} onChange={handlerChange} />
            {errors.nombre && <p>{errors.nombre }</p>}

            <br/>
            <br/>
            
            <label htmlFor="email" >Email: </label>
            <input type="email" name="email" id="email" value={userData.email} onChange={handlerChange} />
            {errors.email && <p>{errors.email }</p>}

            <br/>
            <br/>
            
            <label htmlFor="password" >Password: </label>
            <input type="password"  name="password" id="password" value={userData.password} onChange={handlerChange} />
            {errors.password && <p>{errors.password }</p>}

            <br/>
            <br/>

            <button className={style.btn} disabled={isSubmitDisabled} onClick={handleSubmit}> 
              Ir a home
            </button>

        
        </form>
    )

};

export default Login;
