import React from 'react'
import { MdKeyboardArrowRight, MdKeyboardDoubleArrowRight, MdKeyboardArrowLeft, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import styles from './Pagination.module.css'

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {

  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(prev => prev + 1);
  }

  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(prev => prev - 1);
  }

  return (
    <div className={styles.paginationwrapper}>
      <button className={currentPage == 1 ? styles.inactive : styles.button}
        onClick={() => setCurrentPage(1)}
      >
        <MdKeyboardDoubleArrowLeft />
      </button>
      <button className={currentPage == 1 ? styles.inactive : styles.button}
        onClick={prevPage}
      >
        <MdKeyboardArrowLeft />
      </button>
      {
        pageNumbers.map((pgno) => (
          <button
            key={pgno}
            className={currentPage == pgno ? styles.active : styles.button}
            onClick={() => setCurrentPage(pgno)}
          >
            {pgno}
          </button>
        ))
      }
      <button className={currentPage == nPages ? styles.inactive : styles.button}
        onClick={nextPage}
      >
        <MdKeyboardArrowRight />
      </button>
      <button className={currentPage == nPages ? styles.inactive : styles.button}
        onClick={() => setCurrentPage(nPages)}
      >
        <MdKeyboardDoubleArrowRight />
      </button>
    </div>
  )
}

export default Pagination