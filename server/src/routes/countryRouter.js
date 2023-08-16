const { Router }= require('express');
const countryRouter = Router();

const {  getCountryByIdhandler, AllCountriesHandler } =require('../handlers/HandlerCountry');


countryRouter.get('/', AllCountriesHandler);
 countryRouter.get('/:idPais',getCountryByIdhandler);


module.exports=countryRouter;


//GET | /countries
//GET | /countries/:idPais
//GET | /countries/name?="..."
