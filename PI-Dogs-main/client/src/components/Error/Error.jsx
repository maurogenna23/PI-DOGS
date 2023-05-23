import React from "react";
import errorImg from "../../assets/errorPage.jpg" 
import style from "./error.module.css";

const Error = () => {
    return (
        <div className={style.errorContainer}>
            <h1 >Page not found</h1>
            <img src={errorImg} alt={errorImg} />
        </div>
    )
}

export default Error