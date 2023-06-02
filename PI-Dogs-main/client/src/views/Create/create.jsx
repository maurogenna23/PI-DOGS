import { useDispatch, useSelector } from "react-redux"
import style from "./create.module.css"
import validate from "./validate"
import {createNewDog, getAllTemps} from "../../components/redux/action"
import { useEffect, useState } from "react"

const Create = () =>{

    const dispatch = useDispatch()
    const temperaments = useSelector((state => state.temperaments))
   

    const [input, setInput] = useState({
        name: "",
        image: "",
        heightMin: "",
        heightMax: "",
        weightMin: "",
        weightMax: "",
        life_span: "",
        temperament: ""
    })

    const [error, setErrors] = useState({})  
    const [selectError, setSelectError] = useState("");
    

    const handleInputs = (event) => {
      if (event.target.name === "temperament") {
          if (input.temperament.includes(event.target.value)) {
              const filtrado = input.temperament
                  .split(", ")
                  .filter(item => item !== event.target.value)
                  .join(", ");
              setInput({ ...input, temperament: filtrado });
          } else {
              setInput({
                  ...input,
                  temperament: [...input.temperament.split(", "), event.target.value].join(", "),
              });
          }
      } else {
          setInput({
              ...input,
              [event.target.name]: event.target.value,
          })
          setErrors((prevErrors) => ({
            ...prevErrors,
            [event.target.name]:validate({ ...prevErrors,[event.target.name]:event.target.value })[event.target.name],
          }));
      }
  };
      
      
  const handleTemperament = (event) => {
    const { value } = event.target;
  
    if (input.temperament.includes(value)) {
      setSelectError("Temperament cannot be repeated");
    } else if (value === "all") {
      setSelectError("Please select a valid temperament");
    } else {
      setSelectError("");
      setInput((prevInput) => ({
        ...prevInput,
        temperament: prevInput.temperament ? `${prevInput.temperament}, ${value}` : value,
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        temperament: validate({ ...input, temperament: `${input.temperament}, ${value}` }).temperaments,
      }));
    }
  };
  
      

    const handleDelete = (temp) => {
      setInput({
        ...input,
        temperament: input.temperament
          ? input.temperament.split(", ").filter(inst => inst !== temp).join(", ")
          : ""
      });
    }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const jsonData = JSON.stringify(input);
    dispatch(createNewDog(jsonData));

  };
  
      useEffect(()=>{
        dispatch(getAllTemps())
      }, [dispatch])

      

    return (
        <div className={style.create}>
          <h1>Welcome to "Create your dog"!</h1>
          <h3>Complete the form to create your new Dog 🐶</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor=""> Name: </label>
                    <input name="name" type="text" onChange={handleInputs} autoComplete="off" />
                    <br />
                    {error["name"] && <strong>{error.name}</strong>}

                    <br />

                    <label htmlFor=""> Image: </label>
                    <input type="text" name="image" onChange={handleInputs} placeholder="example: https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg" autoComplete="off" />
                    <br />
                    {error.image && <strong>{error.image}</strong>}

                    <br />

                    <label htmlFor="">  HeightMin (cm): </label>
                    <br />
                    <input name="heightMin" type="number"  onChange={handleInputs} min="1" max="75"  />
                    <span>{input.heightMin}</span>
                    {error.heightMin && <strong>{error.heightMin}</strong>} 

                    <br />

                    <label htmlFor=""> HeightMax (cm):</label>
                    <br />
                    <input name="heightMax" type="number"  onChange={handleInputs} min="75" max="150"  />
                    <span>{input.heightMax}</span>
                    {error.heightMax && <strong>{error.heightMax}</strong>} 

                    <br />

                    <label htmlFor=""> WeightMin (kg): </label>
                    <br />
                    <input name="weightMin" type="number"  onChange={handleInputs} min="1" max="50"/>
                    <span>{input.weightMin}</span>
                    {error.weightMin && <strong>{error.weightMin}</strong>}

                    <br />

                    <label htmlFor=""> WeightMax (kg): </label>
                    <br />
                    <input name="weightMax" type="number"  onChange={handleInputs} min="50" max="100"/>
                    <span>{input.weightMax}</span>
                    {error.weightMax && <strong>{error.weightMax}</strong>}

                    <br />
                    
                    <label htmlFor=""> Life expectancy: </label>
                    <br />
                    <input name="life_span" type="number"   onChange={handleInputs} min="1" max="50"/>
                    <span>{input.life_span}</span>
                    {error.life_span && <strong>{error.life_span}</strong>}

                    <br />
                    
                    <label htmlFor="temperament"> Temperaments: </label>
                    <div>
                        <select onChange={handleTemperament}>
                        {error.temperaments && <strong>{error.temperaments}</strong>}
                            <option value="all"></option>
                                {temperaments.map((temp) => {
                                    return (
                                    <option className={style.opciones} value={temp.name} key={temp.id}>
                                        {temp.name}
                                    </option>
                                    );
                                })}
                        </select>
                        {selectError && <strong>{selectError}</strong>}

                        <h4> My new Dog is: </h4>
                          <li>{input.temperament}</li>

                        <br />
                            <button
                                className={style.button}
                                disabled={
                                    error.name ||
                                    error.image ||
                                    error.weightMin ||
                                    error.weightMax ||
                                    error.heightMin||
                                    error.heightMax ||
                                    error.life_span ||
                                    !input.temperament.length ||
                                    !input.name ||
                                    selectError
                                }
                                >
                               Add Dog   
                            </button>
                    </div>
                    
                </div>
            </form>
            <div className={style.toDeleteContainer}>
                {input.temperament && (
                  <div className={style.toDelete}>
                    <p>{input.temperament}</p>
                    <button onClick={() => handleDelete(input.temperament)}>X</button>
                  </div>
                )}
            </div>

        </div>
    )
}

export default Create

//imagenes: 
//https://img.europapress.es/fotoweb/fotonoticia_20160223095538-16021602359_800.jpg
//https://media.diariopopular.com.ar/adjuntos/143/imagenes/006/829/0006829427.jpg
