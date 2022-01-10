import React, { useEffect, useState } from 'react'
import HomeSidebar from '../../Components/HomeSidebar/HomeSidebar'
import Navbar from '../../Components/Navbar/Navbar'
import './Landing.css'

function Landing() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
            .then(res => res.json())
            .then(data => setCategories(data.meals))
    }, [])


    const [areas, setAreas] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
            .then(res => res.json())
            .then(data => setAreas(data.meals.slice(0, 16)))
    }, [])


    const [ingredients, setIngredients] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
            .then(res => res.json())
            .then(data => setIngredients(data.meals.slice(0, 14)))
    }, [])



    return (
        <main className='landing-page'>
            <Navbar />
            <div className='row'>
                <div className='left-sidebar col'>
                    <HomeSidebar />
                </div>
                <div className="right-content col text-center pt-4" >
                <h3>Category</h3>
                    <div className='slider'>
                        {
                            categories.map(category => <button className='btn stylishReverse-btn m-1'>{category.strCategory}</button>)
                        }
                    </div>

                    <h3>Area</h3>
                    <div className='slider'>
                        {
                        areas.map(area => <button className='btn stylishReverse-btn m-1'>{area.strArea}</button>)
                    }
                    </div>

                    <h3>Ingredient</h3>
                    <div className='slider'>
                        {
                        ingredients.map(ingredient=> <button className='btn stylishReverse-btn m-1'>{ingredient.strIngredient}</button>)
                    }
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Landing
