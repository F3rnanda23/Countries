import {  useSelector, useDispatch } from 'react-redux';
import React, {  useEffect, useState } from 'react';
import { updateCountryOrder, updateCurrentOrderType } from '../../../redux/actions';

 //const orden
    const ALPHABETIC_ASC = 'ALPHABETIC_ASC';
    const ALPHABETIC_DESC = 'ALPHABETIC_DESC';
    const POPULATION_ASC = 'POPULATION_ASC';
    const POPULATION_DESC = 'POPULATION_DESC';


const ButtonsToOrder = ()=>{

    const countryOrder = useSelector(state => state.country);
    const currentOrderType = useSelector(state => state.currentOrderType);

    const dispatch = useDispatch();
//                                                                                 valor por defecto ya que partía null
    const [selectedOrder, setSelectedOrder] = useState(currentOrderType ||  ALPHABETIC_ASC);  // estado para el selector de ordenamiento

    useEffect(() => {
        setSelectedOrder(currentOrderType);
    }, [currentOrderType]);

    
    useEffect(() => {
    
        if (selectedOrder  == ALPHABETIC_ASC) {
            onSearchAlfabeticAscend();
        } else if (selectedOrder  === ALPHABETIC_DESC) {
            onSearchAlfabeticDescend();
        } else if (selectedOrder  === POPULATION_ASC) {
            onSearchPopulatAscend();
        } else if (selectedOrder  === POPULATION_DESC) {
            onSearchPopulatDescend();
        }
    }, [selectedOrder]);


  

    const onSearchAlfabeticAscend = ()=>{
        const orderOfCountries = [...countryOrder]; //Esta nueva copia es independiente del estado original,

        orderOfCountries.sort((a, b) => a.name.localeCompare(b.name)); // el localecompare ordena alfabeticamente 2 objs (a.name y b.name) y sort va recorriendo el array
        dispatch(updateCountryOrder(orderOfCountries));// para ordenar alfabeticamnte
        dispatch(updateCurrentOrderType(ALPHABETIC_ASC));// mantener orden al desmontar
      //  return orderOfCountries;
    };

    const onSearchAlfabeticDescend = ()=>{
        const orderOfCountries = [...countryOrder];

        orderOfCountries.sort((a, b) => b.name.localeCompare(a.name));
        dispatch(updateCountryOrder(orderOfCountries));
        dispatch(updateCurrentOrderType(ALPHABETIC_DESC));
    };

    const onSearchPopulatAscend = () => {
        const orderOfCountries = [...countryOrder];

        orderOfCountries.sort((a, b) => a.population - b.population);
        dispatch(updateCountryOrder(orderOfCountries));
        dispatch(updateCurrentOrderType(POPULATION_ASC));
    };


    const onSearchPopulatDescend = () => {
        const orderOfCountries = [...countryOrder];

        orderOfCountries.sort((a, b) => b.population - a.population);
        dispatch(updateCountryOrder(orderOfCountries));
        dispatch(updateCurrentOrderType(POPULATION_DESC));
    };

    const handleOrderChange = (event) => {
        setSelectedOrder(event.target.value);
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
        
        </div>
    )



};

export default ButtonsToOrder;


// import {  useSelector, useDispatch } from 'react-redux';
// import React, {  useEffect } from 'react';
// import { updateCountryOrder, updateCurrentOrderType } from '../../../redux/actions';

//  //const orden
//     const ALPHABETIC_ASC = 'ALPHABETIC_ASC';
//     const ALPHABETIC_DESC = 'ALPHABETIC_DESC';
//     const POPULATION_ASC = 'POPULATION_ASC';
//     const POPULATION_DESC = 'POPULATION_DESC';


// const ButtonsToOrder = ()=>{

//     const countryOrder = useSelector(state => state.country);
//     const currentOrderType = useSelector(state => state.currentOrderType);

//     const dispatch = useDispatch();

   

//     useEffect(() => {
    
//         if (currentOrderType == ALPHABETIC_ASC) {
//             onSearchAlfabeticAscend();
//         } else if (currentOrderType === ALPHABETIC_DESC) {
//             onSearchAlfabeticDescend();
//         } else if (currentOrderType === POPULATION_ASC) {
//             onSearchPopulatAscend();
//         } else if (currentOrderType === POPULATION_DESC) {
//             onSearchPopulatDescend();
//         }
//     }, []);


  

//     const onSearchAlfabeticAscend = ()=>{
//         const orderOfCountries = [...countryOrder]; //Esta nueva copia es independiente del estado original,

//         orderOfCountries.sort((a, b) => a.name.localeCompare(b.name)); // el localecompare ordena alfabeticamente 2 objs (a.name y b.name) y sort va recorriendo el array
//         dispatch(updateCountryOrder(orderOfCountries));// para ordenar alfabeticamnte
//         dispatch(updateCurrentOrderType(ALPHABETIC_ASC));// mantener orden al desmontar
//       //  return orderOfCountries;
//     };

//     const onSearchAlfabeticDescend = ()=>{
//         const orderOfCountries = [...countryOrder];

//         orderOfCountries.sort((a, b) => b.name.localeCompare(a.name));
//         dispatch(updateCountryOrder(orderOfCountries));
//         dispatch(updateCurrentOrderType(ALPHABETIC_DESC));
//     };

//     const onSearchPopulatAscend = () => {
//         const orderOfCountries = [...countryOrder];

//         orderOfCountries.sort((a, b) => a.population - b.population);
//         dispatch(updateCountryOrder(orderOfCountries));
//         dispatch(updateCurrentOrderType(POPULATION_ASC));
//     };


//     const onSearchPopulatDescend = () => {
//         const orderOfCountries = [...countryOrder];

//         orderOfCountries.sort((a, b) => b.population - a.population);
//         dispatch(updateCountryOrder(orderOfCountries));
//         dispatch(updateCurrentOrderType(POPULATION_DESC));
//     };


    

//     return (
//         <div>
//             <div>
//                 <h3>Orden Alfabético: </h3>   
//                 <button onClick={onSearchAlfabeticAscend}>Ascendente</button> 
//                 <button onClick={onSearchAlfabeticDescend}>Descendente</button> 
//             </div>

//             <div>
//                 <h3>Orden por cantidad de población: </h3>   
//                 <button onClick={onSearchPopulatAscend}>Ascendente</button> 
//                 <button onClick={onSearchPopulatDescend}>Descendente</button> 
//             </div>
        
//         </div>
//     )



// };

// export default ButtonsToOrder;