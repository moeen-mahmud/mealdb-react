//Importing necessary files
import React from "react";
import "./Selection.css";

//The selection component
const Selection = (props) => {
  const { selection } = props;

  //Utilities variable for getting the particular meal
  let totalMeal = [];
  let distinctItem = [];
  let mealCounts = {};
  let mealName = [];

  for (const meal of selection) {
    mealName.push(meal.strMeal); //This will get the name of meal and set it to the mealName array

    //This condition will count the total meal item
    if (totalMeal.indexOf(meal) === -1) {
      totalMeal.push(meal.strMeal);
    }

    //This will help to find the unique meals
    for (const item of totalMeal) {
      if (distinctItem.indexOf(item) === -1) {
        distinctItem.push(item);
      }
    }
  }

  //This will helps to find out how many times a meal has selected
  totalMeal.forEach((x) => (mealCounts[x] = (mealCounts[x] || 0) + 1));
  const mealsQty = Object.values(mealCounts);

  return (
    <div className="selection-area">
      <h3>Selected Meal: {distinctItem.length}</h3>
      <div className="selected-meal">
        <div>
          {distinctItem.map((name) => (
            <p key={name}>🍲 {name}</p>
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
