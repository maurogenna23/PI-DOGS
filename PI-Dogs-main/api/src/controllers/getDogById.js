const axios = require("axios");
const { Dog, Temperament } = require("../db");

const getDogById = async (id) => {
  try {
    const dogDb = await Dog.findByPk(id, { 
		include: {
			model: Temperament,
			as: "dogTemperament",
			attributes: ["name"],
			through:{
				attributes:[],
			},
		},

	});
    if (dogDb) {
      return {
        id: dogDb.id,
        name: dogDb.name,
        temperament: dogDb.dogTemperament.map(el => el.name).join(", "),
        weight: dogDb.weight,
        height: dogDb.height,
        life_span: dogDb.life_span,
        image: dogDb.image,
        dogDb: dogDb.dogDb,
      };
    } else {
      const { data } = await axios.get(
        `https://api.thedogapi.com/v1/breeds/${id}`
      );
      let image = '';
      if (data.reference_image_id) {
        image = `https://cdn2.thedogapi.com/images/${data.reference_image_id}.jpg`;
      }
      return {
        id: data.id,
        name: data.name,
        temperament: data.temperament,
        weight: data.weight.metric,
        height: data.height.metric,
        life_span: data.life_span,
        image: image,
        dogDb: false,
      };
    }
  } catch (error) {
    throw new Error("Error: " + error.message);
  }
};

module.exports = getDogById;
