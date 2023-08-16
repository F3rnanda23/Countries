
const { Tourism } = require('../db')


const getAllTourism= async ()=>{
    
    const allTourism= await Tourism.findAll();
    return allTourism;
    
    
   
};

const tourismCreate= async (id, nombre, dificultad,duracion, temporada, countryId )=>{
    const newActivity = await Tourism.create({
        id, 
        nombre, 
        dificultad,
        duracion,
        temporada
     })
     await newActivity.addCountry(countryId);

     return newActivity

}

module.exports= {
    getAllTourism,
    tourismCreate
}