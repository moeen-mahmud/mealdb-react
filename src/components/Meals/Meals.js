//Importing Hooks
import React, { useEffect, useState } from "react";

//Importing CSS file
import "./Meals.css";

//Importing components
import Meal from "../Meal/Meal";
import Selection from "../Selection/Selection";

//The meals component
const Meals = () => {
  //Get and set the states
  const [meals, setMeals] = useState([]);
  const [selection, setSelection] = useState([]);
  const [displayMeal, setDisplayMeal] = useState([]);

  //Hooks for displaying initial foods
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);

  //Function for selecting a particular meal item
  const handleClick = (meal) => {
    const newSelection = [...selection, meal];
    setSelection(newSelection);
  };

  //Function for search mechanics
  const handleChange = (event) => {
    const searchText = event.target.value;
    searchText.toLowerCase();

    //Getting the api endpoints
    const endpointSearch = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    const endpointLetter = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`;

    //Conditions for loading data from endpoints
    if (searchText.length === 1) {
      fetch(endpointLetter)
        .then((res) => res.json())
        .then((data) => {
          if (data.meals !== null) {
            setDisplayMeal(data.meals);
          } else {
            return;
          }
        });
    } else {
      fetch(endpointSearch)
        .then((res) => res.json())
        .then((data) => {
          if (data.meals !== null) {
            setDisplayMeal(data.meals);
          } else {
            return;
          }
        });
    }
  };

  return (
    <>
      {/* Search box */}
      <div className="search-area">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search Meal"
          onChange={handleChange}
        />
      </div>

      <div className="all-meals">
        <div className="meal-area">
          <div>
            {/* Displaying the search result from search and keep it */}
            {displayMeal.map((meal) => (
              <Meal
                key={meal.idMeal}
                meal={meal}
                handleClick={handleClick}
              ></Meal>
            ))}
          </div>
          <div>
            {/* Displaying the initial meals after website load */}
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
          {/* Selection component */}
          <Selection selection={selection}></Selection>
        </div>
      </div>
    </>
  );
};

export default Meals;
