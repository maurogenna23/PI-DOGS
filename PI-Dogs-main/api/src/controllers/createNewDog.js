const { Dog, Temperament } = require("../db");

const createNewDog = async (weightMax, weightMin, heightMax, heightMin, name, life_span, image, temperament) => {
  if (!weightMax || !weightMin || !heightMax || !heightMin || !name || !life_span || !image || !temperament) {
    throw new Error("Missing information. Please complete all the required data.");
  } else {

    
    const result = await Dog.findOne({ order: [["id", "DESC"]] }); // se espera buscar el perro en el modelo Dog con order descendente ("del ultimo al primero") por medio del id
    const lastID = result ? result.id : 265; //se pregunta si result existe, si existe que me de su id y sino se le proporciona 265(utlimo id de la lista)
    const count = lastID + 1; 

    const newDog = await Dog.create({
      id: count, // se suma un numero mas al ultimo perro que esté
      image: image,
      name: name,
      heightMax: heightMax,
      heightMin: heightMin,
      weightMax: weightMax,
      weightMin: weightMin,
      life_span: life_span,
      dogDb: true,
    });

    const temper = await Temperament.findOrCreate({ where: { name: temperament } });
    await newDog.addDogTemperament(temper[0]);
 // se espera al modelo Temperament para buscar el nombre del temperamento y agregarselo a la constante NewDog
    return newDog;
  }
};

module.exports = createNewDog;




