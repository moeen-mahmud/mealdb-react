import React from "react";
import "./Meal.css";

const Meal = (props) => {
  const { strMeal, strCategory, strArea, strMealThumb } = props.meal;

  return (
    <div className="meal">
      <img src={strMealThumb} alt={strMeal} />
      <div className="meal-info">
        <h1>{strMeal}</h1>
        <p>Category: {strCategory}</p>
        <p>Origin: {strArea}</p>
        <button onClick={() => props.handleClick(props.meal)}>Grab Me</button>
      </div>
    </div>
  );
};

export default Meal;
