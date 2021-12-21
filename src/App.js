import React, { useState, useEffect } from 'react';
import Navbar from './components/navigation/Navbar';
import Home from './components/static/Home';
import ListRecipes from './components/recipes/ListRecipes';
import NewRecipe from './components/recipes/NewRecipe';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { baseUrl } from './Globals';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // fetch to db.json
    // set foods to array of foods from db.json

    // fetch(baseUrl + '/recipes')
    //   .then(resp => resp.json())
    //   .then(data => console.log('data', data))

    const fetchRecipes = async () => {
      const response = await fetch(baseUrl + '/recipes');
      const data = await response.json();
      setRecipes(data);
    }

    fetchRecipes();
  }, [])

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<ListRecipes recipes={recipes} />} />
        <Route path="/recipes/new" element={<NewRecipe />} />
      </Routes>
    </Router>
  );
}

export default App;
