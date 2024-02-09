import { useState, useContext, useEffect } from "react";
import { NutritionContext } from "../App";

//Filter function
function filterObjects(ingredientArr) {
  return ingredientArr.filter(
    (ele, ind) =>
      ind === ingredientArr.findIndex((elem) => elem.name === ele.name)
  );
}

export default function SelectedIngredient({ ingredientInfo }) {
  const [
    {
      nutrition: [nutritionValues, setNutritionValues],
    },
  ] = useContext(NutritionContext);

  //Quantity of selected ingredient is accepted as 100 gr as default
  const [quantity, setQuantity] = useState(100);

  //Calculation of nutrition values based on the given quantity
  const calculatedNutrition = {
    name: `${ingredientInfo.name}`,
    fat: `${(ingredientInfo.fat / 100) * quantity}`,
    protein: `${(ingredientInfo.protein / 100) * quantity}`,
    carbohydrates: `${(ingredientInfo.carbohydrates / 100) * quantity}`,
    calories: `${Math.floor((ingredientInfo.calories / 100) * quantity)}`,
  };

  //Every change on the input value is register the quantity and also updates the nutrition list
  function handleSetQuantity(e) {
    setQuantity(e.target.value);
    setNutritionValues(
      //Not to duplicate the same object over and over again...
      filterObjects([calculatedNutrition, ...nutritionValues])
    );
  }

  //This function allows setNutritionValues to be set immediately after the component mounted and whenever quantity state is changed.This is really important because NutritionDisplay component uses nutritionValues state and it gotta be synched with the calculatedNutrition object which is used to be displayed nutrition of individual ingredients
  useEffect(
    () =>
      setNutritionValues(
        filterObjects([calculatedNutrition, ...nutritionValues])
      ),
    [quantity]
  );

  return (
    <div className="ingredient-info-card">
      <form action=""></form>
      <h1>{ingredientInfo.name}</h1>
      <input
        type="number"
        defaultValue={quantity}
        onChange={(e) => handleSetQuantity(e)}
      />
      <h1>{calculatedNutrition.calories}</h1>
    </div>
  );
}
