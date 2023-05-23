const validate =({name, height, image, life_span, weight, temperaments})=>{
  let errors= {};
  let regexImg= /(http(s?):)([/|.|\w|\s|-])*.(?:jpg|gif|png|pnj)/;
  let regexName= /([0-9])+/;

  if(!name.trim()) {
      errors.name= "Please choose a name"
  } else if (name.length >40 || name.length <2) {
      errors.name= "Please choose a name which is longer than 1 character and shorter than 40 characters"
  } else if (regexName.test(name.trim())) {
      errors.name= "Numbers are not allowed"
  }

  if(!weight){
      errors.weight= "Please choose a weight"
  } 

  if(!height){
      errors.height= "Please choose a height"
  } 

  if(!life_span){
      errors.life_span= "Please choose a life span"
  } 


  if (!image.trim()) {
      errors.image= "Please insert an image"
  } else if (!regexImg.test(image.trim())) {
      errors.image= "Please insert a valid file"
  }

  if (!temperaments) {
      errors.temperaments= "Please choose at least one temperament"
  } else if (temperaments.length > 0){
      errors.temperaments = "Please choose at least one temperament"
    } 

  return errors

}
export default validate;