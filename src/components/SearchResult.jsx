import fetchImg from "../hooks/fetchImg";
import { Context } from "../App";
import { useState, useContext } from "react";

export default function SearchResult({ ingredient }) {
  const [selectedIngredient, setSelectedIngredient] = useContext(Context);

  const { response, fetchData } = fetchImg(ingredient.name);

  const imgUrl = response[0]?.urls.thumb;

  function handleSelectIngredient() {
    setSelectedIngredient({ ...ingredient, imgUrl });
  }

  return (
    <div className="single-result" onClick={handleSelectIngredient}>
      <div className="img-holder">
        <img src={imgUrl} alt="fetchImg" />
      </div>
      <div className="content-holder">
        <h2>{ingredient.name}</h2>
        <div className="info-holder">
          <p>protein: {ingredient.protein}</p>
          <p>carbohydrate: {ingredient.carbohydrate}</p>
          <p>fat: {ingredient.fat}</p>
        </div>
      </div>
    </div>
  );
}
