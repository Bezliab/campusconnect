import React from "react";
import CountUp from "react-countup";
import "./statcounter.css";

const StatsCounter = () => {
  const stats = [
    { end: 17, label: "Faculties" },
    { end: 92, suffix: "+", label: "Departments" },
    { end: 35468, suffix: "+", label: "Students" },
  ];

  return (
    <div className="stats-section">
      <div className="stats-grid">
        {stats.map((item, index) => (
          <div key={index} className="stat-box">
            <h2 className="stat-number">
              <CountUp end={item.end} duration={3.5} separator="," />
              {item.suffix}
            </h2>
            <p className="stat-label">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCounter;
