const { Router }= require('express');
const countryRouter = Router();

const { getAllCountriesHandler, getCountryByIdhandler } =require('../handlers/HandlerCountry');




countryRouter.get('/', getAllCountriesHandler);

countryRouter.get('/algo/:id',getCountryByIdhandler);


module.exports=countryRouter;


//GET | /countries
//GET | /countries/:idPais
//GET | /countries/name?="..."
