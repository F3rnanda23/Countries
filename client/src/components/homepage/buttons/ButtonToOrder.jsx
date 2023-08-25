import {  useSelector, useDispatch } from 'react-redux';
import React, {  useEffect, useState } from 'react';
import { updateCountryOrder, updateCurrentOrderType, getAllCountries, updateCurrentFilterType, getAllTourism } from '../../../redux/actions';

 //const orden
const ALPHABETIC_ASC = 'ALPHABETIC_ASC';
const ALPHABETIC_DESC = 'ALPHABETIC_DESC';
const POPULATION_ASC = 'POPULATION_ASC';
const POPULATION_DESC = 'POPULATION_DESC';
const AFRICA = 'AFRICA';
const ASIA = 'ASIA';
const OCEANIA = 'OCEANIA';
const NORTH_AMERICA = 'NORTH AMERICA';
const SOUTH_AMERICA = 'SOUTH AMERICA';
const EUROPE = 'EUROPE';
const ALL = 'ALL';


const ButtonsToOrder = ()=>{

    const countryOrder = useSelector(state => state.country);
    const countriesFilter = useSelector(state => state.countriesFilter);
   const currentOrderType = useSelector(state => state.currentOrderType);
    const currentFilterType = useSelector(state => state.currentFilteredType);
    const tourismAll = useSelector(state => state.tourism);

    const dispatch = useDispatch();
//                                                                                
    const [selectedOrder, setSelectedOrder] = useState("");  // estado para el selector de ordenamiento
    const [selectedContinent, setselectedContinent] = useState("");
    const [selectedTourism, setSelectedTourism] = useState("");
    


    useEffect(() => {
        orderInitial();

    }, [selectedOrder]);


    const orderInitial = () => {
        console.log("asdf",selectedContinent);
        if (selectedOrder  == ALPHABETIC_ASC) {
           const paises=  onSearchAlfabeticAscend();
           return paises
            
        } else if (selectedOrder  === ALPHABETIC_DESC) {
            const paises = onSearchAlfabeticDescend();   //aca retorna OrderOfCountries y se le pas a variable paises
            return paises;

        } else if (selectedOrder  === POPULATION_ASC) {
            const paises= onSearchPopulatAscend();
            return paises;

        } else if (selectedOrder  === POPULATION_DESC) {
            const paises= onSearchPopulatDescend();
            return paises;
        }
    };
  

    const onSearchAlfabeticAscend = ()=>{
        const orderOfCountries = [...countryOrder]; //Esta nueva copia es independiente del estado original,

        orderOfCountries.sort((a, b) => a.name.localeCompare(b.name)); // el localecompare ordena alfabeticamente 2 objs (a.name y b.name) y sort va recorriendo el array
        dispatch(updateCountryOrder(orderOfCountries));// para ordenar alfabeticamnte
        dispatch(updateCurrentOrderType(ALPHABETIC_ASC));// mantener orden al desmontar
        return orderOfCountries;
    };

    const onSearchAlfabeticDescend = ()=>{
        const orderOfCountries = [...countryOrder];

        orderOfCountries.sort((a, b) => b.name.localeCompare(a.name));
        dispatch(updateCountryOrder(orderOfCountries));
        dispatch(updateCurrentOrderType(ALPHABETIC_DESC));
        return orderOfCountries;
    };

    const onSearchPopulatAscend = () => {
        const orderOfCountries = [...countryOrder];

        orderOfCountries.sort((a, b) => a.population - b.population);
        dispatch(updateCountryOrder(orderOfCountries));
        dispatch(updateCurrentOrderType(POPULATION_ASC));
        return orderOfCountries;
    };


    const onSearchPopulatDescend = () => {
        const orderOfCountries = [...countryOrder];

        orderOfCountries.sort((a, b) => b.population - a.population);
        dispatch(updateCountryOrder(orderOfCountries));
        dispatch(updateCurrentOrderType(POPULATION_DESC));
        return orderOfCountries;
    };

    const handleOrderChange = (event) => {
        setSelectedOrder(event.target.value);
    };


    

    const handleFilterChange =(event) =>{
        let filteredOfContinents = [];
        
        
        if (selectedOrder === "") { // si no seleccione ningun orden
            filteredOfContinents = [...countryOrder];
        } else {
            const orderCountries= orderInitial();   // aca llega return pais
            filteredOfContinents = [...orderCountries];
        };


        const selectedContinent = event.target.value.toUpperCase();
            setselectedContinent(selectedContinent);
            console.log(selectedContinent, 'aqui selectcontinent')

        
        if (selectedContinent === 'ALL') {
            dispatch(getAllCountries());
        } else {
            const filteredCountries = filteredOfContinents.filter(country =>
                country.continents.toUpperCase() === selectedContinent
            )
         
            dispatch(updateCountryOrder(filteredCountries));
            dispatch(updateCurrentFilterType(selectedContinent));

        };
       
    };


    const handleTourismChange = () =>{

    };


    return (
        <div>
           <div>
                <h3>Orden Alfabético: </h3>
                <select  id="orderAlphabetic" name="orderAlphabetic" value={selectedOrder} onChange={handleOrderChange}>
                    <option value={ALPHABETIC_ASC}>Ascendente</option>
                    <option value={ALPHABETIC_DESC}>Descendente</option>
                </select>
            </div>

            <div>
                <h3>Orden por cantidad de población: </h3>
                <select id="orderPopulation" name="orderPopulation" value={selectedOrder} onChange={handleOrderChange}>
                    <option value={POPULATION_ASC}>Ascendente</option>
                    <option value={POPULATION_DESC}>Descendente</option>
                </select>
            </div>
            <div>
                <h3>Filtrar por continente </h3>
                <select  value={currentFilterType}  onChange={handleFilterChange}>
                    <option value={ALL}>Todos los continentes</option>
                    <option value={AFRICA}>África</option>
                    <option value={ASIA}>Asia</option>
                    <option value={OCEANIA}>Oceanía</option>
                    <option value={NORTH_AMERICA}>América del Norte</option>
                    <option value={SOUTH_AMERICA}>América del Sur</option>
                    <option value={EUROPE}>Europa</option>
                </select>
            </div>

            <div>
                <h3>Filtrar por actividad turistica: </h3>   
                <select id="selectedTourism" name="selectedTourism" value={selectedTourism} onChange={handleTourismChange}>
                    {/* <option value={POPULATION_ASC}>Ascendente</option>
                    <option value={POPULATION_DESC}>Descendente</option> */}
                </select>
            </div>
        </div>
    )



};

export default ButtonsToOrder;

// import {  useSelector, useDispatch } from 'react-redux';
// import React, {  useEffect, useState } from 'react';
// import { updateCountryOrder, updateCurrentOrderType, getAllCountries, updateCurrentFilterType } from '../../../redux/actions';

//  //const orden
// const ALPHABETIC_ASC = 'ALPHABETIC_ASC';
// const ALPHABETIC_DESC = 'ALPHABETIC_DESC';
// const POPULATION_ASC = 'POPULATION_ASC';
// const POPULATION_DESC = 'POPULATION_DESC';
// const AFRICA = 'AFRICA';
// const ASIA = 'ASIA';
// const OCEANIA = 'OCEANIA';
// const NORTH_AMERICA = 'NORTH AMERICA';
// const SOUTH_AMERICA = 'SOUTH AMERICA';
// const EUROPE = 'EUROPE';
// const ALL = 'ALL';


// const ButtonsToOrder = ()=>{

//     const countryOrder = useSelector(state => state.country);
//     const countriesFilter = useSelector(state => state.countriesFilter);
//     const currentOrderType = useSelector(state => state.currentOrderType);
//     const currentFilterType = useSelector(state => state.currentFilteredType);

//     const dispatch = useDispatch();
// //                                                                                 valor por defecto ya que partía null
//     const [selectedOrder, setSelectedOrder] = useState("");  // estado para el selector de ordenamiento


//     useEffect(() => {
//         orderInitial();

//     }, [selectedOrder]);

//     const orderInitial = () => {
      
//         if (selectedOrder  == ALPHABETIC_ASC) {
//             onSearchAlfabeticAscend();
//         } else if (selectedOrder  === ALPHABETIC_DESC) {
//             const paises = onSearchAlfabeticDescend();   //aca retorna OrderOfCountries y se le pas a variable paises
//             return paises;
//         } else if (selectedOrder  === POPULATION_ASC) {
//             onSearchPopulatAscend();
//         } else if (selectedOrder  === POPULATION_DESC) {
//             onSearchPopulatDescend();
//         }
//     }
  

//     const onSearchAlfabeticAscend = ()=>{
//         const orderOfCountries = [...countryOrder]; //Esta nueva copia es independiente del estado original,

//         orderOfCountries.sort((a, b) => a.name.localeCompare(b.name)); // el localecompare ordena alfabeticamente 2 objs (a.name y b.name) y sort va recorriendo el array
//         dispatch(updateCountryOrder(orderOfCountries));// para ordenar alfabeticamnte
//         dispatch(updateCurrentOrderType(ALPHABETIC_ASC));// mantener orden al desmontar
//         return orderOfCountries;
//     };

//     const onSearchAlfabeticDescend = ()=>{
//         const orderOfCountries = [...countryOrder];

//         orderOfCountries.sort((a, b) => b.name.localeCompare(a.name));
//         dispatch(updateCountryOrder(orderOfCountries));
//         dispatch(updateCurrentOrderType(ALPHABETIC_DESC));
//         return orderOfCountries;
//     };

//     const onSearchPopulatAscend = () => {
//         const orderOfCountries = [...countryOrder];

//         orderOfCountries.sort((a, b) => a.population - b.population);
//         dispatch(updateCountryOrder(orderOfCountries));
//         dispatch(updateCurrentOrderType(POPULATION_ASC));
//         return orderOfCountries;
//     };


//     const onSearchPopulatDescend = () => {
//         const orderOfCountries = [...countryOrder];

//         orderOfCountries.sort((a, b) => b.population - a.population);
//         dispatch(updateCountryOrder(orderOfCountries));
//         dispatch(updateCurrentOrderType(POPULATION_DESC));
//         return orderOfCountries;
//     };

//     const handleOrderChange = (event) => {
//         setSelectedOrder(event.target.value);
//     };


    

//     const handleFilterChange =(event) =>{
//         let filteredOfContinents = [];
        
//         if (selectedOrder === "") { // si no seleccione ningun orden
//             filteredOfContinents = [...countryOrder];
//         } else {
//             const orderCountries= orderInitial();   // aca llega return pais
//             filteredOfContinents = [...orderCountries];
//         }

//         const selectedContinent = event.target.value.toUpperCase();
        
//         if (selectedContinent === 'ALL') {
//             dispatch(getAllCountries());
//         } else {
//             const filteredCountries = filteredOfContinents.filter(country =>
//                 country.continents.toUpperCase() === selectedContinent
//             )
         
//             dispatch(updateCountryOrder(filteredCountries));
//             dispatch(updateCurrentFilterType(selectedContinent));

//         };
       
//     };

//     return (
//         <div>
//            <div>
//                 <h3>Orden Alfabético: </h3>
//                 <select  id="orderAlphabetic" name="orderAlphabetic" value={selectedOrder} onChange={handleOrderChange}>
//                     <option value={ALPHABETIC_ASC}>Ascendente</option>
//                     <option value={ALPHABETIC_DESC}>Descendente</option>
//                 </select>
//             </div>

//             <div>
//                 <h3>Orden por cantidad de población: </h3>
//                 <select id="orderPopulation" name="orderPopulation" value={selectedOrder} onChange={handleOrderChange}>
//                     <option value={POPULATION_ASC}>Ascendente</option>
//                     <option value={POPULATION_DESC}>Descendente</option>
//                 </select>
//             </div>
//             <div>
//                 <h3>Filtrar por continente </h3>
//                 <select  value={currentFilterType}  onChange={handleFilterChange}>
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

// export default ButtonsToOrder;



//----------------------------22222222222222222222222222
