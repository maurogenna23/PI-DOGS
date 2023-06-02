const axios = require('axios');
const {Temperament} = require('../db')

const getTemperament = async () =>{
  const allData = await axios.get("https://api.thedogapi.com/v1/breeds");
  try {
    let everyTemperament = allData.data
      .map((dog) => (dog.temperament ? dog.temperament : "No info")) // Verificar si hay un temperamento, de lo contrario, asignar "No info"
      .map((dog) => dog?.split(", ")); // Separar los temperamentos por coma en un arreglo si hay múltiples temperamentos
    
    let eachTemperament = [...new Set(everyTemperament.flat())]; 
    // Crear un nuevo arreglo con todos los temperamentos únicos presentes en 'everyTemperament'
    // Utilizar el método flat() para convertir el arreglo multidimensional en uno plano
    
    eachTemperament.forEach((el) => {
      if (el) {
        Temperament.findOrCreate({
          where: { name: el },
        });
      }
    });
    
    // Agregar un temperamento por defecto a los perros sin temperamento
    const defaultTemperament = "Default Temperament";
    eachTemperament.push(defaultTemperament);
    
    eachTemperament = await Temperament.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
    });
    
    return eachTemperament;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = getTemperament;
