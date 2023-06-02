import style from './About.module.css'
import imagen from '../../assets/aboutMe.png'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const About=()=>{

    return(
        <div className={style.container}>
            <div className={style.subContainer}>
                <p className={style.descripcion}>
                <h2 className={style.myName}>
                Mi nombre es Mauro Genna
                </h2> 
                Tengo 23 años. Me encuentro en el proceso de formación como Full Stack Developer, cuento con cursos de Html, Css, Javascript y Bootstrap de la academia NextU y actualmento me encuentro en la etapa del desarrollo de mi proyecto final en la academia SoyHenry.
                En SoyHenry adquirí conocimientos en React, Redux, Node js, Express y SQL.
                Desde que estoy en el área de programación he realizado dos proyectos, uno basado unicamente en el Frontend utilizando las siguientes tecnologías: Html, Css, Javascript y Bootstrap.
                Mi segundo proyecto fue el que realicé en SoyHenry el cual fue mi proyecto individual y en donde puse en practica todo lo aprendido en el bootcamp, desarrollé una aplicación web en donde tuve que utilizar una API externa y en la cual tuvo su desarrollo en: 
                - Base de datos con : Sql. 
                - BackEnd con: Express y Node Js.
                - FrontEnd con: Redux, React, Html, Css y Javascript.
                Además me encuentro realizando el labor de Teaching - Assistant en SoyHenry. 
                <br /><br />
                <h3 className={style.red}>Redes sociales:</h3>
                <br />
                <div className={style.divLink}>
                    <a className={style.link} href="https://www.instagram.com/mauro_genna/"><FaInstagram /></a>
                    <a className={style.link} href="https://www.linkedin.com/in/mauro-genna-777a84237/"><FaLinkedin /></a>
                    <a className={style.link} href="https://twitter.com/Mauro_genna/"><FaTwitter /></a>
                </div>
                </p>
                <img className={style.imagen} src={imagen} alt={imagen} />
            </div>
        </div>
    )
}
export default About