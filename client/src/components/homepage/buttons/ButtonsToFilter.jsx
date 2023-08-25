// import {  useSelector, useDispatch } from 'react-redux';
// import React, {  useEffect, useState } from 'react';
// import { updateCountryFiltered, getAllCountries, updateCurrentFilterType } from '../../../redux/actions';


// //const continentes
// const AFRICA = 'AFRICA';
// const ASIA = 'ASIA';
// const OCEANIA = 'OCEANIA';
// const NORTH_AMERICA = 'NORTH AMERICA';
// const SOUTH_AMERICA = 'SOUTH AMERICA';
// const EUROPE = 'EUROPE';
// const ALL = 'ALL';

// const ButtonToFilter = () =>{
//     const continentsFilter = useSelector(state => state.country);
//     const currentFilterType = useSelector(state => state.currentFilteredType);

//     const dispatch = useDispatch();

    
//    const [selectedContinentRemains, setSelectedContinentRemains] = useState( currentFilterType || ALL) ; // Inicializar con el valor predeterminado

//     useEffect(() => {
//         setSelectedContinentRemains(currentFilterType);
//     }, [currentFilterType]);

    


//     const handleFilterChange =(event) =>{
//         const filteredOfContinents = [...continentsFilter];

//         const selectedContinent = event.target.value.toUpperCase();

        
//         if (selectedContinent === 'All') {
//             dispatch(getAllCountries());
//         } else {
//             const filteredCountries = filteredOfContinents.filter(country =>
//                 country.continents.toUpperCase() === selectedContinent
//             )
         
//             dispatch(updateCountryFiltered(filteredCountries));
//         };
       
        
//         dispatch(updateCurrentFilterType(selectedContinent))
       
//     };



//     return (
//         <div>
//             <div>
//             <h3>Filtrar por continente </h3>
//                 <select  value={selectedContinentRemains || ''}  onChange={handleFilterChange}>
//                     <option value={ALL}>Todos los continentes</option>
//                     <option value={AFRICA}>África</option>
//                     <option value={ASIA}>Asia</option>
//                     <option value={OCEANIA}>Oceanía</option>
//                     <option value={NORTH_AMERICA}>América del Norte</option>
//                     <option value={SOUTH_AMERICA}>América del Sur</option>
//                     <option value={EUROPE}>Europa</option>
//                 </select>
//             </div>

//             <div>
//                 <h3>Filtrar por actividad turistica: </h3>   
//                 <button >Ascendente</button> 
//                 <button >Descendente</button> 
//             </div>
            
        
//         </div>
//     )

// };

// export default  ButtonToFilter;


import {  useSelector, useDispatch } from 'react-redux';
import React, {  useEffect, useState } from 'react';
import { getAllCountries, updateCurrentFilterType } from '../../../redux/actions';


//const continentes
const AFRICA = 'AFRICA';
const ASIA = 'ASIA';
const OCEANIA = 'OCEANIA';
const NORTH_AMERICA = 'NORTH AMERICA';
const SOUTH_AMERICA = 'SOUTH AMERICA';
const EUROPE = 'EUROPE';
const ALL = 'ALL';

const ButtonToFilter = () =>{


  




    return (
        <div>

            
        
        </div>
    )

};

export default  ButtonToFilter;
