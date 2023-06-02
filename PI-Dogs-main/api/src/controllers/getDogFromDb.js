const { Dog, Temperament } = require('../db');

const getBreedsFromDb = async () => {
  const dbData = await Dog.findAll({
    include: [{
      model: Temperament,
      through: "dog_temperament",
      as: "dogTemperament"
    }],
  });

  // se realiza una constante donde se va a buscar en el modelo Dog a todos los perros que incluyan el modelo Temperament

  const fromDb = dbData.map((inst) => { // mapeo en la const dbData para returnar los siguientes atributos
    
  let promedioWeight = (inst.weightMin + inst.weightMax) / 2; // promedio del peso
  let promedioHeight = (inst.heightMin + inst.heightMax) / 2; // promedio de altura
  let height = `${inst.heightMin} - ${inst.heightMax }`
  let weight = `${inst.weightMin} - ${inst.weightMax}`
    return {
      id: inst.id,
      weight: weight, 
      height: height,
      name: inst.name,
      life_span: inst.life_span,
      promedioWeight: promedioWeight,
      promedioHeight: promedioHeight,
      image: inst.image,
      temperament: inst.dogTemperament.map(el => el.name).join(", "), //mapeo en el caso de obtener mas de 1 temperamento para que se dividian por medio de una "," 
    };
  });

  return fromDb;
};

module.exports = getBreedsFromDb;

  