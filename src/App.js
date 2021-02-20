import React, { useEffect, useState } from 'react';
import axios from 'axios';

import RecipesComponent from './components/RecipeComponents';

import './App.css';

const APP_KEY = 'afdea2e364074d809c96d005b7b4bcc6';

const App = () => {

  const [recipes, setRecipers] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('shredded chicken breast meat');

  const url = `https://api.spoonacular.com/food/ingredients/autocomplete?query=${query}&apiKey=${APP_KEY}`;

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line
  }, [query]);

  const getRecipes = async () => {
    await axios.get(url)
      .then((response) => {
        console.log(response.data)
        setRecipers(response.data[0]);
      });
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
  };

  console.log(recipes)

  return (
    <div className="App">
      <form onSubmit={getSearch} className='search-form'>
        <input
          className='search-bar'
          type='text'
          value={search}
          onChange={updateSearch} />
        <button className='search-btn' type='submit'> SEARCH FOR MEE! </button>
      </form>

      {/* {recipes.map(recipe => (
        <RecipesComponent
          key={recipe.id}
          title={recipe.title}
          image={recipe.image} />
      ))} */}
    </div>
  );
}

export default App;
