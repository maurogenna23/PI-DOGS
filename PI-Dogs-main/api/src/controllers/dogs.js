const getDogFromApi = require('../controllers/getDogFromApi')
const getDogFromDb = require('../controllers/getDogFromDb')

const getDogs= async() => {
    let dogsApi= await getDogFromApi();
    let dogsDb= await getDogFromDb();
    
    let dogs= [...dogsApi, ...dogsDb];
    return dogs;
}

module.exports = getDogs; 