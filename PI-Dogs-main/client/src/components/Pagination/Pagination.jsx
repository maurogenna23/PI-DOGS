import React from "react";
import style from "./pagination.module.css"
import { useSelector } from "react-redux";

const Pagination = ({dogsPerPage, dogs, pagination}) => { 
    const currentPage=  useSelector(state=> state.currentPage);

    const pages = [];

    for (let i = 1; i <= Math.floor(dogs/dogsPerPage); i++){
        pages.push(i)
    }
    
    //Se crea un array pages para almacenar los números de página disponibles. Se utiliza un bucle for para iterar desde 1 hasta el número de páginas necesarias, 
    //calculado dividiendo la cantidad total de perros (dogs) entre la cantidad de perros por página (dogsPerPage). Cada número de página se agrega al array pages.

  return (
    <nav>
        <ul>
        {
            pages && pages.map(num => (
                <button
                className={`${style.number} ${currentPage === num && style.active}`}
                key={num}
                onClick={() => pagination(num)}
                >
                {num}
                </button>
            ))
        }
        </ul>
    </nav>
  );
}

export default Pagination;