import React from "react";
import "./Selection.css";

const Selection = (props) => {
  const { selection } = props;
  let totalMeal = [];
  let distinctItem = [];
  let mealCounts = {};
  let mealName = [];
  for (const meal of selection) {
    mealName.push(meal.strMeal);

    if (totalMeal.indexOf(meal) === -1) {
      totalMeal.push(meal.strMeal);
    }

    for (const item of totalMeal) {
      if (distinctItem.indexOf(item) === -1) {
        distinctItem.push(item);
      }
    }
  }

  totalMeal.forEach((x) => (mealCounts[x] = (mealCounts[x] || 0) + 1));
  const mealsQty = Object.values(mealCounts);

  console.log(totalMeal);
  console.log(distinctItem);
  console.log(Object.values(mealCounts));
  return (
    <div className="selection-area">
      <h3>Selected Meal: {distinctItem.length}</h3>
      <div className="selected-meal">
        <div>
          {distinctItem.map((name) => (
            <p key={props.idMeal}>🍲 {name}</p>
          ))}
        </div>
        <div>
          {mealsQty.map((count) => (
            <p>{count} pack</p>
          ))}
        </div>
      </div>
      <h2>Total meal packs: {totalMeal.length}</h2>
    </div>
  );
};

export default Selection;
