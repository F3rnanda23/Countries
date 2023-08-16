
const { Country }= require('../db')


const getAllCountries= async ()=>{

     const allCountry = await Country.findAll();
     return allCountry;
        

};

const getCountryById= async (id)=>{

    const countryById = await Country.findByPk(id);
    return countryById;

    
};





module.exports ={
    getCountryById,
    getAllCountries
}

//NO OLVIDAR!!!!! .......Tiene que incluir los datos de las actividades turísticas asociadas a este país.