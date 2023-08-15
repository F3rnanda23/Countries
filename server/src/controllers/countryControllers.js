const axios = require('axios');

const getCountries = async ()=> {
    const allCountries = await axios.get('http://localhost:5000/countries');
    const resultado= allCountries.data;
    return resultado
}

const getCountryById= (id)=>{  //error
    const paises= getCountries()
    const countryFound= paises.find(pais => pais.cca3 === id);

    if(!countryFound) return {error:'No existe un país con ese ID' };
    return countryFound;
    
};

module.exports ={
    getCountries,
    getCountryById
}

