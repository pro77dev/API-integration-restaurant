import { faConciergeBell, faGlobeAsia, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { MainTypeFoodContext } from '../../App';
import './HomeSidebar.css'


function HomeSidebar() {
    const [mainTypeFood, setMainTypeFood] = useContext(MainTypeFoodContext)


    return (
        <main>
            <div className="sidebar d-flex flex-column justify-content-between" >
                <ul className="list-unstyled">
                    <li>
                        <Link to="/" className="sidebar-link text-decoration-none">
                            <button onClick={() => setMainTypeFood('c')} className='link-btn fs-4'><FontAwesomeIcon icon={faUtensils} /> <span className='fs-5 linkBtn-detail'> Category</span></button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="sidebar-link text-decoration-none">
                            <button onClick={() => setMainTypeFood('a')} className='link-btn fs-4'><FontAwesomeIcon icon={faGlobeAsia} /> <span className='fs-5 linkBtn-detail'> Area</span></button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="sidebar-link text-decoration-none">
                            <button onClick={() => setMainTypeFood('i')} className='link-btn fs-4'><FontAwesomeIcon icon={faConciergeBell} /> <span className='fs-5 linkBtn-detail'> Ingredient</span></button>
                        </Link>
                    </li>
                    {/* <li>
                    <Link to="/" className="sidebar-link text-decoration-none">
                        <button className='link-btn fs-5'><FontAwesomeIcon icon={faHome}/> <span className='fs-5 linkBtn-detail'>Search</span></button>
                    </Link>
                </li> */}



                </ul>
            </div>
        </main>
    )
}

export default HomeSidebar
