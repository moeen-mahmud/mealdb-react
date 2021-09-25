import React, { useEffect, useState } from "react";
import "./Meals.css";
import Meal from "../Meal/Meal";
import Selection from "../Selection/Selection";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [selection, setSelection] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);

  const handleClick = (meal) => {
    const newSelection = [...selection, meal];
    setSelection(newSelection);
  };

  return (
    <div className="all-meals">
      <div className="meal-area">
        {meals.map((meal) => (
          <Meal key={meal.idMeal} meal={meal} handleClick={handleClick}></Meal>
        ))}
      </div>
      <div className="selection-area">
        <Selection selection={selection}></Selection>
      </div>
    </div>
  );
};

export default Meals;
