
const { Country }= require('../db')
const { Op } = require('sequelize');


const getAllCountries= async ()=>{

     const allCountry = await Country.findAll();
     return allCountry;
        

};

const getCountryById= async (id)=>{

    const countryById = await Country.findByPk(id);
    return countryById;

    
};

const getCountryByName= async (name)=> {
    
    const countryFound = await Country.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%` //[Op.iLike] en lugar de [Op.like] para la búsqueda insensible a mayúsculas y minúsculas.
            }
        }
    });
    if (!countryFound) {
        return { error: 'No existe país con ese nombre' };
    }
    
    return countryFound;
};





module.exports ={
    getCountryById,
    getAllCountries,
    getCountryByName
}

//NO OLVIDAR!!!!! .......Tiene que incluir los datos de las actividades turísticas asociadas a este país.