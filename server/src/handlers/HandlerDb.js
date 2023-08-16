const { getCountries }= require('../controllers/dbControllers')
const { Country }= require('../db')

const getAllCountriesHandler = async (req,res)=>{
 
    try {
        const getAllCountries= await getCountries()
        
        const createdCountries = await Country.bulkCreate( 
            getAllCountries
        )
        
        res.status(200).json(createdCountries)
    } catch (error) {
        res.status(404).send(error.message)
    }
};

module.exports= {
    getAllCountriesHandler
}   

//console.log(allCountries.length)