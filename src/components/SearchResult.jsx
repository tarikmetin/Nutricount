import { Context } from "../App";
import { useContext } from "react";

export default function SearchResult({ ingredient }) {
  const [
    {
      ingSelection: [selectedIngredient, setSelectedIngredient],
    },
  ] = useContext(Context);

  // const { response, fetchData } = fetchImg(ingredient.name);

  // const imgUrl = response[0]?.urls.thumb;

  function handleSelectIngredient() {
    setSelectedIngredient(ingredient);
  }

  return (
    <div className="single-result" onClick={handleSelectIngredient}>
      <div className="content-holder">
        <h2>{ingredient.name}</h2>
      </div>
    </div>
  );
}
