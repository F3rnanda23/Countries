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
    const countries = useSelector(state => state.country);
    const countriesOrder = useSelector(state => state.currentOrderType); //estado para mantener el orden 
    const currentFilterType = useSelector(state => state.currentFilteredType);// estado para mantener el filtrado
    const tourism = useSelector(state => state.tourism);// estado para los tourism

    const dispatch = useDispatch();

    const [selectedOrder, setSelectedOrder] = useState(countriesOrder); //orden y filtrado
    const [selectedContinent, setSelectedContinent] = useState(currentFilterType);  // continentes
    const [selectedTourism, setSelectedTourism] = useState('');  //turismo

    useEffect(() => {
        if (countriesOrder != ""){
            onClickOrder({target:{value:countriesOrder}});// aqui se le pasa el target value ya que en onClickOrder recibe un evento
        }
        if (currentFilterType != ""){
            onClickFilter({target:{value:currentFilterType}});
        }
       dispatch( getAllTourism())
    }, [dispatch]);


    const onClickOrder = (event) => {
        if (currentFilterType == "") {  // SI NO HAY  FILTRO Y QUIERO ORDENAR
            orderSwitch(event.target.value);
        } else { //SI HAY UN FILTRO Y QUIERO ORDENAR  
            const countriesFilter = filter(currentFilterType,countries);//filter(el continente que se filtro , paises)
            filterOrderSwitch(event.target.value,countriesFilter); //  
        }                       //value orden , lo paises filtrados
    }

    const filterOrderSwitch = (value,countriesFilter) => {
        let orderOfCountries = [];
        switch(value){
            case ALPHABETIC_ASC:
                setSelectedOrder(ALPHABETIC_ASC);
                orderOfCountries = onSearchAlfabeticAscend(countriesFilter);
                dispatch(updateCurrentOrderType(ALPHABETIC_ASC));// mantener orden al desmontar
                break;
            case ALPHABETIC_DESC:
                setSelectedOrder(ALPHABETIC_DESC);
                orderOfCountries = onSearchAlfabeticDescend(countriesFilter); 
                dispatch(updateCurrentOrderType(ALPHABETIC_DESC));
                break;
            case POPULATION_ASC:
                setSelectedOrder(POPULATION_ASC);
                orderOfCountries =onSearchPopulatAscend(countriesFilter); 
                dispatch(updateCurrentOrderType(POPULATION_ASC));
                break;
            case POPULATION_DESC:
                setSelectedOrder(POPULATION_DESC);
                orderOfCountries =onSearchPopulatDescend(countriesFilter); 
                dispatch(updateCurrentOrderType(POPULATION_DESC));
                break;
        }
        dispatch(updateCountryOrder(orderOfCountries));  // se guarda en country filter para motrar los paises con filtro y orden


    }

    const orderSwitch = (value) => {
        let orderOfCountries = [];
        const countriesLocal = [...countries];
        switch(value){
            case ALPHABETIC_ASC:
                setSelectedOrder(ALPHABETIC_ASC);
                orderOfCountries = onSearchAlfabeticAscend(countriesLocal);
                dispatch(updateCurrentOrderType(ALPHABETIC_ASC));// guarda el tipo de orden
                break;
            case ALPHABETIC_DESC:
                setSelectedOrder(ALPHABETIC_DESC);
                orderOfCountries = onSearchAlfabeticDescend(countriesLocal); 
                dispatch(updateCurrentOrderType(ALPHABETIC_DESC));
                break;
            case POPULATION_ASC:
                setSelectedOrder(POPULATION_ASC);
                orderOfCountries = onSearchPopulatAscend(countriesLocal); 
                dispatch(updateCurrentOrderType(POPULATION_ASC));
                break;
            case POPULATION_DESC:
                setSelectedOrder(POPULATION_DESC);
                orderOfCountries = onSearchPopulatDescend(countriesLocal); 
                dispatch(updateCurrentOrderType(POPULATION_DESC));
                break;
        }

        dispatch(updateCountryOrder(orderOfCountries)); // updateCountryOrder guarda en el estado countriesFilter para que en cards se renderice lo ordenado

    }; 


    const filter = (continent,countries)=> {
        return countries.filter(country =>
            country.continents.toUpperCase() === continent
        );
    }


    const onClickFilter = (event) =>{
        setSelectedContinent(event.target.value);

        if (countriesOrder == "") {       //NO HAY UN ORDER Y SE QUIERE 
            if (event.target.value === 'ALL') {//FILTRAR por todos los contientes
                dispatch(getAllCountries());
                dispatch(updateCurrentFilterType(event.target.value));
            } else { // FILTRAR por un contientes          
                const filteredCountries = filter(event.target.value,countries); //continente que se quiere filtrar, el estado
                dispatch(updateCountryOrder(filteredCountries));
                dispatch(updateCurrentFilterType(event.target.value));
            };
        } else { // HAY UN ORDER Y SE QUIERE HACER UN FILTER  los continentes son todos
            let orderOfCountries = [];
            if (event.target.value === 'ALL') {
                switch(countriesOrder){
                    case ALPHABETIC_ASC:
                        orderOfCountries = onSearchAlfabeticAscend(countries);
                        break;
                    case ALPHABETIC_DESC:
                        orderOfCountries = onSearchAlfabeticDescend(countries); 
                        break;
                    case POPULATION_ASC:
                        orderOfCountries =onSearchPopulatAscend(countries); 
                        break;
                    case POPULATION_DESC:
                        orderOfCountries =onSearchPopulatDescend(countries); 
                        break;
                }
                dispatch(updateCountryOrder(orderOfCountries));
                dispatch(updateCurrentFilterType(event.target.value));

            } else {// HAY UN ORDER Y SE QUIERE HACER UN FILTER  y hay un continente seleccionado
                switch(countriesOrder){
                    case ALPHABETIC_ASC:
                        orderOfCountries = onSearchAlfabeticAscend(countries);
                        break;
                    case ALPHABETIC_DESC:
                        orderOfCountries = onSearchAlfabeticDescend(countries); 
                        break;
                    case POPULATION_ASC:
                        orderOfCountries =onSearchPopulatAscend(countries); 
                        break;
                    case POPULATION_DESC:
                        orderOfCountries =onSearchPopulatDescend(countries);               //aca s ehaceell orden
                        break;
                }                                   //continente , orden
                const filteredCountries = filter(event.target.value,orderOfCountries);    // aca se haceel filter
                dispatch(updateCountryOrder(filteredCountries));  // se hace un dispatch a countriesFilter(estado) con lso paises ordenados y filtrados
                dispatch(updateCurrentFilterType(event.target.value));
            };
            

        }
        
    }

    const onSearchAlfabeticDescend = (orderOfCountries)=>{ 
        orderOfCountries.sort((a, b) => b.name.localeCompare(a.name));
        return orderOfCountries;
    };

    const onSearchAlfabeticAscend = (orderOfCountries)=>{
        orderOfCountries.sort((a, b) => a.name.localeCompare(b.name)); // el localecompare ordena alfabeticamente 2 objs (a.name y b.name) y sort va recorriendo el array
        return orderOfCountries;
    };

    const onSearchPopulatAscend = (orderOfCountries) => {
        orderOfCountries.sort((a, b) => a.population - b.population);
        return orderOfCountries;
    };


    const onSearchPopulatDescend = (orderOfCountries) => {
        orderOfCountries.sort((a, b) => b.population - a.population);
        return orderOfCountries;
    };

    
    const onClickTourism =(event)=>{
        const tourismShown= event.target.value;
        setSelectedTourism(tourismShown)

        if( tourismShown ) {
            const countriesFilterTourims = countries.filter(country => {
                const turismos = country.Tourisms;   
                const turismo = turismos.filter(turismo => {
                    return turismo.id === tourismShown
                });
                return turismo.length > 0  // si es cero el pais lo salta y no lo renderiza
            });
            dispatch(updateCountryOrder(countriesFilterTourims));
   
        }
       
    };
    
    return (
        <div>
           <div>
                <h3>Orden Alfabético: </h3>
                <select  id="orderAlphabetic" name="orderAlphabetic" value={selectedOrder} onChange={onClickOrder}>
                    <option value={ALPHABETIC_ASC}>Ascendente</option>
                    <option value={ALPHABETIC_DESC}>Descendente</option>
                </select>
            </div>

            <div>
                <h3>Orden por cantidad de población: </h3>
                <select id="orderPopulation" name="orderPopulation" value={selectedOrder} onChange={onClickOrder}>
                    <option value={POPULATION_ASC}>Ascendente</option>
                    <option value={POPULATION_DESC}>Descendente</option>
                </select>
            </div>
            <div>
                <h3>Filtrar por continente </h3>
                <select  onChange={onClickFilter} value={selectedContinent}>
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
                <select  value={selectedTourism} onChange={onClickTourism}>
                    {tourism && tourism.map((activity) =>( <option key ={activity.id} value={activity.id} > 
                    {activity.nombre} 
                    </option>
                    ))}
                
                </select>
            </div>
        </div>
    )


};

export default ButtonsToOrder;
/*const countryOrder = useSelector(state => state.country);
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

*/