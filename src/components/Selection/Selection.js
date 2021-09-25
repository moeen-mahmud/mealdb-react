import React from "react";
import "./Selection.css";

const Selection = (props) => {
  const { selection } = props;
  let sameMeal = [];
  let distinctItem = [];
  let mealCounts = {};
  let mealName = [];
  for (const meal of selection) {
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

  sameMeal.forEach((x) => (mealCounts[x] = (mealCounts[x] || 0) + 1));
  const onlyMeals = Object.values(mealCounts);

  console.log(sameMeal);
  console.log(distinctItem);
  console.log(Object.values(mealCounts));
  return (
    <div className="selection-area">
      <h3>Selected Meal: {distinctItem.length}</h3>
      <div className="selected-meal">
        <div>
          <h3>Meal Name</h3>
          {distinctItem.map((name) => (
            <p key={name.idMeal}>🍲 {name}</p>
          ))}
        </div>
        <div>
          <h3>Quantity</h3>
          {onlyMeals.map((count) => (
            <p key={props.idMeal}>{count}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Selection;
