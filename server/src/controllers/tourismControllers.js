
const { Tourism } = require('../db')


const getAllTourism= async ()=>{
    
    const allTourism= await Tourism.findAll();
    return allTourism;
    
    
   
};

const tourismCreate= async ( nombre, dificultad,duracion, temporada, countryId )=>{
    const newActivity = await Tourism.create({
    
        nombre, 
        dificultad,
        duracion,
        temporada
     })
     await newActivity.addCountry(countryId);

     return newActivity

};

const getTourism= async ( nombre, dificultad,duracion, temporada )=>{
    return await Tourism.findOne ({
        where: {
            nombre: nombre,
            dificultad: dificultad,
            duracion: duracion,
            temporada: temporada
        }
        
     })
};


module.exports= {
    getAllTourism,
    tourismCreate,
    getTourism
}