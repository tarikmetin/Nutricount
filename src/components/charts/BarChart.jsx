import { Chart } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";

const width = window.innerWidth < 600;

const options = {
  layout: {
    padding: width ? 50 : 75,
  },
  aspectRatio: width ? 0.85 : 1.3,
  plugins: {
    legend: false,
  },
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        font: {
          size: 24,
        },
      },
    },
    y: {
      grid: {
        display: true,
      },
      ticks: {
        font: {
          size: 24,
        },
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
          barThickness: 28,
          label: "Nutrition Values",
          data: [totalVal.totalCal],
          backgroundColor: ["#F7DC6F"],
        },
      ],
    });
  }, [totalVal]);

  return <Bar data={displayData} options={options} />;
}
