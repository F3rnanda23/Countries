const { Router }= require('express');
const dbRouter = Router();

const { getAllCountriesHandler } =require('../handlers/HandlerDb');


dbRouter.post('/', getAllCountriesHandler);


module.exports=dbRouter;

