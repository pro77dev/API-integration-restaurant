import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { MainTypeFoodContext } from '../../App';
import './HomeSidebar.css'


function HomeSidebar() {
    const [mainTypeFood, setMainTypeFood] = useContext(MainTypeFoodContext)

    return (
        <div className="sidebar d-flex flex-column justify-content-between" >
            <ul className="list-unstyled">
                <li>
                    <Link to="/" className="sidebar-link text-decoration-none">
                        <button onClick={() => setMainTypeFood('category')} className='link-btn fs-5'><FontAwesomeIcon icon={faHome}/> <span className='fs-5 linkBtn-detail'>Category</span></button>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="sidebar-link text-decoration-none">
                        <button onClick={() => setMainTypeFood('country')} className='link-btn fs-5'><FontAwesomeIcon icon={faHome}/> <span className='fs-5 linkBtn-detail'>Country</span></button>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="sidebar-link text-decoration-none">
                        <button onClick={() => setMainTypeFood('ingredient')} className='link-btn fs-5'><FontAwesomeIcon icon={faHome}/> <span className='fs-5 linkBtn-detail'>Ingredient</span></button>
                    </Link>
                </li>
                
                

            </ul>
        </div>
    )
}

export default HomeSidebar
