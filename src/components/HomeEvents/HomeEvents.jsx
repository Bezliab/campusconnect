import React from "react";
import "./HomeEvents.css"; 
import { Home } from "lucide-react";
import "../../styles/home.css";

const offers = [
  {
    id: 1,
    title: "Stay Updated with Campus Events",
    description:
      "Access a regularly updated event calendar showcasing academic, cultural, and social activities. Stay informed and never miss an important happening on campus.",
    img: "https://www.humimeter.com/wp-content/uploads/2022/08/m130701c105.jpg",
    reverse: false,
  },
  {
    id: 2,
    title: "Discover Event Highlights",
    description:
      "Explore featured events, spotlights, and celebrations through engaging banners and image slideshows. Relive moments with galleries and exciting updates.",
    img: "https://www.findlay.edu/admissions/visit-experience/PublishingImages/Oiler%20Preview%20Day%201%20Photo%20Gallery/WTS-Aerial-1.jpg",
    reverse: true,
  },
  {
    id: 3,
    title: "Easy Participation & Registration",
    description:
      "Quickly register for events through simple forms. Whether you’re a student, staff, or guest, participation is made easy with clear instructions and responsive design.",
    img: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1vpMc3.img?w=2500&amp;h=1563&amp;m=4&amp;q=81",
    reverse: false,
  },
];

function HomeEvents() {
  return (
    <section className="offers-section">
      <h2 className="title">What We Offer</h2>

      <div className="offers-container container">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className={`offer ${offer.reverse ? "offer-reverse" : ""}`}
          >
            <div className="offer-text">
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
            </div>
            <div className="offer-image">
              <img src={offer.img} alt={offer.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeEvents;
