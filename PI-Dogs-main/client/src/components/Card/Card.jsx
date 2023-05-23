import { Link } from "react-router-dom"
import styles from "./card.module.css"

const Card = ({ dog }) => {
    const { id, image_url, image, name, temperament, weight } = dog;
  
    return (
      <div className={styles.flipCard}>
          <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                  <img className={styles.img} src={image_url || image} alt={name} />
                  <h2 className={styles.title}>
                    <span className={styles.highlight}>{name}</span>
                  </h2>
              </div>
              <div className={styles.flipCardBack}>
                    <h3>This is just a snippet of the information I have about myself!</h3>
                    <h4 className={styles.text1}><span>Temperaments:</span> {temperament}</h4>
                    <h4 className={styles.text2}><span>Weight:</span> {weight && weight.imperial ? weight.imperial : weight} Kg</h4>
                    <h4 className={styles.text3}><Link className={styles.link} to={`/home/${id}`}> More info </Link></h4>
              </div>
          </div>
    </div>
    
    

    );
  };
  
  export default Card;
  
