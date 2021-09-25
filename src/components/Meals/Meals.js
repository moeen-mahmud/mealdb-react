import React, { useEffect, useState } from "react";
import "./Meals.css";
import Meal from "../Meal/Meal";
import Selection from "../Selection/Selection";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [selection, setSelection] = useState([]);
  const [displayMeal, setDisplayMeal] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);

  const handleClick = (meal) => {
    const newSelection = [...selection, meal];
    setSelection(newSelection);
  };

  const handleChange = (event) => {
    const searchText = event.target.value;
    searchText.toLowerCase();
    const endpoint = `https://www.themealdb.com/api/json/v1/1/search.php?f=${
      searchText || "b"
    }`;
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        if (data.meals !== null) {
          setDisplayMeal(data.meals);
        } else {
          return;
        }
      });
  };

  return (
    <>
      <div className="search-area">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search Meal (only first letter)"
          onChange={handleChange}
        />
      </div>
      <div className="all-meals">
        <div className="meal-area">
          <div>
            {displayMeal.map((meal) => (
              <Meal
                key={meal.idMeal}
                meal={meal}
                handleClick={handleClick}
              ></Meal>
            ))}
          </div>
          <div>
            {meals.map((meal) => (
              <Meal
                key={meal.idMeal}
                meal={meal}
                handleClick={handleClick}
              ></Meal>
            ))}
          </div>
        </div>
        <div className="selection-area">
          <Selection selection={selection}></Selection>
        </div>
      </div>
    </>
  );
};

export default Meals;
