import React from 'react';
import style from "./Landing.module.css";
import {Link} from 'react-router-dom'

const LandingPage = () =>{
    return(
        <div className= {style.containerLanding} >
            <div className={style.subContainer}>
            <h1 className={style.title}> 🐶 The Api Dogs 🐶</h1>
            <h2  className={style.subTitle}>Welcome to the Api Dogs</h2>
                <Link to= "/home" >
                    <button className={style.button}>Enter</button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage;