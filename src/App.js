import React, { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import DetailPage from "./Pages/DetailPage/DetailPage";
import Landing from "./Pages/HomePage/Landing";


export const MainTypeFoodContext = createContext()
export const SelectedTypeFoodContext = createContext()
export const SelectedFoodsContext = createContext()
export const SearchFoodContext = createContext()

function App() {

  const [mainTypeFood, setMainTypeFood] = useState('c')
  const [selectedTypeFood, setSelectedTypeFood] = useState('')
  const [selectedFoods, setSelectedFoods] = useState([])
  const [searchFood, setSearchFood] = useState('')

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(data => data.json())
    .then(data => setSelectedFoods(data.meals.slice(0, 15)))
  }, [])
  return (
     <MainTypeFoodContext.Provider value={[mainTypeFood, setMainTypeFood]}>
     <SelectedTypeFoodContext.Provider value={[selectedTypeFood, setSelectedTypeFood]}>
     <SelectedFoodsContext.Provider value={[selectedFoods, setSelectedFoods]}>
     <SearchFoodContext.Provider value={[searchFood, setSearchFood]}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </SearchFoodContext.Provider>
    </SelectedFoodsContext.Provider>
    </SelectedTypeFoodContext.Provider>
    </MainTypeFoodContext.Provider>
  );
}

export default App;
