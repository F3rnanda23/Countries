import {useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { createTourismCountry } from '../../redux/actions';
import Validation from "./validation";
import TourismModal from "./TourismModal";
import style from './tourismForm.module.css'
import { MODAL_TOURISM } from '../../redux/action-types';

const TourismForm = () =>{

    const modalOfState = useSelector(state => state.modalState);
    const tourismError = useSelector(state => state.tourismError);
    
   
    
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

    const [hasInputChanges, setHasInputChanges] = useState(false); 


    useEffect(() => {
        if (tourismError) {
            dispatch({ type: MODAL_TOURISM, payload: false }); // Cerrar el modal si hay error
            setHasInputChanges(true);
        }
    }, [ tourismData, dispatch, tourismError]);

   

    const handlerChange= (event) =>{

        setTourismData({
            ...tourismData,
            [event.target.name] : event.target.value
        });

        setErrors(Validation({
            ...tourismData,
            [event.target.name] : event.target.value
        }));

        if (tourismError) {
            setHasInputChanges(false);
        } else {
            setHasInputChanges(true);
        }

    };



    const handleSubmit = (event) =>{
        event.preventDefault();

        const hasErrors = Object.values(errors).some(error => error !== '');

        if (!hasErrors) {
          dispatch(createTourismCountry(tourismData));

      
          setTourismData({ // Limpia los inputs
            nombre: '',
            dificultad: '',
            duracion: '',
            temporada: '',
            countryId: []
          });

          setHasInputChanges(false);

    
        } else {
          console.log('No se puede enviar la solicitud debido a errores de validación');
        }
    
    };



    return(
        <form onSubmit={handleSubmit}>
            <h2>Crear actividad turística</h2>

            <label htmlFor="nombre" className={style.labelEmail}>Nombre: </label>
            <input type="nombre" name="nombre" id="nombre" value={tourismData.nombre} onChange={handlerChange} />
            {errors.nombre && <p>{errors.nombre }</p>}

            <br/>
            <br/>
            
            <label htmlFor="dificultad" className={style.labelpassword}>Dificultad: </label>
            <input type="dificultad"  name="dificultad" id="dificultad"  value={tourismData.dificultad} onChange={handlerChange} />
            {errors.dificultad && <p>{errors.dificultad }</p>}

            <br/>
            <br/>
            
            <label htmlFor="duracion" className={style.labelpassword}>Duración: </label>
            <input type="duracion"  name="duracion"  id="duracion"  value={tourismData.duracion} onChange={handlerChange} />
            {errors.duracion && <p>{errors.duracion }</p>}

            <br/>
            <br/>
            
            <label htmlFor="temporada" className={style.labelpassword}>Temporada: </label>
            <input type="temporada"  name="temporada" id="temporada"  value={tourismData.temporada} onChange={handlerChange} />
            {errors.temporada && <p>{errors.temporada }</p>}

            <br/>
            <br/>
            
            <label htmlFor="countryId" className={style.labelpassword}>Country: </label>
            <input type="countryId"  name="countryId"  id="countryId" value={tourismData.countryId} onChange={handlerChange} />
            {errors.country && <p>{errors.country }</p>}
            

             <br/>
             <br/>

             {tourismError && hasInputChanges && tourismData.nombre === '' ? <p>¡Esta actividad turística ya está registrada!</p> : null}
                
           
            <br/>
            <br/>

            <button className={style.btn}>Crear actividad</button>

        {/* //componente modal */}
            <TourismModal isOpen={modalOfState} onClose={() => dispatch({type: MODAL_TOURISM, payload: false}) } />
        </form>
    );

};

 export default TourismForm;
