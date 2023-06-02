const getDogs = require('../controllers/dogs');
const getDogByName = require('../controllers/getDogByName');

const dogsHandler = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      let result = await getDogByName(name);
      if (result.length === 0) {
        return res.status(404).send("No dog with that name has been found.");
      }
      res.status(200).json(result);
    } else {
      let dogs = await getDogs();
      if (dogs.length === 0) {
        return res.status(404).send("No dogs found.");
      }
      res.status(200).json(dogs);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = dogsHandler;


