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
    //se busca en el modelo Dog por medio de la PK que incluya el modelo temperamente con alias "dogTemperament" con atributo "name" y 
    // que me arroje el array con esos atributos que quiero obtener (name)

	});
    if (dogDb) {
      let height = `${dogDb.heightMin} - ${dogDb.heightMax }`
      let weight = `${dogDb.weightMin} - ${dogDb.weightMax}`
      return {
        id: dogDb.id,
        name: dogDb.name,
        temperament: dogDb.dogTemperament.map(el => el.name).join(", "),
        weight: weight,
        height: height,
        life_span: dogDb.life_span,
        image: dogDb.image,
        dogDb: dogDb.dogDb,
      };
      //si se obtiene el perro de la db, que me retorne todos sus atributos 
    } else {
      const { data } = await axios.get(
        `https://api.thedogapi.com/v1/breeds/${id}`
      );
      let image = '';
      if (data.reference_image_id) {
        image = `https://cdn2.thedogapi.com/images/${data.reference_image_id}.jpg`;
      }
      if (!data.temperament) {
        data.temperament = "(Not specified 😢)";
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
    // sino lo busco por la api y que me retorne los atributos
  } catch (error) {
    throw new Error("Error: " + error.message);
  }
};

module.exports = getDogById;
