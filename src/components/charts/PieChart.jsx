import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useState, useEffect } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  plugins: {
    legend: false,
  },
  responsive: true,
};

export default function PieChart({ totalVal }) {
  const [displayData, setDisplayData] = useState({
    labels: ["Proteins", "Carbs", "Fats"],
    datasets: [],
  });

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
          borderColor: "#213547",
        },
      ],
    });
  }, [totalVal]);

  return <Pie data={displayData} options={options} />;
}
