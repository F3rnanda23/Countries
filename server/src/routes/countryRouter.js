const { Router }= require('express');
const countryRouter = Router();

const {  getCountryByIdhandler } =require('../handlers/HandlerCountry');



countryRouter.get('/algo/:id',getCountryByIdhandler);


module.exports=countryRouter;


//GET | /countries
//GET | /countries/:idPais
//GET | /countries/name?="..."
