
import { useParams, useNavigate } from "react-router-dom";
import { useEffect,  } from "react";
import {  useDispatch, useSelector } from 'react-redux';
import { getCountryById } from '../../redux/actions';
import  style from './detailPaises.module.css';

const DetailPais = ()=>{
    const {idPais} = useParams();

    const countryDetail = useSelector(state => state.countryDetail);

    const dispatch = useDispatch();
    const navigate= useNavigate()


    useEffect(() => {
       
        dispatch(getCountryById(idPais));
     
    }, [dispatch]);



    const handleDetail =()=>{
      navigate('/home');
    };

  console.log(countryDetail,'aqui turismo')

 
     return(
        <div className={style.containerAll}>
          <div className={style.containerDetalle}>

           
                <div className={style.containerText}>

                   <h2>Detalle del País</h2> 
                   
                    <h3>Nombre: {countryDetail.name}</h3>
                    <h3>ID: {countryDetail.id}</h3>
                    <h3>Continente: {countryDetail.continents}</h3>
                    <h3>Capital: {countryDetail.capital}</h3>
                    <h3>Subregion: {countryDetail.subregion}</h3>
                    <h3>Area: {countryDetail.area} km²</h3>
                    <h3>Población: {countryDetail.population} personas</h3>
                    <img src={countryDetail.flags} alt={countryDetail?.name}/>
                </div>

                <br/>
                <br/>

                <h3 className={style.containerDetalleH3}>Actividades turísticas del país</h3>

                <br/>
                <br/>

                {countryDetail.Tourisms &&
                  countryDetail.Tourisms.map((activity) => (
                    
                    <div className={style.containerCountry} key={activity.id}>
                      <p> Nombre de la actividad: {activity.nombre}</p>
                      <p> Grado de dificultad: nivel {activity.dificultad}</p>
                      <p> Duración: {activity.duracion} min </p>
                      <p> Estación de año: {activity.temporada}</p>
                    </div>
                  
                  ))}

            
  
                <div className={style.contenedorButton}>
                    <button className={style.button} onClick={handleDetail} >
                        Volver a Home
                    </button> 
                </div>
          </div>
      
        </div>
    );
    
}


export default DetailPais;





