const getDogFromDb = require("../controllers/getDogFromDb")

const dogDbHandler = async (req, res) => {
    
    try {
        let result= await getDogFromDb()
        res.status(200).json(result)
    } catch (error) {
        res.status(404).send(error)
    }
    }
    
    module.exports= dogDbHandler;