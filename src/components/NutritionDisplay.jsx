import { useEffect, useState } from "react";
import PieChart from "./charts/DoughnutChart";
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
      <div className="chart-info">
        <BarChart totalVal={totalVal} />
      </div>
      <div className="chart-info">
        <PieChart totalVal={totalVal} />
      </div>
    </div>
  );
}
