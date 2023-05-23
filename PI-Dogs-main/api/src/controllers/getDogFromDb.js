const { Dog, Temperament } = require('../db');

const getBreedsFromDb = async () => {
  const dbData = await Dog.findAll({
    include: [{
      model: Temperament,
      through: "dog_temperament",
      as: "dogTemperament"
    }],
  });

  const fromDb = dbData.map((inst) => {
    return {
      id: inst.id,
      weight: inst.weight,
      height: inst.height,
      name: inst.name,
      life_span: inst.life_span,
      image: inst.image,
      temperament: inst.dogTemperament.map(el => el.name).join(", "),
    };
  });

  return fromDb;
};

module.exports = getBreedsFromDb;

  