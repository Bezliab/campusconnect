import React, { useEffect, useState } from "react";
import "../styles/home.css";

function Home() {
  // 1️⃣ Slideshow images
  const backgroundImages = [
    "https://s3.amazonaws.com/media.thecrimson.com/photos/2017/10/01/220933_1324562.jpg",
    "https://www.sjsu.edu/_images/people/ADV_campus-events-jgensheimer_1.jpg",
    "https://today.uic.edu/wp-content/uploads/2015/12/landscaped-quad.jpg",
    "https://i.pinimg.com/originals/ab/47/db/ab47db936365b54271138581f1b8b699.jpg",
    "https://www.sarahlawrence.edu/media/student-life/images/student_life_main_QDN_2590.jpg",
  ];

  const [currentBg, setCurrentBg] = useState(0);

  // change background every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-12-19T12:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const totalSeconds = Math.floor(diff / 1000);
      const seconds = totalSeconds % 60;
      const totalMinutes = Math.floor(totalSeconds / 60);
      const minutes = totalMinutes % 60;
      const totalHours = Math.floor(totalMinutes / 60);
      const hours = totalHours % 24;
      const days = Math.floor(totalHours / 24);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <section className="hero" aria-label="Hero slideshow">
        {/* Slides with fade */}
        {backgroundImages.map((src, i) => (
          <div
            key={i}
            className={`slide ${i === currentBg ? "active" : ""}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}

        <div className="hero-container">
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
