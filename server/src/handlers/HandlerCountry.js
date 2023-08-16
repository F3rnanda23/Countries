//const Country = require('../models/CountryModel')
const { getCountryById, getAllCountries, getCountryByName }= require('../controllers/countryControllers')


const allCountriesHandler= async (req,res)=>{
    try {
        const { name } = req.query;
        
        let pais;

        if (name) {
            const countryFoundByName = await getCountryByName(name);
    
            if (!countryFoundByName) {
                pais = `${name} no se encontró`;
                
                res.status(404).send(pais)
                
            } else {
                pais = countryFoundByName;
                res.status(200).send(pais)
            };

        } else {
            const allPaises = await getAllCountries();
            pais = allPaises;
            return res.status(200).json(pais);
        }

    } catch (error) {
        res.status(404).send(error.message)
    }
};




const getCountryByIdhandler= async (req,res)=>{  //error
    
    try {
        const { idPais }= req.params; 
        console.log(idPais)
        const countryId= await getCountryById(idPais);

        if(!countryId) throw Error('El país no existe');

        res.status(200).json(countryId)
    } catch (error) {
        res.status(404).send(error.message)
    }
   
    //QUEDA PENDIENTE ESTOOO Tiene que incluir los datos de las actividades turísticas asociadas a este país.
    
 };



//  const allCoontruies =  async(req, res)=>{
//     const { name } = req.query;
//     try {
//       if (name) {
//         //si nombre existe se le pide al controller que busque en db y en api
//         const traerPorNombre = await getCountriesByName(name);
//         if (traerPorNombre) {
//           return res.json(traerPorNombre);
//         } else {
//           return res.send(`${name} no fue encontrado);
//         }
//       } else {
//         // sino dame todo
//         const allPaises = await getCountries();
//         return res.json(allPaises);
//       }
//     } catch (error) {
//       //manejo si hay un error
//       return res.status(400).send({ error: error.message });
//     }
// }
// ese es el handler del que te trae todos los paises y y la busqueda por name



module.exports={
    getCountryByIdhandler,
    allCountriesHandler,

}

