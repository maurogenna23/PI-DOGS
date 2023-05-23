const createNewDog = require ("../controllers/createNewDog")

const createNewDogHandler= async (req, res)=> {
    let { weight, height, name, life_span, image, temperament}= req.body;
    try {
        await createNewDog( weight, height, name, life_span, image, temperament)
        res.status(201).send("New dog successfully created")
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

module.exports = createNewDogHandler