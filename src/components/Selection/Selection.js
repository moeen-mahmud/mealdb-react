import React from "react";
import "./Selection.css";

const Selection = (props) => {
  const { selection } = props;

  let mealQuantity = 0;
  let sameMeal = [];
  let distinctItem = [];
  let mealName = [];
  for (const meal of selection) {
    if (!meal.quantity) {
      meal.quantity = 1;
    }
    mealQuantity = mealQuantity + meal.quantity;
    mealName.push(meal.strMeal);

    if (sameMeal.indexOf(meal) === -1) {
      sameMeal.push(meal.strMeal);
    }
    for (const item of sameMeal) {
      if (distinctItem.indexOf(item) === -1) {
        distinctItem.push(item);
      }
    }
  }

  console.log(sameMeal);
  console.log(distinctItem);
  return (
    <div>
      <h3>Selected Meal: {distinctItem.length}</h3>
      <div className="selected-meal">
        <ul>
          {distinctItem.map((name) => (
            <li key={name.idMeal}>🍲 {name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Selection;
