import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getByName, getDogs, filterOrigin, filterTemps, getAllTemps, setCurrentPage, orderByName, orderByWeight, orderByHeight } from "../../components/redux/action"
import styles from "./home.module.css"
import Cards from  "../../components/Cards/Cards"
import NavBar from "../../components/NavBar/NavBar"
import Pagination from "../../components/Pagination/Pagination"
import Loading from "../../components/Loading/Loading"

function Home(){

    const dispatch = useDispatch()
    const allDogs = useSelector(state => state.allDogs)
    const currentPage= useSelector(state => state.currentPage);
    const [searchString, setSearchString] = useState("")
    const [dogsPerPage] = useState(8)
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) =>{
            e.preventDefault()
            setSearchString(e.target.value)
        }

    const handleSubmit = (e) =>{
            e.preventDefault()
            dispatch(getByName(searchString)) 
    }

  //pagination

    const numOfLastDog= currentPage * dogsPerPage; // se calcula multiplicando el número de la página actual (currentPage) 
                                                   //por la cantidad de perros que se muestran por página (dogsPerPage). Esto representa el índice del último perro en la página actual.
    const numOfFirstDog= numOfLastDog - dogsPerPage; //se calcula restando la cantidad de perros por página (dogsPerPage) al valor de numOfLastDog. 
                                                     //Esto representa el índice del primer perro en la página actual.
    const dogValues = Object.values(allDogs); //almacena los valores de todos los perros contenidos en el objeto allDogs.
    const currentDogs = dogValues.slice(numOfFirstDog, numOfLastDog); // se utiliza el metodo slice() para obtener un subconjunto de elementos de dogValues 
                                                                      //Se toman los elementos que van desde el índice numOfFirstDog hasta el índice numOfLastDog 
  
    const pagination= (page) => {
      dispatch(setCurrentPage(page))}

    //Filters

    const temperaments = useSelector((state => state.temperaments))

    const handleFilterOrigin = (event) => {
        event.preventDefault()
        const {value} = event.target
        dispatch(filterOrigin(value))
    }

    const handleFilterTemperament = (event) => {
      event.preventDefault()
      const {value} = event.target
      dispatch(filterTemps(value))
    };

    //orders

    const handleOrderName = (event) => {
      event.preventDefault()
      const {value} = event.target
      dispatch(orderByName(value))
    }

    const handleOrderWeight = (event) => {
      event.preventDefault()
      const {value} = event.target
      dispatch(orderByWeight(value))
    }

    const handleOrderHeight = (event) => {
      event.preventDefault()
      const {value} = event.target
      dispatch(orderByHeight(value))
    }

    //useEffects

   useEffect(() => {
  setIsLoading(true);

  dispatch(getDogs())
    .then(() => {
      setIsLoading(false);
    });
}, [dispatch]);


    useEffect(() => {
      dispatch(getAllTemps())
    }, [dispatch])

    return (
        <div className={styles.homeContainer}>
            <NavBar handleChange ={handleChange} handleSubmit={handleSubmit} /> 
            
      <div className={styles.order_filter}>
        <div className={styles.filterByOrigin}>
            <div>
              <select className={styles.select} onChange={event => {handleFilterOrigin (event)}}>
                <option className={styles.option} value="All">All dogs</option>
                <option className={styles.option} value="api">Api dogs</option>
                <option className={styles.option} value="fromDb">My dogs</option>
              </select>   
            </div>
        </div>

        <div className={styles.filterByTemperament}>
            <div>
              <select className={styles.select} onChange={event => {handleFilterTemperament(event)}}>
                <option className={styles.option} value="all">All Temperaments</option>
                {temperaments?.map((temp) => {
                    return (
                      <option value={temp.name} key={temp.id}>
                        {temp.name}
                      </option>
                    );
                })}
              </select>
            </div>
        </div>

        <div>
          <div>
            <select className={styles.select} onChange={event => {handleOrderName(event)}} defaultValue={"DEFAULT"}>
              <option className={styles.option} value="DEFAULT" >Alphabetical</option>
              <option className={styles.option} value="a-z">From A to Z</option>
              <option className={styles.option} value="z-a">From Z to A</option>
            </select>
          </div>
        </div>

        <div>
          <div>
            <select className={styles.select} onChange={event => {handleOrderWeight(event)}} >
              <option className={styles.option} value="All" >All Weights</option>
              <option className={styles.option} value="Ascendente">To heavy</option>
              <option className={styles.option} value="Descendente">To thin</option>
            </select>
          </div>
        </div>

        <div>
          <div>
            <select className={styles.select} onChange={handleOrderHeight} >
              <option className={styles.option} value="All" >All Heights</option>
              <option className={styles.option} value="Asc">To tall</option>
              <option className={styles.option} value="Desc">To small</option>
            </select>
          </div>
        </div>

      </div>

      {isLoading ? <Loading /> : <Cards allDogs={currentDogs} />}

        <div className={styles.footer}>
          <Pagination
            dogsPerPage= {dogsPerPage}
            dogs= {allDogs?.length}
            pagination= {pagination} />
        </div>
        </div>
        
    )
}

export default Home