const { API_KEY } = process.env; 
const axios = require('axios');

const getDogFromApi = async () => {
  let { data } = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`) 

  let breedDogs = data.map((dog) => {
    return {
      id: dog.id,
      weight: dog.weight,
      height: dog.height,
      name: dog.name,
      image_url: dog.image.url,
      life_span: dog.life_span,
      temperament: dog.temperament,
      origin: 'api'
    };
  });

  return breedDogs;
};

module.exports = getDogFromApi;


  