import SearchResult from "./SearchResult";

export default function SearchResults({ ingredientList, searchState }) {
  return (
    <div
      className={
        searchState
          ? "search-results-wrapper"
          : "search-results-wrapper inactive"
      }
    >
      {ingredientList.map((ingredient, id) => {
        return <SearchResult key={id} ingredient={ingredient} />;
      })}
    </div>
  );
}
