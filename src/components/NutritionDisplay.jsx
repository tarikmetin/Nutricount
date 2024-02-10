import { useEffect, useState } from "react";

export default function NutritionDisplay({ nutritionValues }) {
  const [totalCal, setTotalCal] = useState(0);

  useEffect(() => {
    setTotalCal(
      nutritionValues
        .map((item) => item.calories)
        .reduce((acc, cur) => +acc + +cur, +0)
    );
  }, [nutritionValues]);

  return (
    <div className="display-area">
      <h1>{totalCal}</h1>
    </div>
  );
}
