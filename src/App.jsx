import React, { useEffect, useState } from "react";
import axios from "axios";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import "../src/App.css";

function App() {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    region: "",
    topic: "",
  });

  useEffect(() => {
    fetchData();
  }, [filters]);

  const fetchData = async () => {
    const params = new URLSearchParams(filters).toString();
    const response = await axios.get(`http://localhost:5000/api/data?${params}`);
    setData(response.data);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const uniqueValues = (key) =>
    [...new Set(data.map((item) => item[key]))].filter((v) => v);

  return (
    <div className="container">
      <h1 className="text-center">Dashboard</h1>

      {/* Filters */}
      <div className="filters">
        <select name="region" onChange={handleFilterChange}>
          <option value="">Select Region</option>
          {uniqueValues("region").map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>

        <select name="topic" onChange={handleFilterChange}>
          <option value="">Select Topic</option>
          {uniqueValues("topic").map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>

      {/* Charts */}
      <BarChart data={data} />
      <LineChart data={data} />
    </div>
  );
}

export default App;
