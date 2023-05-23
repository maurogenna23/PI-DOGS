const getDogs = require('../controllers/dogs')
const getDogByName = require ('../controllers/getDogByName')

const dogsHandler = async (req, res)=> {
    const {name} = req.query;
    try {
        if(!name){
            let result= await getDogs();
            return res.status(200).json(result)
        }
        else{
            let result= await getDogByName(name);
            return res.status(200).json(result)
        }         
    } catch (error) {
        res.status(404).json({error: error.message})
    }
};

module.exports = dogsHandler
