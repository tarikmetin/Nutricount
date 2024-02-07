import { useState } from "react";
import { INGREDIENTS } from "../constants/ingredientsData";

export default function SearchBar({
  setFoundIngredients,
  setSearchOpen,
  setInput,
  input,
}) {
  //Function takes the ingredients matching with the input and put them in a new list called results
  const grabIngredient = (value) => {
    const results = INGREDIENTS.filter((ingredient) => {
      return (
        value && ingredient.name.toLowerCase().includes(value.toLowerCase())
      );
    });
    setFoundIngredients(results);
  };

  //As we type on the search bar input changes and input value is used to be searched in grabIngredient function
  //value = e.target.value
  const handleChange = (text) => {
    grabIngredient(input);
    if (text.length <= 1) {
      setFoundIngredients([]);
    }
    setInput(text);
  };

  //Search results can be dismissed by clicking on the app while searchbar still having a text. This functions below ensures that search bar can be opened again when you click on the search bar (assuming search bar still have text in it)
  function handleClickOpenSearch() {
    setSearchOpen(true);
  }

  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Start typing ingredients here..."
        value={input}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        onClick={handleClickOpenSearch}
      />
    </div>
  );
}
