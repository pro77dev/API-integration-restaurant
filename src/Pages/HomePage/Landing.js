import React, { useContext, useEffect, useState } from 'react'
import { MainTypeFoodContext, SelectedFoodsContext, SelectedTypeFoodContext } from '../../App'
import HomeSidebar from '../../Components/HomeSidebar/HomeSidebar'
import Navbar from '../../Components/Navbar/Navbar'
import './Landing.css'
import youtube from '../../Assets/youtube.png'
import { Link, useNavigate } from 'react-router-dom'


function Landing() {
    const [mainTypeFood, setMainTypeFood] = useContext(MainTypeFoodContext)
    const [selectedTypeFood, setSelectedTypeFood] = useContext(SelectedTypeFoodContext)
    // const [mainTypeName, setMainTypeName] = useState('Category')

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

                    <div className="row p-3 mx-auto d-flex justify-content-center">
                        {
                            (selectedFoods.length === 1) &&
                            selectedFoods.map((selectedFood, index) =>

                                <div className="text-center randomFood-card d-flex justify-content-end row col-lg-9 col-md-9 col-sm-12">

                                    <div className='foodImage-container col-lg-8 col-md-8 col-sm-10 pt-4'>

                                        <div className='d-flex align-items-center'>
                                            <img className='randomFood-image' src={selectedFood.strMealThumb} alt=" " />
                                        </div>

                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-10 d-flex align-items-center">

                                        <div className='row d-flex justify-content-center p-1'>
                                            <div>
                                                <h1 className='meal-name text-center'><i>{selectedFood.strMeal}</i></h1>
                                            </div>
                                            <h6 className='col-6'><button className='stylish-btn'># {selectedFood.strCategory}</button></h6>
                                            <h6 className='col-6'><button className='stylish-btn'># {selectedFood.strArea}</button></h6>
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
