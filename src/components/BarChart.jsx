import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.year),
    datasets: [
      {
        label: "Intensity",
        data: data.map((item) => item.intensity),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default BarChart;
