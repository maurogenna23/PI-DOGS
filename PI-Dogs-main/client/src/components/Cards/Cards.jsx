import styles from "./cards.module.css"
import Card from "../Card/Card"

const Cards = ({allDogs}) =>{

    const dogList = allDogs
    return (
        <div className={styles.containerCards}>
            {dogList?.map(dog =>
                <Card
                key={dog.id} 
                dog={dog}/>)}
        </div>
    )
}

export default Cards