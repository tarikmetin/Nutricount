import { Chart } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";

const options = {
  layout: {
    padding: 0,
  },
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
    labels: ["Calories"],
    datasets: [],
  });

  useEffect(() => {
    setDisplayData({
      ...displayData,
      datasets: [
        {
          barThickness: 20,
          label: "Nutrition Values",
          data: [totalVal.totalCal],
          backgroundColor: ["#F7DC6F"],
        },
      ],
    });
  }, [totalVal]);

  return <Bar data={displayData} options={options} />;
}
