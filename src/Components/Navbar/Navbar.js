import React from 'react'

import './Navbar.css'

function Navbar() {
   
    return (
        <div className='d-flex justify-content-around row text-center p-3 '>
            <div className='col-lg-3'>
                <a className='logo-name' href="https://www.linkedin.com/in/shahman-riaz" rel="noreferrer" target="_blank"><h3>Food <button className='stylish-btn'> recipE.Hub </button></h3></a>
            </div>
        </div>
    )
}

export default Navbar
