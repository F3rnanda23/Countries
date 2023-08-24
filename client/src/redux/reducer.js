
import { GET_ALL_COUNTRIES, GET_COUNTRY_DETAIL, CHANGE_PAGE, GET_COUNTRY_BY_NAME, GET_COUNTRY_BY_ID, UPDATE_SORTED_COUNTRIES, UPDATE_CURRENT_ORDER_TYPE, MODAL_TOURISM,
    SET_TOURISM_ERROR, RESET_TOURISM_ERROR, UPDATE_FILTERED_COUNTRIES, UPDATE_CURRENT_FILTER_TYPE } from '../redux/action-types'

const initialState = {
    //paises
    country: [],
    countriesFilter: [],
    countryDetail: {},
    //paginado
    currentPage: 1,
    countriesPerPage: 10,
    //botones orden y filtrado
    currentOrderType: null,
    currentFilteredType: null,
    //estado modal
    modalState: false,
    
    // estado de  turismo repetido
    tourismError: false,
    
 };

const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                country: action.payload,
                countriesFilter: action.payload
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
                countriesFilter: action.payload,
            };        
                    
        case GET_COUNTRY_BY_ID:
            return {
                ...state,
                countryDetail: action.payload,
            };

        case UPDATE_SORTED_COUNTRIES:  //actualizar paises ordenados
            return {
                ...state,
                countriesFilter: action.payload,
            };

        case UPDATE_CURRENT_ORDER_TYPE:  //actualizar paises ordenados
            return {
                ...state,
                currentOrderType: action.payload, // Actualiza el tipo de orden
            };
            

        case MODAL_TOURISM:  //actualizar paises ordenados
       
            return {
                ...state,
                modalState: action.payload,
        };   
        
        case SET_TOURISM_ERROR:
            return {
                ...state,
                tourismError: true,
        };

        case RESET_TOURISM_ERROR:
            return {
                ...state,
                tourismError: false,
        };

        case UPDATE_FILTERED_COUNTRIES:
            return {
                ...state,
                countriesFilter: action.payload,
        };

        case UPDATE_CURRENT_FILTER_TYPE:  //actualizar paises ordenados
            return {
                ...state,
                currentFilteredType: action.payload, // Actualiza el tipo de orden
            };

     
        default:
            return {...state}
     }
};

export default reducer;

