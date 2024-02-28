import { Doughnut } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import labelsLine from "../../utils/labelsLine";
import { useState, useEffect } from "react";

let doughnutLabelsLine = labelsLine();

const options = {
  layout: {
    padding: 75,
  },
  // maintainAspectRatio: false,
  aspectRatio: 1.3,
  plugins: {
    legend: false,
  },
  responsive: true,
};

export default function DoughnutChart({ totalVal }) {
  const [displayData, setDisplayData] = useState({
    labels: [],
    datasets: [],
  });

  const mockData = {
    labels: ["Proteins", "Carbs", "Fats"],
    datasets: [
      {
        label: "Weight in grams",
        data: [2, 2, 2],
        backgroundColor: ["#F29544", "#53f3f8", "#A64E46"],
        borderColor: "#213547",
        spacing: 5,
        borderRadius: 5,
      },
    ],
  };

  useEffect(() => {
    setDisplayData({
      ...displayData,
      labels: ["Proteins", "Carbs", "Fats"],
      datasets: [
        {
          label: "Weight in grams",
          data: [
            totalVal.totalProtein,
            totalVal.totalCarbohydrate,
            totalVal.totalFat,
          ],
          backgroundColor: ["#F29544", "#53f3f8", "#A64E46"],
          borderColor: "#213547",
          spacing: 5,
          borderRadius: 5,
        },
      ],
    });
  }, [totalVal]);

  return (
    <Doughnut
      data={totalVal.totalCal <= 0 ? mockData : displayData}
      options={options}
      plugins={[doughnutLabelsLine]}
    />
  );
}
