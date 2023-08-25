 const { getAllTourism, tourismCreate, getTourism }= require('../controllers/tourismControllers');


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
        const {  nombre, dificultad, duracion, temporada, countryId } = req.body;
        const getTourismNotRepeated= await getTourism(
          nombre, 
          dificultad,
          duracion,
          temporada
        );
       
        if (!getTourismNotRepeated){
            
            const  tourismCreated =  tourismCreate( nombre, dificultad, duracion, temporada, countryId )
            res.status(200).json(tourismCreated)
        }
        else {
            res.status(404).json({error:"Este turismo ya está creado"})
        }
        

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



// const { getAllTourism, tourismCreate, getTourism }= require('../controllers/tourismControllers');


// const allTourismHandler= async (req, res)=>{
    
//     try {
//     const allTourism = await getAllTourism();

//         res.status(200).json(allTourism)
//     } catch (error) {
//         res.status(404).send(error.message)
//     }

// };

// const tourismCreateHandler=async (req, res)=>{
 
//     try {
//         const {  nombre, dificultad, duracion, temporada, countryId } = req.body;
//         const getTourismNotRepeated= await getTourism(
//           nombre, 
//           dificultad,
//           duracion,
//           temporada
//         );
       
//         if (!getTourismNotRepeated){
            
//             const  tourismCreated =  tourismCreate( nombre, dificultad, duracion, temporada, countryId )
//             res.status(200).json(tourismCreated)
//         }
//         else {
//             res.status(404).json({error:"Este turismo ya está creado"})
//         }
        

//     } catch (error) {
//         res.status(404).send(error.message)
//     }

// }


//  module.exports= {
//     allTourismHandler,
//     tourismCreateHandler

//  };