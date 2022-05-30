import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import './styles.css';
function App() {
  const [recipes, setRecipes] = useState([]);
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const APP_ID = "93aad7e2";
  const APP_KEY = "e619f12de8d0a64eeab4847e48aa653b";
  useEffect(() => {
    fetchData();
  }, [query]);
  const fetchData = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    // console.log(data.hits);
  };

  const searchItem = (e) => {
    e.preventDefault();
    setQuery(input);
    setInput("");
  };

  return (
    <div className="App">
      <h1> Find Any Recipe Here </h1>
      <form onSubmit={searchItem} className="search-form">
        <input
          placeholder="Search recipe"
          type="text"
          className="input-search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button disabled={!input} type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="app__recipes">
        {recipes.map((recipe) => {
          return <Recipe recipe={recipe.recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
