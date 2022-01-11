import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import youtube from '../../Assets/youtube.png'

import './DetailPage.css'


function DetailPage() {

    const location = useLocation().pathname
    const foodId = location.slice(1)

    const [selectedFood, setSelectedFood] = useState([])

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`)
            .then(data => data.json())
            .then(data => setSelectedFood(data.meals))
    }, [foodId])

    

    return (
        <main className='p-3'>
            {
                selectedFood.map(selectedFood =>
                    <div>
                         <div className="d-flex-justify-content-start">
                            <Link className='logo-name' to='/'><h4><button className='stylish-btn'>fooD.Hub - Home</button></h4></Link>
                        </div>
                        <h2 className='meal-name text-center p-1 pt-3'><i>{selectedFood.strMeal}</i></h2>
                        <div className="randomFood-card d-flex justify-content-center row p-5">

                            <div className='foodImage-container col-lg-5 col-md-5 col-sm-10'>
                                <div className='row d-flex justify-content-center p-1 px-5'>
                                    <h5 className='col-6'><button className='stylishReverse-btn'># {selectedFood.strCategory}</button></h5>
                                    <h5 className='col-6'><button className='stylishReverse-btn'># {selectedFood.strArea}</button></h5>
                                </div>
                                <div className='d-flex align-items-center p-5'>
                                    <img className=' detail-image' src={selectedFood.strMealThumb} alt=" " />
                                </div>

                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-10'>
                                <div className="row">
                                    <div className="col-8 text-justify-center">
                                        <p className='fs-4'><strong>Ingredients: </strong></p>
                                        <h6 className='fs-5'>
                                            {selectedFood.strIngredient1}--{selectedFood.strMeasure1}, {selectedFood.strIngredient2}--{selectedFood.strMeasure2}, {selectedFood.strIngredient3}--{selectedFood.strMeasure3}, {selectedFood.strIngredient4}--{selectedFood.strMeasure4}, {selectedFood.strIngredient5}--{selectedFood.strMeasure5}, {selectedFood.strIngredient6}--{selectedFood.strMeasure6}, {selectedFood.strIngredient7}--{selectedFood.strMeasure7}, {selectedFood.strIngredient8}--{selectedFood.strMeasure8}, {selectedFood.strIngredient9}--{selectedFood.strMeasure9}, {selectedFood.strIngredient10}--{selectedFood.strMeasure10}, {selectedFood.strIngredient11}--{selectedFood.strMeasure11}, {selectedFood.strIngredient12}--{selectedFood.strMeasure12}, {selectedFood.strIngredient13}--{selectedFood.strMeasure13}, {selectedFood.strIngredient14}--{selectedFood.strMeasure14}, {selectedFood.strIngredient15}--{selectedFood.strMeasure15}
                                        </h6>
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-end align-items-center">
                                    <div className="col-8">
                                        <p className='fs-4'><strong>Instruction for making: </strong></p>
                                    </div>
                                    <div className="col-4">
                                        <h6><a href={selectedFood.strYoutube} target="_blank" rel="noreferrer"><img height='90%' width='90%' src={youtube} alt=" " /></a></h6>
                                    </div>
                                </div>

                                <p className="fs-5">
                                    {selectedFood.strInstructions}
                                </p>
                                <a className='text-dark' href={selectedFood.strSource} target="_blank" rel="noreferrer"><strong>Source</strong></a>
                            </div>

                        </div>
                    </div>
                )


            }
        </main>
    )
}

export default DetailPage
