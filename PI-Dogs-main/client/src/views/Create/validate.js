    const regexImg= /(http(s?):)([/|.|\w|\s|-])*.(?:jpg|gif|png|pnj)/;
    const regexName = /([0-9])+/;

    const validate = ({ name, heightMin, heightMax, image, life_span, weightMin, weightMax }) => {
        let errors = {};
      
        if (!name) {
          errors.name = "Please choose a name";
        } else if (name.length > 40 || name.length < 2) {
          errors.name = "Please choose a name between 2 and 40 characters long";
        } else if (regexName.test(name)) {
          errors.name = "Numbers are not allowed";
        }
      
        if (!weightMin) {
          errors.weightMin = "Please choose a weight";
        } else if (weightMin < 1 || weightMin > 50) {
          errors.weightMin = "Please choose a weight between 1 and 50";
        }
      
        if (!heightMin) {
          errors.heightMin = "Please choose a height";
        } else if (heightMin < 1 || heightMin > 75) {
          errors.heightMin = "Please choose a height between 1 and 75";
        }
      

        if (!weightMax) {
          errors.weightMax = "Please choose a weight";
        } else if (weightMax < 50 || weightMax > 100) {
          errors.weightMax = "Please choose a weight between 50 and 100";
        }
      
        if (!heightMax) {
          errors.heightMax = "Please choose a height";
        } else if (heightMax < 75 || heightMax > 150) {
          errors.heightMax = "Please choose a height between 75 and 150";
        }

        if (!life_span) {
          errors.life_span = "Please choose a life span";
        } else if (life_span < 1 || life_span > 50) {
          errors.life_span = "Please choose a life span between 1 and 50";
        }
      
        if (!image) {
          errors.image = "Please insert an image";
        } else if (!regexImg.test(image)) {
          errors.image = "Please insert a valid image";
        }
      
        return errors;
      };
      
      export default validate;
      