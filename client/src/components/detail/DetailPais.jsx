
import { useParams } from "react-router-dom";
import { useEffect,  } from "react";
import {  useDispatch, useSelector } from 'react-redux';
import { getCountryById } from '../../redux/actions';
//import  style from './detailPais.module.css';

const DetailPais = ()=>{
    const {idPais} = useParams();

    const countryDetail = useSelector(state => state.countryDetail);

    const dispatch = useDispatch();


    useEffect(() => {
       
        dispatch(getCountryById(idPais));
     
    }, [dispatch]);

console.log(countryDetail, 'aqui23')

     return(
        <div >
          <h2>Nombre: {countryDetail.name}</h2>
          <h2>ID: {countryDetail.id}</h2>
          <h2>Continente: {countryDetail.continents}</h2>
          <h2>Capital: {countryDetail.capital}</h2>
          <h2>Subregion: {countryDetail.subregion}</h2>
          <h2>Area: {countryDetail.area} km²</h2>
          <h2>Población: {countryDetail.population} personas</h2>
          <img src={countryDetail.flags} alt={countryDetail?.name}/>
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
            
        </div>
    );
}


export default DetailPais;