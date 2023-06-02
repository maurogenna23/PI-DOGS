import React from 'react';
import style from "./Landing.module.css";
import {Link} from 'react-router-dom'


const LandingPage = () =>{
    return(
        <div className= {style.containerLanding} >
            <div className={style.nav}> 
            <Link to="/about">
                <button className={style.navButton}>ABOUT ME</button>
            </Link>
            </div>
            <div className={style.subContainer}>
            <h1 className={style.title}> 🐶 DogWorld 🐶</h1>
            <h2  className={style.subTitle}>Press the button below to see the different dogs we have</h2>
                <Link to= "/home" >
                    <button className={style.button}>Enter</button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage;