import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { getByDetail } from "../../components/redux/action";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./detail.module.css";


const DogDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [dog, setDogId] = useState({})

  useEffect(() => {
    dispatch(getByDetail(id)).then(response => {
      setDogId(response.payload)
    }).catch(error => {
      window.alert("Dog not found")
    })
  }, [dispatch, id]);

  return (
    <div className={styles.detailContainer}>
          <h1>Discover <span className={styles.highlight}>{dog.name}</span> and Their Amazing World!</h1>
          {
            dog.image && (
            <img src={dog.image} alt={dog.name} className={styles.imgDetail} />
          )}
          <div className={styles.containerP}>
              <p>This adorable dog has a wonderful personality: {dog.temperament}!</p>
              <p>They come in a range of sizes, but this cutie weights around {dog.weight} Lb.</p>
              <p>When standing tall, they measure up to {dog.height} Ft.</p>
              <p>With good care, they can enjoy a long and happy life of approximately {dog.life_span}!</p>
          </div>

          <button> 
          <Link className={styles.back} to={`/home`} > ⬅ BACK </Link>
          </button>
    </div>
  );
};

export default DogDetails;
