/* import { Link } from 'react-router-dom';

import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react'; */
import React from 'react';
import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';
import  style from './cardPais.module.css'



const CardPais = ({country}) => {
    return (
      <div className={style.containerAllCard} >
         <Link to={`/countries/${country.id}`} className={style.link}>
             <div className={style.containerCard}>
               <h2>{country.name}</h2>
               <img src={country.flags} alt={`${country.name} Flag`} />
               <p>Continent: {country.continents}</p>
            </div>
          </Link>
      </div>
        
     );
}

export default CardPais;
    


// <h2 className={styles.cardTitle}>{country.name}</h2>
// <img src={country.flags} alt={`${country.name} Flag`} className={styles.flagImage} />
// <p className={styles.cardText}>Continent: {country.continents}</p>
