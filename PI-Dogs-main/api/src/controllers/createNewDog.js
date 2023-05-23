const { Dog, Temperament } = require("../db");

const createNewDog = async (weight, height, name, life_span, image, temperament, dogDb) => {
  if (!weight || !height || !name || !life_span || !image || !temperament) {
    throw new Error("Missing information. Please complete all the required data.");
  } else {
    const result = await Dog.findOne({ order: [["id", "DESC"]] });
    const lastID = result ? result.id : 265;
    const count = lastID + 1;

    const newDog = await Dog.create({
      id: count,
      image: image,
      name: name,
      height: height,
      weight: weight,
      life_span: life_span,
      dogDb: true,
    });

    const temper = await Temperament.findOrCreate({ where: { name: temperament } });
    await newDog.addDogTemperament(temper[0]);

    return newDog;
  }
};

module.exports = createNewDog;




