import { useState, useEffect, createContext } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import SelectedIngredients from "./components/SelectedIngredients";

export const Context = createContext();

function App() {
  const [selectedIngredient, setSelectedIngredient] = useState({});
  const [foundIngredients, setFoundIngredients] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);

  //This dismisses the search results without needing to delete the text in the search bar by clicking anywhere in the app except the search bar.
  function handleClickCloseSearch(event) {
    if (
      event.target.className !== "search-input" &&
      event.target.className !== "content-holder" &&
      event.target.className !== "img-holder" &&
      event.target.alt !== "fetchImg"
    ) {
      setSearchOpen(false);
    }
  }

  //This function checks the length of found ingredients array and if it less then one object in the array then search results closes itself
  useEffect(() => {
    if (foundIngredients.length > 0) {
      setSearchOpen(true);
    } else {
      setSearchOpen(false);
    }
  }, [foundIngredients]);

  return (
    <>
      <Context.Provider value={[selectedIngredient, setSelectedIngredient]}>
        <div className="App" onClick={(e) => handleClickCloseSearch(e)}>
          <Header />
          <div className="interface-container">
            <SearchBar
              setFoundIngredients={setFoundIngredients}
              setSearchOpen={setSearchOpen}
              searchState={searchOpen}
            />
            <SearchResults
              ingredientList={foundIngredients}
              searchState={searchOpen}
            />
            <SelectedIngredients selectedIngredient={selectedIngredient} />
          </div>
        </div>
      </Context.Provider>
    </>
  );
}

export default App;
