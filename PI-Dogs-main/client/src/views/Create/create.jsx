import { useDispatch, useSelector } from "react-redux"
import style from "./create.module.css"
import validate from "./validate"
import {createNewDog, getAllTemps} from "../../components/redux/action"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

const Create = () =>{

    const dispatch = useDispatch()
    const temperaments = useSelector((state => state.temperaments))
    const navigate = useNavigate();

    const [input, setInput] = useState({
        name: "",
        image: "",
        height: "",
        weight: "",
        life_span: "",
        temperament: ""
    })

    const [error, setErrors] = useState({})  
    const [success, setSuccess] = useState(false)

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
          });
      }
  };
      
      
    const handleTemperament = (event) => {
      const { value } = event.target;
      if (input.temperament.includes(value)) {
        return alert("Temperament cannot be repeated");
      }
      if (value === "all") {
        return;
      }
      setInput((prevInput) => ({
        ...prevInput,
        temperament: prevInput.temperament ? `${prevInput.temperament}, ${value}` : value
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        temperament: validate({ ...input, temperament: `${input.temperament}, ${value}` }).temperament
      }));
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
    console.log("Datos del perro (JSON):", jsonData); // Imprime los datos del perro en formato JSON
  
    dispatch(createNewDog(jsonData));
    
    setSuccess(true);
  };
  

      useEffect(()=>{
        dispatch(getAllTemps())
      }, [dispatch])

      if (success) {
        navigate("/success")
      }

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

                    <label htmlFor=""> Height (cm): </label>
                    <br />
                    <input name="height" type="range"  onChange={handleInputs} min="1" max="150"  />
                    <span>{input.height}</span>
                    {error.height && <strong>{error.height}</strong>} 

                    <br />

                    <label htmlFor=""> Weight (kg): </label>
                    <br />
                    <input name="weight" type="range"  onChange={handleInputs} min="1" max="200"/>
                    <span>{input.weight}</span>
                    {error.weight && <strong>{error.weight}</strong>}

                    <br />
                    
                    <label htmlFor=""> Life expectancy: </label>
                    <br />
                    <input name="life_span" type="range"   onChange={handleInputs} min="1" max="50"/>
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
                        <h4> My new Dog is: </h4>
                          <li>{input.temperament}</li>
                        

                        <br />
                            <button
                                className={style.button}
                                disabled={
                                    error.name ||
                                    error.image ||
                                    error.weight ||
                                    error.height ||
                                    error.life_span ||
                                    !input.temperament.length ||
                                    !input.name
                                }
                                >
                               Add Dog   
                            </button>
                    </div>
                    {error.temperaments && <strong>{error.temperaments}</strong>}
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

