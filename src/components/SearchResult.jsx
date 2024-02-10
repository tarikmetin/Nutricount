import { Context } from "../App";
import { useContext } from "react";

export default function SearchResult({ ingredient }) {
  const [
    {
      ingSelection: [selectedIngredient, setSelectedIngredient],
    },
  ] = useContext(Context);

  function handleSelectIngredient() {
    setSelectedIngredient(ingredient);
  }

  return (
    <div className="single-result" onClick={handleSelectIngredient}>
      <h2>{ingredient.name}</h2>
    </div>
  );
}
