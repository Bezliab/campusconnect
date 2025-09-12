import React, { useTransition } from "react";
import CountUp from "react-countup";
import { TbEaseInOut } from "react-icons/tb";
// import "./statcounter.css";

const StatsCounter = () => {
  const stats = [
    { end: 17, label: "Faculties" },
    { end: 92, suffix: "+", label: "Departments" },
    { end: 35468, suffix: "+", label: "Students" },
  ];

  return (
    <div style={styles.section}>
      <div style={styles.grid}>
        {stats.map((item, index) => (
          <div key={index} style={styles.statBox}>
            <h2 style={styles.number}>
              <CountUp end={item.end} duration={2.5} separator="," />
              {item.suffix}
            </h2>
            <p style={styles.label}>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  section: {
    backgroundColor: "#fff",
    padding: "6rem 2rem 6rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
    gap: "2.4rem",
    maxWidth: "80rem",
    margin: "0 auto",
    textAlign: "center",
  },
  statBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  number: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "darkorange",
    margin: 0,
  },
  label: {
    fontSize: "1.2rem",
    color: "black",
    marginTop: "0.4rem",
  },
};

export default StatsCounter;
