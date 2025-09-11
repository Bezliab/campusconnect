import React, { useEffect, useState } from "react";
import { IoMailOpenOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
  const backgroundImages = [
    "https://s3.amazonaws.com/media.thecrimson.com/photos/2017/10/01/220933_1324562.jpg",
    "https://www.sjsu.edu/_images/people/ADV_campus-events-jgensheimer_1.jpg",
    "https://today.uic.edu/wp-content/uploads/2015/12/landscaped-quad.jpg",
    "https://i.pinimg.com/originals/ab/47/db/ab47db936365b54271138581f1b8b699.jpg",
    "https://www.sarahlawrence.edu/media/student-life/images/student_life_main_QDN_2590.jpg",
  ];

  const [currentBg, setCurrentBg] = useState(0);

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
          <p className="subheading">
            CampusConnect, your go-to platform for all campus events. Whether
            it's academic seminars, cultural festivals, sports events, or social
            gatherings, we've got you covered.
          </p>
          <div className="hero-btn">
            <Link to="/events" className="feature-btn primary-btn">Explore events</Link>
            <Link to="/about" className="feature-btn register-btn">About Us</Link>
          </div>
        </div>
      </section>

      {/* COuntdown */}
      <div className="countdown-row">
        <h3 className="title">Countdown to TechGala '25</h3>
        <div className="timer">
          {Object.entries(timeLeft).map(([key, value]) => (
            <div className="time-box" key={key}>
              <span>{String(value).padStart(2, "0")}</span>
              <small>{key.charAt(0).toUpperCase() + key.slice(1)}</small>
            </div>
          ))}
        </div>
      </div>

      {/* Latest events */}
      <div className="container info-section">
        <h2 className="title">The latest from CampusConnect</h2>
        <p className="subtitle">
          We aim to foster a vibrant campus community by keeping you informed
          and engaged.
        </p>
        <div className="latest-events">
          {/* Map through latest events and display them */}
          <div className="event-card">
            <h3>Campus Carnival '25</h3>
            <p>
              Join us for a day of fun, food, and festivities on April 15th!
            </p>
          </div>
          <div className="event-card">
            <h3>Spring Festival 2024</h3>
            <p>
              Join us for a day of fun, food, and festivities on April 15th!
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <section className="container newsletter">
        <div className="newsletter-content">
          <h2 className="title">Subscribe to our Newsletter</h2>
          <p className="subtitle">
            Stay updated with the latest news and events from CampusConnect.
          </p>
        </div>
        <div className="newsletter-form-container">
          <form className="newsletter-form">
            <div className="icon">
              <IoMailOpenOutline />
            </div>
            <input type="email" placeholder="boluwarin215@gmail.com" required />
          </form>
          <button className="feature-btn register-btn">Subscribe</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
