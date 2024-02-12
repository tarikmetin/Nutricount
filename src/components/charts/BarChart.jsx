import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  plugins: {
    legend: false,
  },
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

export default function BarChart({ totalVal }) {
  const [displayData, setDisplayData] = useState({
    labels: ["Proteins", "Carbs", "Fats", "Calories"],
    datasets: [],
  });

  useEffect(() => {
    setDisplayData({
      ...displayData,
      datasets: [
        {
          label: "Nutrition Values",
          data: [
            totalVal.totalProtein,
            totalVal.totalCarbohydrate,
            totalVal.totalFat,
            totalVal.totalCal,
          ],
          backgroundColor: ["#F29544", "#2A2640", "#A64E46", "#F7DC6F"],
        },
      ],
    });
  }, [totalVal]);

  return <Bar data={displayData} options={options} />;
}
