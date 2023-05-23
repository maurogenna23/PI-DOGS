import React from "react";
import style from "./pagination.module.css"
import { useSelector } from "react-redux";

const Pagination = ({dogsPerPage, dogs, pagination}) => { //pagination is called on the number button because this function dispatches the action setCurrentPage

    const currentPage=  useSelector(state=> state.currentPage);

    const pages = [];

    for (let i = 1; i <= Math.floor(dogs/dogsPerPage); i++){
        pages.push(i)
    }

  return (
    <nav>
        <ul>
            <p className={style.p}>Look into the page ➡</p>
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