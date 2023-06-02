import { Link } from "react-router-dom"
import styles from "./card.module.css"

const Card = ({ dog }) => {
    const { id, image_url, image, name, temperament, height, weight} = dog;
  
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
                <div className={styles.h3Div}>
                  <h3>Hi! My name is <span className={styles.highlight2}>{dog.name}</span> and this is a little information of me: </h3>
                </div>
                    <h4 className={styles.text1}><span className={styles.highlight3}>Temperaments: </span>{temperament}</h4>
                    <h4 className={styles.text2}><span className={styles.highlight3}>Height: </span> {height || dog.height} ft</h4>
                    <h4 className={styles.text2}><span className={styles.highlight3}>Weight: </span> {weight || dog.weight} lb</h4>
                    <h4 className={styles.text3}><Link className={styles.link} to={`/home/${id}`}> More info </Link></h4>
              </div>
          </div>
    </div>
    
    );
  };
  
  export default Card;
  
