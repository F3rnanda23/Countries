import {  useSelector, useDispatch } from 'react-redux';
import React, {  useEffect } from 'react';
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

   

    useEffect(() => {
        console.log(currentOrderType);
        if (currentOrderType == ALPHABETIC_ASC) {
            onSearchAlfabeticAscend();
        } else if (currentOrderType === ALPHABETIC_DESC) {
            onSearchAlfabeticDescend();
        } else if (currentOrderType === POPULATION_ASC) {
            onSearchPopulatAscend();
        } else if (currentOrderType === POPULATION_DESC) {
            onSearchPopulatDescend();
        }
    }, []);


  

    const onSearchAlfabeticAscend = ()=>{
        const orderOfCountries = [...countryOrder]; //Esta nueva copia es independiente del estado original,

        orderOfCountries.sort((a, b) => a.name.localeCompare(b.name)); // el localecompare ordena alfabeticamente 2 objs (a.name y b.name) y sort va recorriendo el array
        dispatch(updateCountryOrder(orderOfCountries));// para ordenar alfabeticamnte
        dispatch(updateCurrentOrderType(ALPHABETIC_ASC));// mantener orden al desmontar
        return orderOfCountries;
    }

    const onSearchAlfabeticDescend = ()=>{
        const orderOfCountries = [...countryOrder];

        orderOfCountries.sort((a, b) => b.name.localeCompare(a.name));
        dispatch(updateCountryOrder(orderOfCountries));
        dispatch(updateCurrentOrderType(ALPHABETIC_DESC));
    }

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


    

    return (
        <div>
            <div>
                <h3>Orden Alfabético: </h3>   
                <button onClick={onSearchAlfabeticAscend}>Ascendente</button> 
                <button onClick={onSearchAlfabeticDescend}>Descendente</button> 
            </div>

            <div>
                <h3>Orden por cantidad de población: </h3>   
                <button onClick={onSearchPopulatAscend}>Ascendente</button> 
                <button onClick={onSearchPopulatDescend}>Descendente</button> 
            </div>
        
        </div>
    )



};

export default ButtonsToOrder;



// import {  useSelector, useDispatch } from 'react-redux';
// import React, {  useEffect } from 'react';
// import { updateCountryOrder } from '../../../redux/actions';

// const ButtonsToOrder = ()=>{

//     const countryOrder = useSelector(state => state.country);
//     const currentOrderType = useSelector(state => state.currentOrderType);

//     const dispatch = useDispatch();

  

//     useEffect(() => {
//         if (currentOrderType === 'ascend') {
//             onSearchAlfabeticAscend()
//             onSearchPopulatAscend()
//         } else if (currentOrderType === 'descend') {
//             onSearchAlfabeticDescend()
//             onSearchPopulatDescend()
//         }
        
//     }, [currentOrderType]);



//     const onSearchAlfabeticAscend = ()=>{
//         //setCurrentAlphabeticOrder('ascend');

//         const orderOfCountries = [...countryOrder]; //Esta nueva copia es independiente del estado original,
//         orderOfCountries.sort((a, b) => a.name.localeCompare(b.name)); // el localecompare ordena alfabeticamente 2 objs (a.name y b.name) y sort va recorriendo el array
//         dispatch(updateCountryOrder(orderOfCountries));
//     }

//     const onSearchAlfabeticDescend = ()=>{
//         //setCurrentAlphabeticOrder('descend');

//         const orderOfCountries = [...countryOrder];
//         orderOfCountries.sort((a, b) => b.name.localeCompare(a.name));
//         dispatch(updateCountryOrder(orderOfCountries));
//     }

//     const onSearchPopulatAscend = () => {
//       // setCurrentPopulationOrder('ascend');

//         const orderOfCountries = [...countryOrder];
//         orderOfCountries.sort((a, b) => a.population - b.population);
//         dispatch(updateCountryOrder(orderOfCountries));
//     };


//     const onSearchPopulatDescend = () => {
//         //setCurrentPopulationOrder('descend');

//         const orderOfCountries = [...countryOrder];
//         orderOfCountries.sort((a, b) => b.population - a.population);
//         dispatch(updateCountryOrder(orderOfCountries));
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



