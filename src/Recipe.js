import React from "react";
import "./styles.css";
import style from "./recipe.module.css";
const Recipe = ({ recipe }) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.title}>{recipe.label}</h1>
      <img src={recipe.image} className={style.image} alt="no" />

      <div className={style.title}>Calories:</div>
      <p className={style.sub_item}>{recipe.calories}</p>
      {/* <div className={style.title}>
        {console.log(recipe.dietLabels.length)}
        Diet Labels
      </div>
      {recipe.dietLabels.map((label) => {
        return <p className={style.sub_item}>{label}</p>;
      })} */}
      {/* <h3 className={style.title}>Health Labels</h3>
      <ul>
        {recipe.healthLabels.map((health) => {
          return (
            <>
              <li className={style.sub_item}>{health}</li>
              <br />
            </>
          );
        })}
      </ul> */}
      <h2 className={style.title}>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient) => {
          return (
            <div>
              <li>{ingredient.text}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default Recipe;
