//const Country = require('../models/CountryModel')
const { getCountryById }= require('../controllers/countryControllers')



const getCountryByIdhandler= async (req,res)=>{  //error
    try {
       
        const { id }= req.params; 

        //const countryById = await Country.findByPk(id);
       
        const countryById = await getCountryById(id);

        if(!countryById) throw Error('El país no existe');

        res.status(200).json(countryById)
    } catch (error) {
        res.status(404).send(error.message)
    }
 }



module.exports={
    getCountryByIdhandler
}