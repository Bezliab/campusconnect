import React, { useEffect, useState } from "react";
import "../styles/home.css";

function Home() {
  const [timeLeft, setTimeLeft] = useState({
    months: 2,
    weeks: 3,
    days: 6,
    hours: 17,
    minutes: 48,
    seconds: 59,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { months, weeks, days, hours, minutes, seconds } = prev;

        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
              else {
                days = 6;
                if (weeks > 0) weeks--;
                else {
                  weeks = 3;
                  if (months > 0) months--;
                }
              }
            }
          }
        }
        return { months, weeks, days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <section className="hero overlay">
        <div className="hero-container hero-bg hero-text">
          <h1>Welcome to CampusConnect</h1>
          <p>
            Connecting you to every campus event. Stay updated and never miss
            out!
          </p>
        </div>
      </section>

      <div className="countdown-row">
        <h3 className="countdown-title">Countdown to TechFest</h3>
        <div className="timer">
          {Object.entries(timeLeft).map(([key, value]) => (
            <div className="time-box" key={key}>
              <span>{String(value).padStart(2, "0")}</span>
              <small>{key.charAt(0).toUpperCase() + key.slice(1)}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
