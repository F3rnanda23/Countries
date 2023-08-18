
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardPais from '../card/CardPais';
import { getAllCountries } from '../../../redux/actions';


const CardsPaises = () =>{

    const countries = useSelector(state => state.country);
    console.log(countries.length,'aqui1')
        
    const dispatch = useDispatch();

    useEffect(() => {
       
            dispatch(getAllCountries());
         
      }, [dispatch]);

      useEffect(() => {
        console.log(countries.length, 'Número de países cargados');
    }, [countries]);

    return(

        <div>

        {countries.map(country => (
          <CardPais key={country.id} country={country} />
        ))};

      </div>

    )

};

export default CardsPaises;