const getDogFromApi = require('../controllers/getDogFromApi')
const getDogFromDb = require('../controllers/getDogFromDb')

const getDogs= async() => {
    let dogsApi= await getDogFromApi(); // se obtiene el controlador getDogFromApi
    let dogsDb= await getDogFromDb(); // se obtiene el controlador getDogFromDb
    
    let dogs= [...dogsApi, ...dogsDb]; //copia de ambos controladores dentro de la variable dogs
    return dogs;
}

module.exports = getDogs; 