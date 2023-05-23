import React from "react";
import style from "./loading.module.css";
import loadingDog from "../../assets/loading.gif"

const Loading = () => {
    return (
        <div className={style.loading_container}>
            <img src={loadingDog} alt="Loading" />
        </div>
    )
}

export default Loading