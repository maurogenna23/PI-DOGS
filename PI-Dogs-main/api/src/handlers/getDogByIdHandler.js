const getDogById = require('../controllers/getDogById')

const getDogByIdHandler= async (req, res)=> {
    const {id} = req.params
    
    try {
        let result= await getDogById(id);

        if(result.error) throw new Error(result.error);

        res.status(200).json(result)    
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

module.exports = getDogByIdHandler;