import SelectedIngredient from "./SelectedIngredient";
import { useState, useEffect } from "react";

//Function filters out the duplicate objects
function filterObjects(ingredientArr) {
  return ingredientArr
    .filter(
      (ele, ind) =>
        ind === ingredientArr.findIndex((elem) => elem.name === ele.name)
    )
    .filter((value) => Object.keys(value).length !== 0);
}

//The list of picked ingredients from the searchbar
export default function SelectedIngredients({
  selectedIngredient,
  setNutritionValues,
  setSelectedIngredient,
}) {
  const [selectedIngredientList, setSelectedIngredientList] = useState([]);

  //List filtered out from initial state object and duplicates
  const filteredIngredientList = filterObjects([
    ...selectedIngredientList,
    selectedIngredient,
  ]);
  //This function adds the ingredient into the list everytime there is a change in the selected ingredient
  useEffect(() => {
    setSelectedIngredientList(filteredIngredientList);
  }, [selectedIngredient]);

  function handleNewList() {
    setSelectedIngredientList([]);
    setNutritionValues([]);
    setSelectedIngredient({});
  }

  return (
    <div className="selected-ingredient-content-holder">
      {selectedIngredientList.map((ingredient) => {
        return (
          <SelectedIngredient
            key={ingredient.name}
            ingredientInfo={ingredient}
            setSelectedIngredientList={setSelectedIngredientList}
            selectedIngredientList={selectedIngredientList}
            setSelectedIngredient={setSelectedIngredient}
          />
        );
      })}
      <span className="delete-button" onClick={() => handleNewList()}>
        New List
      </span>
    </div>
  );
}
