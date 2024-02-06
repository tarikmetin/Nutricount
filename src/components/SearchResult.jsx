import fetchImg from "../hooks/fetchImg";

export default function SearchResult({ ingredient }) {
  const { response, fetchData } = fetchImg(ingredient.name);

  const imgUrl = response[0]?.urls.thumb;

  return (
    <div
      className="single-result"
      onClick={() => {
        console.log("hola");
      }}
    >
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
