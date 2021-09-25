import React from "react";
import "./Selection.css";

const Selection = (props) => {
  const { selection } = props;

  let mealQuantity = 0;
  let sameMeal = [];
  let mealName = [];
  for (const meal of selection) {
    if (!meal.quantity) {
      meal.quantity = 1;
    }
    mealQuantity = mealQuantity + meal.quantity;
    mealName.push(meal.strMeal);
  }
  console.log(props);
  return (
    <div>
      <h3>Selected Meal: {mealQuantity}</h3>
      <div className="selected-meal">
        <ul>
          {mealName.map((name) => (
            <li key={name.idMeal}>
              🍲 {name} {sameMeal}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Selection;
