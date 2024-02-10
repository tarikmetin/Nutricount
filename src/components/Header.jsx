import nutriCount from "../imgs/nutriCount.svg";

export default function Header() {
  return (
    <div className="header">
      <img src={nutriCount} alt="NutriCount Logo" />
      <h1>Meal Calorie Calculator</h1>
    </div>
  );
}
