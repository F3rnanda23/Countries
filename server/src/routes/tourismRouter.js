const { Router }= require('express');

const tourismRouter = Router();

const { allTourismHandler, tourismCreateHandler }= require('../handlers/HandlerTourism')

tourismRouter.get('/', allTourismHandler);
tourismRouter.post('/', tourismCreateHandler);


module.exports=tourismRouter;


//POST | /activities
//GET | /activities
