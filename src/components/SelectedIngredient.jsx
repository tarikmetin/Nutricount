import { useState, useContext } from "react";
import { NutritionContext } from "../App";

export default function SelectedIngredient({ ingredientInfo }) {
  const [
    {
      nutrition: [nutritionValues, setNutritionValues],
    },
  ] = useContext(NutritionContext);

  console.log(nutritionValues);

  //State value is accepted as 100 gr as default
  const [quantity, setQuantity] = useState(100);

  //Calculation of nutrition values based on the given quantity
  const calculatedNutrition = {
    calories: `${(ingredientInfo.calories / 100) * quantity}`,
  };

  //Every change on the input value is register the quantity
  function handleSetQuantity(e) {
    setQuantity(e.target.value);
  }

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
