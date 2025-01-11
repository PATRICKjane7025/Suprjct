import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.year),
    datasets: [
      {
        label: "Likelihood",
        data: data.map((item) => item.likelihood),
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default LineChart;
