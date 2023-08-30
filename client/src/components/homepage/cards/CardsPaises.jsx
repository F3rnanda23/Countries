
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardPais from '../card/CardPais';
import { getAllCountries } from '../../../redux/actions';
import  style from './cardsPaises.module.css';



const CardsPaises = () =>{

    const countries = useSelector(state => state.country);
    const countriesFilter = useSelector(state => state.countriesFilter);
    const currentPage = useSelector((state) => state.currentPage);// página actual que se esta mostrando
    const countriesPerPage = useSelector((state) => state.countriesPerPage); // cuantos paises se deben mostrar por pagina
    const currentOrderType = useSelector(state => state.currentOrderType);
    const currentFilteredType = useSelector(state => state.currentFilteredType);

        
    const dispatch = useDispatch();

    useEffect(() => {
      
      if(!currentOrderType && !currentFilteredType) {
        dispatch(getAllCountries());
      }
      }, [dispatch]);
                          
    const startIndex = (currentPage - 1) * countriesPerPage;// 0*10 = 0 ( pais indice 0)  // 1*10=10   //n cards en que comienza
    const endIndex = startIndex + countriesPerPage;   //0 + 10 // 10 + 10                              // n de cards en que termina

    const countriesToDisplay = countriesFilter.slice(startIndex, endIndex); //desde posicion  0 al 9 //  desde 10 al 19

// countriesToDisplay: Esto crea una nueva lista de países que se deben mostrar en la página actual.  toma solo los países desde el índice de inicio hasta el 
//índice de fin (sin incluir el país en el índice de fin).

    return(

        <div className={style.containerAllCard}>

        {countriesToDisplay .map(country => (
          <CardPais key={country.id} country={country} />
        ))}

      </div>
  

    )

};

export default CardsPaises;
