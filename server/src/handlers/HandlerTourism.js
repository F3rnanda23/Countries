 const { getAllTourism, tourismCreate }= require('../controllers/tourismControllers');


const allTourismHandler= async (req, res)=>{
    
    try {
    const allTourism = await getAllTourism();

        res.status(200).json(allTourism)
    } catch (error) {
        res.status(404).send(error.message)
    }

};

const tourismCreateHandler=async (req, res)=>{
 
    try {
        const { id, nombre, dificultad, duracion, temporada, countryId } = req.body;
        const tourismCreated= await tourismCreate(
          id, 
          nombre, 
          dificultad,
          duracion,
          temporada,
          countryId)  // aqui le agregamos un pais al turismo

        res.status(200).json(tourismCreated)
    } catch (error) {
        res.status(404).send(error.message)
    }

}


 module.exports= {
    allTourismHandler,
    tourismCreateHandler

 };


//  "id" : "1",
//  "nombre" : "trekking",
//   "dificultad":"4",  
//   "duracion": "90",
//   "temporada": "verano"