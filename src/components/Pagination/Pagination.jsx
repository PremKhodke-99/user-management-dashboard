import React from 'react'
import { MdKeyboardArrowRight, MdKeyboardDoubleArrowRight, MdKeyboardArrowLeft, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import '../index.css';

const Pagination = (props) => {
  return (
    <div className='paginationwrapper'>
      <button><MdKeyboardDoubleArrowLeft /></button>
      <button><MdKeyboardArrowLeft /></button>
      <button></button>
      <button><MdKeyboardArrowRight /></button>
      <button><MdKeyboardDoubleArrowRight /></button>
    </div>
  )
}

export default Pagination