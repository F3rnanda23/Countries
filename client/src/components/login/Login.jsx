import { useState, useEffect } from "react";
import validation from "./validation";
import { useNavigate } from 'react-router-dom';
import  style from './login.module.css';

const Login = ()=>{  

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

    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);//true deshabilitar boton



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
        const hasErrors = Object.values(errors).some(error => error !== '') || Object.values(userData).some(value => value === '');// some si algun elemento del array cumple con la condicion
        setIsSubmitDisabled(hasErrors);
    }, [errors, userData]); 



    const handleSubmit = (event, ) =>{
         event.preventDefault();
          
        
        if (!isSubmitDisabled) {
            navigate("/home");
        }   
    
    };   

  
    return(
        <div className={style.login}>
            <div className={style.formContainer}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nombre" className={style.textoEstilizado}>Nombre: </label>
                    <input type="nombre" name="nombre" id="nombre" value={userData.nombre} onChange={handlerChange} className={`${style.nameLabel} ${style.inputsForm}`}/>
                    {errors.nombre && <p>{errors.nombre }</p>}

                    <br/>
                    <br/>
                    
                    <label htmlFor="email" className={style.textoEstilizado}>Email: </label>
                    <input type="email" name="email" id="email" value={userData.email} onChange={handlerChange} className={`${style.emailLabel} ${style.inputsForm}`}/>
                    {errors.email && <p>{errors.email }</p>}

                    <br/>
                    <br/>
                    
                    <label htmlFor="password"className={style.textoEstilizado} >Password: </label>
                    <input type="password"  name="password" id="password" value={userData.password} onChange={handlerChange} className={style.inputsForm}/>
                    {errors.password && <p>{errors.password }</p>}

                    <br/>
                    <br/>

            
                
                    <button className={`${style.btn} ${isSubmitDisabled ? style.disabledBtn : ''}`}   disabled={isSubmitDisabled} onClick={handleSubmit}> 
                    Ir a home
                    </button>
                </form>

        </div>
            
        </div>
        
        
    )

};

export default Login;

