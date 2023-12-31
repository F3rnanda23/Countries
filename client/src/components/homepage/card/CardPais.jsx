
import React from 'react';
import { Link } from 'react-router-dom';
import  style from './cardPais.module.css'



const CardPais = ({country}) => {
    return (
      <div className={style.containerCard} >
         <Link to={`/countries/${country.id}`} className={style.link}>
             <div className={style.Card}>
               <h2>{country.name}</h2>
               <img src={country.flags} alt={`${country.name} Flag`} />
               <p>Continent: {country.continents}</p>
            </div>
          </Link>
      </div>
        
     );
}

export default CardPais;
    

