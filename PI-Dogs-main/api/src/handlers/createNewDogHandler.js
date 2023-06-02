const createNewDog = require ("../controllers/createNewDog")
const { Dog } = require("../db");


const createNewDogHandler = async (req, res) => {
    try {
      const { weightMax, weightMin, heightMax, heightMin, name, life_span, image, temperament } = req.body;
  
      const existingDog = await Dog.findOne({ where: { name: name } });
  
      if (existingDog !== null) {
        console.log("Pase por aca");
        return res.status(400).send("This dog already exists");
      }
  
      await createNewDog(weightMax, weightMin, heightMax, heightMin, name, life_span, image, temperament);
      res.status(201).send("New dog successfully created");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = createNewDogHandler;
  