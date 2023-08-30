

 import {useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { createTourismCountry, getAllCountries } from '../../redux/actions';
import {Link  } from 'react-router-dom';
import Validation from "./validation";
import TourismModal from "./TourismModal";
import style from './tourismForm.module.css'
import { MODAL_TOURISM } from '../../redux/action-types';

const TourismForm = () =>{

   // const modalOfState = useSelector(state => state.modalState);
    const tourismError = useSelector(state => state.tourismError);
    const countries = useSelector(state => state.country);
    
   
    
    const dispatch = useDispatch();

    

    const [tourismData, setTourismData] = useState({
        nombre: '',
        dificultad:'',
        duracion: '',
        temporada:'',
        countryId: []
    });
   
    const [errors, setErrors] = useState({
        nombre: '',
        dificultad:'',
        duracion: '',
        temporada:'',
        country: []
    });

    

    const [hasInputError, setHasInputError] = useState(false); //  si es true es por que hay error y sirve para renderizar el mensaje de error
    const [showMessage, setShowMessage] = useState(false);//mensaje de correcto


    useEffect(() => {
        if (tourismError) {
          //  dispatch({ type: MODAL_TOURISM, payload: false }); // Cerrar el modal si hay error
          setHasInputError(true);
        }
        dispatch(getAllCountries())   //para actualizar el estado global y que se renderize en selector
    }, [ tourismData, dispatch, tourismError]);

   

    const handlerChange= (event) =>{
        
        
        setTourismData({
            ...tourismData,  //actualiza este estado con lo valores ingresados
            [event.target.name] : event.target.value
        });

        setErrors(Validation({
            ...tourismData,
            [event.target.name] : event.target.value
        }));

        if (tourismError) {
            setHasInputError(true);
        } else {
            setHasInputError(false);
        }

    };



    const handleSubmit = (event) =>{
        event.preventDefault();

        const hasErrors = Object.values(errors).some(error => error !== '');

        if (!hasErrors) {
          dispatch(createTourismCountry(tourismData));// despacha la accion con los datos del turismo

      
          setTourismData({ // Limpia los inputs
            nombre: '',
            dificultad: '',
            duracion: '',
            temporada: '',
            countryId: []
          });

          setHasInputError(false); //en falso, ya que el formulario se ha enviado y no hay errores
          setShowMessage(true);
    
        } else {
          console.log('No se puede enviar la solicitud debido a errores de validación');
        }
    
    };




    return(
      
        <form className={style.containerForm} onSubmit={handleSubmit}>
            <div>
                 <h2 >Crear actividad turística</h2>

            <div className={style.containerInputs}>
                <label htmlFor="nombre" className={style.labels}>Nombre: </label>
                <input type="nombre" name="nombre" id="nombre" className={style.Inputs} value={tourismData.nombre} onChange={handlerChange} />
                {errors.nombre && <p>{errors.nombre }</p>}

                <br/>
                <br/>
                
                <label htmlFor="dificultad" className={style.labels}>Dificultad: </label>
                <input type="dificultad"  name="dificultad" id="dificultad"  className={style.Inputs} value={tourismData.dificultad} onChange={handlerChange} />
                {errors.dificultad && <p>{errors.dificultad }</p>}

                <br/>
                <br/>
                
                <label htmlFor="duracion" className={style.labels}>Duración: </label>
                <input type="duracion"  name="duracion"  id="duracion"   className={style.Inputs} value={tourismData.duracion} onChange={handlerChange} />
                {errors.duracion && <p>{errors.duracion }</p>}

                <br/>
                <br/>
                
                <label htmlFor="temporada" className={style.labels}>Temporada: </label>
                <input type="temporada"  name="temporada" id="temporada" className={style.Inputs} value={tourismData.temporada} onChange={handlerChange} />
                {errors.temporada && <p>{errors.temporada }</p>}

                <br/>
                <br/>
             <div>
                    <h3>Country: </h3>   
                    <select className={style.InputCountry} name='countryId' onChange={handlerChange}>
                        {countries &&
                            countries
                                .sort((a, b) => a.name.localeCompare(b.name)) 
                                .map((country) => (
                                    <option key={country.id} value={country.id}>
                                        {country.name}
                                    </option>
                                ))}
                    </select>

                    <br/>
                    <br/>

                    {!tourismError && showMessage && ( <span className={style.Message}>La actividad turística ha sido creada exitosamente!</span>)}
                    

                    {tourismError && hasInputError && tourismData.nombre === '' ? <p className={style.parrafo} >¡Esta actividad turística ya está registrada!</p> : null}
                        
                
                    <br/>
                    <br/>
            </div>
        
           
            <div>
                <button className={style.btn}>Crear actividad</button>

                <Link to="/home" className={style.link}>
                    <button className={style.btn}>Volver a Home</button>
                </Link>
            </div>

            </div>

            
          
           

        {/* //componente modal */}
            {/* <TourismModal isOpen={modalOfState} onClose={() => dispatch({type: MODAL_TOURISM, payload: false}) } /> */}

            </div>
           
        </form>
    );

};

 export default TourismForm;























