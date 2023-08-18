/* import { Link } from 'react-router-dom';

import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react'; */
import React from 'react';
//import { connect } from 'react-redux';
import  style from './cardPais.module.css'



const CardPais = ({country}) => {
    return (
        <div className={style.container}> 
                   
           <h2>{country.name}</h2>
           <h2>{country.flags}</h2>
           <h2>{country.continents}</h2>
           
        </div>
     );
}

export default CardPais;
    


 
