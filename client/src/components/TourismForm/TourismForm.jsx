import {useState} from "react";
import { useDispatch } from 'react-redux';
import { createTourismCountry } from '../../redux/actions';
import Validation from "./validation";
import TourismModal from "./TourismModal";
import style from './tourismForm.module.css'

const TourismForm = () =>{

    const [modal, setModal] = useState(false);

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

   

    const handlerChange= (event) =>{
        setTourismData({
            ...tourismData,
            [event.target.name] : event.target.value
        });

        setErrors(Validation({
            ...tourismData,
            [event.target.name] : event.target.value
        }))
    };



    const handleSubmit = (event) =>{
        event.preventDefault();

        const hasErrors = Object.values(errors).some(error => error !== '');

        if (!hasErrors) {
          dispatch(createTourismCountry(tourismData));
          setModal(true);// Si se establece en true, el modal se mostrará;
          setTourismData({ // Limpia los inputs
            nombre: '',
            dificultad: '',
            duracion: '',
            temporada: '',
            countryId: []
          });
    
        } else {
          console.log('No se puede enviar la solicitud debido a errores de validación');
        }
    
    };





    return(
        <form onSubmit={handleSubmit}>
            <h2>Crear actividad turística</h2>

            <label htmlFor="nombre" className={style.labelEmail}>Nombre: </label>
            <input type="nombre" name="nombre" value={tourismData.nombre} onChange={handlerChange} />
            {errors.nombre && <p>{errors.nombre }</p>}

            <br/>
            <br/>
            
            <label htmlFor="dificultad" className={style.labelpassword}>Dificultad: </label>
            <input type="dificultad"  name="dificultad" value={tourismData.dificultad} onChange={handlerChange} />
            {errors.dificultad && <p>{errors.dificultad }</p>}

            <br/>
            <br/>
            
            <label htmlFor="duracion" className={style.labelpassword}>Duración: </label>
            <input type="duracion"  name="duracion" value={tourismData.duracion} onChange={handlerChange} />
            {errors.duracion && <p>{errors.duracion }</p>}

            <br/>
            <br/>
            
            <label htmlFor="temporada" className={style.labelpassword}>Temporada: </label>
            <input type="temporada"  name="temporada" value={tourismData.temporada} onChange={handlerChange} />
            {errors.temporada && <p>{errors.temporada }</p>}

            <br/>
            <br/>
            
            <label htmlFor="countryId" className={style.labelpassword}>Country: </label>
            <input type="countryId"  name="countryId" value={tourismData.countryId} onChange={handlerChange} />
            {errors.country && <p>{errors.country }</p>}
            

            <br/>
            <br/>
            <button className={style.btn}>Crear actividad</button>

        {/* //componente modal */}
            <TourismModal isOpen={modal} onClose={() => setModal(false)} />
        </form>
    );

};

export default TourismForm;

