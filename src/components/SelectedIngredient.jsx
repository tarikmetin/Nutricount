import { useState, useContext, useEffect, useRef } from "react";
import { NutritionContext } from "../App";
import fetchImg from "../hooks/fetchImg";

//Filter function
function filterObjects(ingredientArr) {
  return ingredientArr.filter((ele, ind) => {
    return (
      ind ===
      ingredientArr.findIndex((elem) => {
        return elem.name === ele.name;
      })
    );
  });
}

export default function SelectedIngredient({
  ingredientInfo,
  setSelectedIngredientList,
  selectedIngredientList,
  setSelectedIngredient,
}) {
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
    fat: `${Math.floor((ingredientInfo.fat / 100) * quantity)}`,
    protein: `${Math.floor((ingredientInfo.protein / 100) * quantity)}`,
    carbohydrate: `${Math.floor(
      (ingredientInfo.carbohydrate / 100) * quantity
    )}`,
    calories: `${Math.floor((ingredientInfo.calories / 100) * quantity)}`,
  };

  //Every change on the input value is register the quantity and also updates the nutrition list
  function handleSetQuantity(e) {
    if (e.target.value.length > 5) {
      return;
    }
    setQuantity(e.target.value);
    setNutritionValues(
      //Not to duplicate the same object over and over again...
      filterObjects([calculatedNutrition, ...nutritionValues])
    );
  }

  //This function allows setNutritionValues to be set immediately after the component mounted and whenever quantity state is changed.This is really important because NutritionDisplay component uses nutritionValues state and it gotta be synched with the calculatedNutrition object which is used to be displayed nutrition of individual ingredients
  useEffect(() => {
    setNutritionValues(
      filterObjects([calculatedNutrition, ...nutritionValues])
    );
  }, [quantity]);

  //This fetch the image of the ingredient and creates a imgUrl variable
  const { response, fetchData } = fetchImg(ingredientInfo.name);
  const imgUrl = response[0]?.urls.small;

  function handleCloseIngredient(selectedIngredient) {
    const nutritionIndexNumber = nutritionValues.findIndex(
      (ing) => ing.name === selectedIngredient.name
    );
    const renderIndexNumber = selectedIngredientList.findIndex(
      (ing) => ing.name === selectedIngredient.name
    );

    setNutritionValues((prevState) => {
      prevState.splice(nutritionIndexNumber, 1);
      return [...prevState];
    });

    setSelectedIngredientList((prevState) => {
      prevState.splice(renderIndexNumber, 1);
      return [...prevState];
    });

    setSelectedIngredient({});
  }

  return (
    <div className="ingredient-info-card">
      <div
        className="card-text"
        style={{
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${imgUrl})`,
        }}
      >
        <h1>{ingredientInfo.name}</h1>

        <div className="nutrition-info">
          <p>Protein: {calculatedNutrition.protein} gr</p>
          <p>Carbohydrate: {calculatedNutrition.carbohydrate} gr</p>
          <p>Fat: {calculatedNutrition.fat} gr</p>
          <p>Calories :{calculatedNutrition.calories}</p>
        </div>
        <div className="input-area">
          <input
            type="number"
            value={quantity}
            onChange={(e) => handleSetQuantity(e)}
            onWheel={(e) => e.target.blur()}
          />
          <span>gr</span>
          <span
            className="close-ingredient"
            onClick={() => handleCloseIngredient(ingredientInfo)}
          >
            X
          </span>
        </div>
      </div>
    </div>
  );
}
