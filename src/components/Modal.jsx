import search from "../imgs/search.jpg";
import adjust from "../imgs/adjust.jpg";
import examine from "../imgs/examine.jpg";
import remove from "../imgs/remove.jpg";

export default function Modal({ setModalState }) {
  return (
    <div className="modal">
      <div className="overlay" onClick={() => setModalState(false)}></div>
      <div className="modal-content">
        <p>
          I was always in search for simple calorie calculator that has fast and
          simple gui. Since I couldn't find one online that suits my preference,
          I built one for myself.
        </p>
        <p>
          This tool is built for you to understand how many calories you are
          consuming in one single meal. Naturally, you need to know the quantity
          of ingredients you put in a meal in grams.Then all you need to do
          start using search bar to find the ingredient you used.
        </p>
        <p>
          Let's imagine you decided to cook a nice chicken breast and rice
          alongside for the lunch. Simply search these ingredients in the search
          bar as shown below.
        </p>
        <div className="img-container">
          <img src={search} alt="" />
        </div>
        <p>
          After clicking an ingredient in the search bar, it will appear as a
          card below and now you can adjust the quantity you used for this meal.
          You can see the macronutritions and calories written in the card
          changes as quantity of the ingredient changes.
        </p>
        <div className="img-container">
          <img src={adjust} alt="" />
        </div>
        <p>
          To see total macronutrition composition and calories from all the
          selected ingredients, you need to check the pie and bar chart on top
          of the search bar. It simply show the sum of the macronutrition and it
          also changes as you modify the quantity of the ingredients.
        </p>
        <div className="img-container">
          <img src={examine} alt="" />
        </div>
        <p>
          You can remove the ingredients either by clicking on "X" icon on top
          right of the selected ingredient card or by clicking the "New List".
          The charts are going to be updated accordingly.
        </p>
        <div className="img-container">
          <img src={remove} alt="" />
        </div>
        <p>
          You may not find every food ingredient you are searching for in this
          app. After all this is a simple application which is created to
          showcase my skillset in frontend web development. But still you can go
          to the{" "}
          <a href="https://github.com/tarikmetin/Nutricount">github page</a> and
          find the source code there. You can simply add new ingredients to the
          ingredientsData.js file and you are ready to go.
        </p>
      </div>
    </div>
  );
}
