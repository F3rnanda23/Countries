import { GET_ALL_COUNTRIES, GET_COUNTRY_DETAIL } from './action-types';
import axios from 'axios';


export const getAllCountries = () => {
    return async function(dispatch){
        const response = await axios('http://localhost:3001/countries')    
          return dispatch({type: GET_ALL_COUNTRIES, payload: response.data})
     }
};

export const getCountryDetail = (id) => {
    return async function(dispatch){
        const response = await axios( `http://localhost:3001/countries/${id}`)    
          return dispatch({type: GET_COUNTRY_DETAIL, payload: response.data})
     }
};