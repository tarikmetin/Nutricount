import { useEffect, useState } from "react";
import PieChart from "./charts/PieChart";

export default function NutritionDisplay({ nutritionValues }) {
  const [totalVal, setTotalVal] = useState({
    totalProtein: 0,
    totalCarbohydrate: 0,
    totalFat: 0,
    totalCal: 0,
  });

  const [displayData, setDisplayData] = useState({
    labels: ["Proteins", "Carbs", "Fats"],
    datasets: [],
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

  useEffect(() => {
    setDisplayData({
      ...displayData,
      datasets: [
        {
          label: "Weight in grams",
          data: [
            totalVal.totalProtein,
            totalVal.totalCarbohydrate,
            totalVal.totalFat,
          ],
          backgroundColor: ["#F29544", "#2A2640", "#A64E46"],
        },
      ],
    });
  }, [totalVal]);

  return (
    <div className="display-area">
      <div className="text-info">
        <h1>Total Protein: {totalVal.totalProtein} gr</h1>
        <h1>Total Carbohydrates: {totalVal.totalCarbohydrate} gr</h1>
        <h1>Total Fat: {totalVal.totalFat} gr</h1>
        <h1>Total Calories: {totalVal.totalCal} cal</h1>
      </div>
      <div className="chart-info">
        <PieChart chartData={displayData} />
      </div>
    </div>
  );
}
