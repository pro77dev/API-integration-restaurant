import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SearchFoodContext, SelectedFoodsContext } from '../../App'
import './Navbar.css'

function Navbar() {
   
    return (
        <div className='d-flex justify-content-around row text-center p-3 '>
            <div className='col-lg-3'>
                <Link className='logo-name' to='/'><h3>Food <button className='stylish-btn'> recipE.Hub </button></h3></Link>
            </div>
        </div>
    )
}

export default Navbar
