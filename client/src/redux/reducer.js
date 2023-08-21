
import { GET_ALL_COUNTRIES, GET_COUNTRY_DETAIL, CHANGE_PAGE, GET_COUNTRY_BY_NAME, GET_COUNTRY_BY_ID } from '../redux/action-types'

const initialState = {
    country: [],
    countryDetail: {},
    currentPage: 1,
    countriesPerPage: 10,

    
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

        default:
            return {...state}
     }
};

export default reducer;
