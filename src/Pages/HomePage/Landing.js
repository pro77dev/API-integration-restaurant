import React, { useContext, useEffect, useState } from 'react'
import { MainTypeFoodContext, SelectedFoodsContext, SelectedTypeFoodContext } from '../../App'
import HomeSidebar from '../../Components/HomeSidebar/HomeSidebar'
import Navbar from '../../Components/Navbar/Navbar'
import './Landing.css'
import {useNavigate } from 'react-router-dom'


function Landing() {
    const [mainTypeFood, setMainTypeFood] = useContext(MainTypeFoodContext)
    const [selectedTypeFood, setSelectedTypeFood] = useContext(SelectedTypeFoodContext)
    const [notification, setNotification] = useState(true)

    const navigate = useNavigate()

    const [filterByType, setFilterByType] = useState([])
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/list.php?${mainTypeFood}=list`)
            .then(res => res.json())
            .then(data => setFilterByType(data.meals.slice(0, 15)))
    }, [mainTypeFood])


    const [selectedFoods, setSelectedFoods] = useContext(SelectedFoodsContext)
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?${mainTypeFood}=${selectedTypeFood}`)
            .then(res => res.json())
            .then(data => setSelectedFoods(data.meals.slice(0, 21)))
    }, [selectedTypeFood, mainTypeFood])


  
    return (
        <main className='landing-page'>
            <Navbar />

            <div className='row'>
                <div className='left-sidebar col px-lg-5 px-sm-2'>
                    <HomeSidebar />
                    
                </div>
                <div className="right-content col text-center pt-4" >

                    <div className='slider py-2 text-center'>
                        {
                            filterByType.map(filterType => <button onClick={() => setSelectedTypeFood(filterType.strCategory || filterType.strArea || filterType.strIngredient)} className='btn stylishReverse-btn m-1'>{filterType.strCategory || filterType.strArea || filterType.strIngredient}</button>)
                        }
                    </div>
                    <h3 className="text-center meal-name p-2">{selectedTypeFood}</h3>
                    {
                        notification && (!selectedTypeFood) && <h5 className="text-center meal-name p-2">Please, select an option.</h5>
                    }
                    <div className="row p-2 mx-auto d-flex justify-content-center">
                        
                        {
                            (selectedFoods.length === 1) &&
                            selectedFoods.map((selectedFood, index) =>

                                <div className="text-center randomFood-card d-flex justify-content-center row col-lg-10 col-md-10 col-sm-12">

                                    <div className='foodImage-container col-lg-7 col-md-8 col-sm-10 pt-4'>

                                        <div className='d-flex align-items-center'>
                                            <img className='randomFood-image' src={selectedFood.strMealThumb} alt=" " />
                                        </div>

                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-10 d-flex justify-content-center align-items-center">
                                           <div>
                                                <h2 className='meal-name text-center'><i>{selectedFood.strMeal}</i></h2>
                                                { selectedFood.strCategory && selectedFood.strArea &&
                                                    <div>
                                                        <h6 className='w-100'><button className='stylish-btn w-100 fs-5'># {selectedFood.strCategory}</button></h6>
                                                        <h6 className='w-100'><button className='stylish-btn w-100 fs-5'># {selectedFood.strArea}</button></h6>
                                                    </div>
                                                }
                                           </div>
                                    </div>



                                </div>

                            )

                        }

                        {
                            (selectedFoods.length > 1) &&
                            selectedFoods.map(selectedFood =>

                                <div className="col-lg-4 text-center food-card p-3 m-3">
                                    <div className='foodImage-container p-2'>
                                        <img className='food-image' src={selectedFood.strMealThumb} alt=" " />
                                    </div>
                                    <h5 className='p-2 meal-name'>{selectedFood.strMeal}</h5>
                                    <button onClick={() => navigate(`/${selectedFood.idMeal}`)} className='stylish-btn w-50 detail-btn'>Detail</button>
                                </div>

                            )
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Landing
