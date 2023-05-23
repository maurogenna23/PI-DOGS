import React from "react";
import styles from "./success.module.css"
import gif from "../../assets/success.gif"
const Success = () =>{
    return (
        <div className={styles.successContainer}>
            <h1>Congrats!</h1>
            <h2>You have al ready create you new Dog</h2>
            <img src={gif} alt={gif} />
        </div>
    )
}

export default Success;