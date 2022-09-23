import React, { useEffect, useState } from 'react'
import { useLocation} from 'react-router'
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
        <main className='detailpage'>
            {
                selectedFood.map(selectedFood =>
                    <div>
                         <div className="d-flex-justify-content-start p-4">
                            <Link className='logo-name' to='/'><h4><button className='stylish-btn'>fooD.Hub - Home</button></h4></Link>
                        </div>
                        <h2 className='meal-name text-center p-1 pt-3'><i>{selectedFood.strMeal}</i></h2>
                        <div className="randomFood-card d-flex justify-content-center row p-3">

                            <div className='foodImage-container col-lg-6 col-md-11 col-sm-11'>
                                <div className='row d-flex justify-content-center p-1 px-5'>
                                    <h5 className='col-sm-11 col-lg-6 col-md-5'><button className='stylishReverse-btn w-100'># {selectedFood.strCategory}</button></h5>
                                    <h5 className='col-sm-11 col-lg-6 col-md-5'><button className='stylishReverse-btn w-100'># {selectedFood.strArea}</button></h5>
                                </div>
                                <div className='d-flex align-items-center'>
                                   <div> <img className='w-100 detail-image' src={selectedFood.strMealThumb} alt=" " /></div>
                                </div>

                            </div>

                            <div className='col-lg-5 col-md-11 col-sm-11'>
                                <div className="row">
                                    <div className="col-8 text-justify-center">
                                        <p className='fs-4'><strong>Ingredients: </strong></p>
                                        <p className='fs-5'>
                                            {selectedFood.strIngredient1}--{selectedFood.strMeasure1}, {selectedFood.strIngredient2}--{selectedFood.strMeasure2}, {selectedFood.strIngredient3}--{selectedFood.strMeasure3}, {selectedFood.strIngredient4}--{selectedFood.strMeasure4}, {selectedFood.strIngredient5}--{selectedFood.strMeasure5}, {selectedFood.strIngredient6}--{selectedFood.strMeasure6}, {selectedFood.strIngredient7}--{selectedFood.strMeasure7}, {selectedFood.strIngredient8}--{selectedFood.strMeasure8}, {selectedFood.strIngredient9}
                                        </p>
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

                                <p>
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
