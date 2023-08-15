


const getCountryById= (id)=>{  //error
    const paises= getCountries()
    const countryFound= paises.find(pais => pais.cca3 === id);

    if(!countryFound) return {error:'No existe un país con ese ID' };
    return countryFound;
    
};

module.exports ={
    getCountryById
}

