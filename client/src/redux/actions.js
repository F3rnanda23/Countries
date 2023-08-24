import { GET_ALL_COUNTRIES, GET_COUNTRY_DETAIL, CHANGE_PAGE, GET_COUNTRY_BY_NAME, GET_COUNTRY_BY_ID, UPDATE_SORTED_COUNTRIES,
   UPDATE_CURRENT_ORDER_TYPE, MODAL_TOURISM, SET_TOURISM_ERROR , RESET_TOURISM_ERROR} from './action-types';
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

export const updateCountryOrder = (orderOfCountries ) => {
  return {
    type: UPDATE_SORTED_COUNTRIES,
    payload: orderOfCountries,
  };
};

export const updateCurrentOrderType = (orderType ) => {
  return {
    type: UPDATE_CURRENT_ORDER_TYPE,
    payload: orderType,
  };
};
 

export const createTourismCountry = (tourismData) => {
  return async function(dispatch) {
    try {
      const response = await axios.post(`http://localhost:3001/activities`, tourismData);
      dispatch({type: MODAL_TOURISM, payload: true})
      dispatch({type: RESET_TOURISM_ERROR});
      
    } catch (error) {
     
      console.log("Error en la solicitud:", error);
      dispatch({type: MODAL_TOURISM, payload: false})
      dispatch({type: SET_TOURISM_ERROR});

    }
  }
};
