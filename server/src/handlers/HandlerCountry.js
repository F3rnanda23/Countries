//const Country = require('../models/CountryModel')
const { getCountryById, getAllCountries }= require('../controllers/countryControllers')


const AllCountriesHandler= async (req,res)=>{
    try {
        const countries = await getAllCountries();
    
        res.status(200).json(countries)
    } catch (error) {
        res.status(404).send(error.message)
        console.log
    }
};




const getCountryByIdhandler= async (req,res)=>{  //error
    
    try {
        const { idPais }= req.params; 
        console.log(idPais)
        const countryId= await getCountryById(idPais);

        if(!countryId) throw Error('El país no existe');

        res.status(200).json(countryId)
    } catch (error) {
        res.status(404).send(error.message)
    }
    
 };



module.exports={
    getCountryByIdhandler,
    AllCountriesHandler
}

