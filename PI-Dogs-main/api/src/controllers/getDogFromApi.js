const { API_KEY } = process.env; 
const axios = require('axios');

const getDogFromApi = async () => {
  let { data } = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);

  let breedDogs = data.map((dog) => {
    let weightMin = dog.weight.imperial ? parseFloat(dog.weight.imperial.split(" - ")[0]) : 0;
    let weightMax = dog.weight.imperial ? parseFloat(dog.weight.imperial.split(" - ")[1]) : 0;
    let promedioWeight = (weightMin + weightMax) / 2;

    let heightMin = dog.height.imperial ? parseFloat(dog.height.imperial.split(" - ")[0]) : 0;
    let heightMax = dog.height.imperial ? parseFloat(dog.height.imperial.split(" - ")[1]) : 0;

    // Verificar si no hay altura mínima especificada
    if (isNaN(heightMin)) {
      heightMin = 0; // Asignar un valor predeterminado
    }

    // Verificar si no hay altura máxima especificada
    if (isNaN(heightMax)) {
      heightMax = 35; // Asignar un valor predeterminado
    }

    if (isNaN(weightMin)) {
      weightMin = 0; // Asignar un valor predeterminado
    }

    // Verificar si no hay altura máxima especificada
    if (isNaN(weightMax)) {
      weightMax = 75; // Asignar un valor predeterminado
    }

    let promedioHeight = (heightMin + heightMax) / 2;

    let height = `${heightMin} - ${heightMax }`;
    let weight = `${weightMin} - ${weightMax}`;

    
    if (!dog.temperament) {
      dog.temperament = "Not specified 😢"; // Asignar un temperamento por defecto
    }
    
    return {
      id: dog.id,
      heightMax: heightMax,
      heightMin: heightMin,
      weightMax: weightMax,
      weightMin: weightMin,
      height: height,
      weight: weight,
      name: dog.name,
      image_url: dog.image.url,
      life_span: dog.life_span,
      temperament: dog.temperament,
      origin: 'api',
      promedioWeight: promedioWeight,
      promedioHeight: promedioHeight
    };
  });

  return breedDogs;
};

module.exports = getDogFromApi;
