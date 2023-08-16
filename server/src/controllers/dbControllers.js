const axios = require('axios');


const getCountries = async ()=> {
    const allCountries = await axios.get('http://localhost:5000/countries');
    
    const resultado= allCountries.data;
    
    const countriesFormat = resultado.map((country) => {
        return {
            id: country.cca3,
            name: country.name.common,
            flags: country.flags.png,
            continents: Array.isArray(country.continents) && country.continents.length > 0 ? country.continents[0] : "No se encontró continente",
            capital:  Array.isArray(country.capital) && country.capital.length > 0 ? country.capital[0] : "No se encontró capital",
            subregion: typeof country.subregion === 'string' && country.subregion.length > 0 ? country.subregion : "No se encontró subregion",
            area: country.area,
            population: country.population
        }
    });
    
    return countriesFormat
};

module.exports ={
    getCountries,
}