//const Country = require('../models/CountryModel')
const { getCountryById, getAllCountries, getCountryByName }= require('../controllers/countryControllers')


const allCountriesHandler= async (req,res)=>{
    try {
        const { name } = req.query;
        
        let pais;

        if (name) {
            const countryFoundByName = await getCountryByName(name);
    
            if (!countryFoundByName) {
                pais = `${name} no se encontró`;
                
                res.status(404).send(pais)
                
            } else {
                pais = countryFoundByName;
                res.status(200).send(pais)
            };

        } else {
            const allPaises = await getAllCountries();
            pais = allPaises;
            return res.status(200).json(pais);
        }

    } catch (error) {
        res.status(404).send(error.message)
    }
};




const getCountryByIdhandler= async (req,res)=>{  //error
    
    try {
        const { idPais }= req.params; 
       
        const countryId= await getCountryById(idPais);

        if(!countryId) throw Error('El país no existe');

        res.status(200).json(countryId)
    } catch (error) {
        res.status(404).send(error.message)
    }
   
    //QUEDA PENDIENTE ESTOOO Tiene que incluir los datos de las actividades turísticas asociadas a este país.
    
 };

module.exports={
    getCountryByIdhandler,
    allCountriesHandler,

}

