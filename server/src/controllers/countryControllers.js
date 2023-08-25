
const { Country, Tourism }= require('../db')
const { Op } = require('sequelize');


const getAllCountries= async ()=>{

     const allCountry = await Country.findAll({
        include: [{
            model: Tourism,
           
            attributes: ['id', 'nombre', 'dificultad', 'duracion', 'temporada']
        }]});
     return allCountry;
        

};

const getCountryById= async (id)=>{

    const countryById = await Country.findByPk(id, {
        include: [{
          model: Tourism,
          attributes: ['id', 'nombre', 'dificultad', 'duracion', 'temporada']
        }]
      });
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
    console.log(countryFound, 'aqui')

    return countryFound;
    
};





module.exports ={
    getCountryById,
    getAllCountries,
    getCountryByName
}

//NO OLVIDAR!!!!! .......Tiene que incluir los datos de las actividades turísticas asociadas a este país.