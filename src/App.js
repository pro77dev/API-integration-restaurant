import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import DetailPage from "./Pages/DetailPage/DetailPage";
import Landing from "./Pages/HomePage/Landing";


export const MainTypeFoodContext = createContext()

function App() {

  const [mainTypeFood, setMainTypeFood] = useState(null)

  return (
    <MainTypeFoodContext.Provider value={[mainTypeFood, setMainTypeFood]}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </MainTypeFoodContext.Provider>
  );
}

export default App;
