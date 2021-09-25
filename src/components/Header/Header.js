//Importing necessary files
import React from "react";
import "./Header.css";

//Main header component
const Header = () => {
  return (
    <div className="header-section">
      <h1>FavMeal!</h1>
      <small>Search & grab your favorite meal now</small>
      <nav>
        <a href="/home">Home</a>
        <a href="/restaurant">Restaurant</a>
        <a href="/recipies">Recipies</a>
        <a href="/blog">Blog</a>
      </nav>
    </div>
  );
};

export default Header;
