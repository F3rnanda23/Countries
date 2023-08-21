import { GET_ALL_COUNTRIES, GET_COUNTRY_DETAIL, CHANGE_PAGE, GET_COUNTRY_BY_NAME, GET_COUNTRY_BY_ID } from './action-types';
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

export const changePage = (pageNumber) => {
  return {
    type: CHANGE_PAGE,
    payload: pageNumber,
  };
};  

export const getCountryByName = (name) => {
  return async function(dispatch){
      const response = await axios( `http://localhost:3001/countries?name=${name}`)    
        return dispatch({type: GET_COUNTRY_BY_NAME, payload: response.data})
    }
};

export const getCountryById = (idPais) => {
  return async function(dispatch){
      const response = await axios( `http://localhost:3001/countries/${idPais}`)    
        return dispatch({type: GET_COUNTRY_BY_ID, payload: response.data})
    }
};
 
