
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardPais from '../card/CardPais';
import { getAllCountries } from '../../../redux/actions';



const CardsPaises = () =>{

    const countries = useSelector(state => state.country);
    const currentPage = useSelector((state) => state.currentPage);// página actual que se esta mostrando
    const countriesPerPage = useSelector((state) => state.countriesPerPage); // cuantos paises se deben mostrar por pagina
    const currentOrderType = useSelector(state => state.currentOrderType);

        
    const dispatch = useDispatch();

    useEffect(() => {
      
      if(!currentOrderType ) {
        dispatch(getAllCountries());
      }
      }, [dispatch]);
                          
    const startIndex = (currentPage - 1) * countriesPerPage;// 0*50 = 0 ( pais indice 0)  // 1*50=50
    const endIndex = startIndex + countriesPerPage;   //0 + 50 // 50 + 50
    const countriesToDisplay = countries.slice(startIndex, endIndex); //desde posicion  0 al 49 //  desde 50 al 99

//Normalmente, las páginas se numeran desde 1 en la interfaz de usuario, pero en muchos casos, los índices de las listas en programación comienzan desde 0.
//La variable currentPage representa la página actual que se está mostrando, y countriesPerPage indica cuántos países se deben mostrar en cada página.    
//endIndex: dónde terminar en la lista de países para la página. Toma el punto de inicio calculado y le suma cuántos países puedes mostrar en cada página.
// countriesToDisplay: Esto crea una nueva lista de países que se deben mostrar en la página actual.  toma solo los países desde el índice de inicio hasta el 
//índice de fin (sin incluir el país en el índice de fin).

    return(

        <div>

        {countriesToDisplay .map(country => (
          <CardPais key={country.id} country={country} />
        ))};

      </div>
      //countriesToDisplay es una sublista de países que se mostrarán en la página actual.
      //Luego, usamos un bucle .map para recorrer countriesToDisplay y renderizar cada país usando el componente CardPais.

    )

};

export default CardsPaises;