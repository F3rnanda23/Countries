
import { GET_ALL_COUNTRIES, GET_COUNTRY_DETAIL, CHANGE_PAGE, GET_COUNTRY_BY_NAME, GET_COUNTRY_BY_ID, UPDATE_SORTED_COUNTRIES, UPDATE_CURRENT_ORDER_TYPE, CREATE_TOURISM_COUNTRY } from '../redux/action-types'

const initialState = {
    //paises
    country: [],
    countryDetail: {},
    //paginado
    currentPage: 1,
    countriesPerPage: 10,
    //botones orden y filtrado
    currentOrderType: null,



    
 };

const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                country: action.payload
            };
        case GET_COUNTRY_DETAIL:
            return {
                ...state,
                countryDetail: action.payload
            } ;
        case CHANGE_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };  
        case GET_COUNTRY_BY_NAME:
            return {
                ...state,
                country: action.payload,
            };        
                    
        case GET_COUNTRY_BY_ID:
            return {
                ...state,
                countryDetail: action.payload,
            };

        case UPDATE_SORTED_COUNTRIES:  //actualizar paises ordenados
            return {
                ...state,
                country: action.payload,
            };

        case UPDATE_CURRENT_ORDER_TYPE:  //actualizar paises ordenados
            return {
                ...state,
                currentOrderType: action.payload, // Actualiza el tipo de orden
            };

        case CREATE_TOURISM_COUNTRY:  //actualizar paises ordenados
        return {
            ...state,
            country: action.payload, // Actualiza el tipo de orden
        };
        default:
            return {...state}
     }
};

export default reducer;
