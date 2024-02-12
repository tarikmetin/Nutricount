import { useEffect, useState } from "react";
import PieChart from "./charts/PieChart";
import BarChart from "./charts/BarChart";

export default function NutritionDisplay({ nutritionValues }) {
  const [totalVal, setTotalVal] = useState({
    totalProtein: 0,
    totalCarbohydrate: 0,
    totalFat: 0,
    totalCal: 0,
  });

  useEffect(() => {
    setTotalVal({
      totalProtein: nutritionValues
        .map((item) => item.protein)
        .reduce((acc, cur) => +acc + +cur, +0),
      totalCarbohydrate: nutritionValues
        .map((item) => item.carbohydrate)
        .reduce((acc, cur) => +acc + +cur, +0),
      totalFat: nutritionValues
        .map((item) => item.fat)
        .reduce((acc, cur) => +acc + +cur, +0),
      totalCal: nutritionValues
        .map((item) => item.calories)
        .reduce((acc, cur) => +acc + +cur, +0),
    });
  }, [nutritionValues]);

  return (
    <div className="display-area">
      {/* <div className="text-info">
        <h1>Total Protein: {totalVal.totalProtein} gr</h1>
        <h1>Total Carbohydrates: {totalVal.totalCarbohydrate} gr</h1>
        <h1>Total Fat: {totalVal.totalFat} gr</h1>
        <h1>Total Calories: {totalVal.totalCal} cal</h1>
      </div> */}
      <div className="chart-info bar">
        <BarChart totalVal={totalVal} />
      </div>
      <div className="chart-info pie">
        <PieChart totalVal={totalVal} />
      </div>
    </div>
  );
}
