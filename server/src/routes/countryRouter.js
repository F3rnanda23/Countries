const { Router }= require('express');
const countryRouter = Router();

const {  getCountryByIdhandler, allCountriesHandler } =require('../handlers/HandlerCountry');


countryRouter.get('/', allCountriesHandler);
countryRouter.get('/:idPais',getCountryByIdhandler);



module.exports=countryRouter;


//GET | /countries
//GET | /countries/:idPais
//GET | /countries/name?="..."
