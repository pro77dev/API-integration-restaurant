import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div className='d-flex justify-content-around row text-center p-3'>
            <div className='col-lg-3'>
               <h3 className='logo-name'>fooD.Hub</h3>
            </div>
            <div className='col-lg-3'>
                <button className="btn stylish-btn">Bangla</button>
            </div>
        </div>
    )
}

export default Navbar
