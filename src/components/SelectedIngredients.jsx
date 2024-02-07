import SelectedIngredient from "./SelectedIngredient";
import { useState, useEffect } from "react";

function filterObjects(ingredientArr) {
  return ingredientArr
    .filter(
      (ele, ind) =>
        ind === ingredientArr.findIndex((elem) => elem.name === ele.name)
    )
    .filter((value) => Object.keys(value).length !== 0);
}

export default function SelectedIngredients({ selectedIngredient }) {
  // const { response, fetchData } = fetchImg(selectedIngredient.name);

  // const imgUrl = response[0]?.urls.thumb;

  const [selectedIngredientList, setSelectedIngredientList] = useState([]);

  useEffect(() => {
    const filteredIngredientList = filterObjects([
      ...selectedIngredientList,
      selectedIngredient,
    ]);
    setSelectedIngredientList(filteredIngredientList);
  }, [selectedIngredient]);

  return (
    <div className="selected-ingredient-content-holder">
      {selectedIngredientList.map((ingredient, id) => {
        return <SelectedIngredient key={id} ingredientInfo={ingredient} />;
      })}
    </div>
  );
}
