import React from "react";
import "./Meal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandRock } from "@fortawesome/free-solid-svg-icons";

const Meal = (props) => {
  const { strMeal, strCategory, strArea, strMealThumb } = props.meal;
  const grabIcon = <FontAwesomeIcon icon={faHandRock}></FontAwesomeIcon>;

  return (
    <div className="meal">
      <img src={strMealThumb} alt={strMeal} />
      <div className="meal-info">
        <h1>{strMeal}</h1>
        <p>Category: {strCategory}</p>
        <p>Origin: {strArea}</p>
        <button onClick={() => props.handleClick(props.meal)}>
          Grab {grabIcon}{" "}
        </button>
      </div>
    </div>
  );
};

export default Meal;
