
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
        <div className={style.containerDetalle}>
          <div>
            <h2>Nombre: {countryDetail.name}</h2>
            <h2>ID: {countryDetail.id}</h2>
            <h2>Continente: {countryDetail.continents}</h2>
            <h2>Capital: {countryDetail.capital}</h2>
            <h2>Subregion: {countryDetail.subregion}</h2>
            <h2>Area: {countryDetail.area} km²</h2>
            <h2>Población: {countryDetail.population} personas</h2>
            <img src={countryDetail.flags} alt={countryDetail?.name}/>
          </div>

          <br/>
          <br/>

          {countryDetail.Tourisms &&
            countryDetail.Tourisms.map((activity) => (
              
              <div key={activity.id}>
                <p>name: {activity.nombre}</p>
                <p>difficulty: {activity.dificultad}</p>
                <p>duracion: {activity.duracion}</p>
                <p>season: {activity.temporada}</p>
              </div>
             
            ))}
 
            <div >
                    <button onClick={handleDetail} >
                        Volver a Home
                    </button> 
            </div>
      
        </div>
    );
    
}


export default DetailPais;