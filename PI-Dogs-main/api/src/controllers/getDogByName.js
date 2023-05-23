const getDogs = require('../controllers/dogs')

const getDogByName= async (name)=>{
    
    let nameDog= name.toLowerCase();
    let breeds = await getDogs();
    let result= breeds.filter((inst)=> inst.name.toLowerCase().includes(nameDog));
        
    if(result) {
        return result
    }
    else {
        throw new Error("This breed does not exist")
    }
};

module.exports = getDogByName;

