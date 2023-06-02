const getDogs = require('../controllers/dogs');

const getDogByName = async (name) => {
  let nameDog = name.toLowerCase(); //se transforma atributo name en minuscula
  let breeds = await getDogs(); // se obtiene el controlador donde estan todos los perros (api y db)
  let result = breeds.filter((inst) => inst.name.toLowerCase().includes(nameDog)); //se filtran en los perros para obtener solo la propiedad name y que este en minuscula
  return result;
};

module.exports = getDogByName;



