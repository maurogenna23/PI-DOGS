const getTemperament = require ('../controllers/getTemperaments')

const getTemperamentHandler = async (req, res)=>{
    try {
        let result= await getTemperament()
        res.status(200).json(result)
    } catch (error) {
        res.status(404).send(error)
    }
    }
    
    module.exports= getTemperamentHandler;