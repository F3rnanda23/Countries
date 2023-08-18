import { GET_ALL_COUNTRIES, GET_COUNTRY_DETAIL } from '../redux/action-types'

const initialState = {
    country: [],
    countryDetail: {},
 };

const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                country: action.payload
            }
        case GET_COUNTRY_DETAIL:
            return {
                ...state,
                countryDetail: action.payload
            }   

        default:
            return {...state}
     }
};

export default reducer;