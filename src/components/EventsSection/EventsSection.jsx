import React from "react";
import "./EventsSection.css";

const upcomingEvents = [
  {
    id: 1,
    title: "TechFest 2025",
    date: "20 Sept 2025",
    description:
      "An intercollegiate technical festival showcasing projects, coding contests, and workshops.",
    img: "https://elearning.hse.ru/data/2020/07/20/1595955349/3iStock-669775712.jpg",
  },
  {
    id: 2,
    title: "Cultural Night",
    date: "05 Oct 2025",
    description:
      "An evening of music, dance, and drama, celebrating the diverse culture of our campus.",
    img: "https://media04.marktspiegel.de/article/2018/01/17/2/205782_XXL.jpg",
  },
  {
    id: 3,
    title: "Sports Meet",
    date: "12 Oct 2025",
    description:
      "Annual campus-wide sports competition bringing together teams across all departments.",
    img: "https://cdn.culture.ru/images/30a9dc7b-3987-5c7c-bd33-e1bda7277971",
  },
];

const pastEvents = [
  {
    id: 1,
    title: "Freshers’ Orientation",
    date: "10 Aug 2025",
    description:
      "Welcoming new students with an orientation program featuring talks, tours, and activities.",
    img: "https://www.rsuh.ru/upload/ido/Education%20child/dop.edu.jpg",
  },
  {
    id: 2,
    title: "Science Exhibition",
    date: "22 Jul 2025",
    description:
      "Showcasing innovative projects and experiments from the science and engineering faculties.",
    img: "https://www.hse.ru/data/2024/07/05/1905758346/3iStock-1481351241.jpg.(1000x1000x1).jpg",
  },
  {
    id: 3,
    title: "Alumni Meetup",
    date: "15 Jun 2025",
    description:
      "A networking event for alumni and students to connect, share experiences, and build relationships.",
    img: "https://images.ctfassets.net/7thvzrs93dvf/7aVGKtOsspwcrLmUIb57JX/7e8e998a2e599f7866419a1c4c292c66/344_876935_160708alumninetwork_Amanda_hero.jpg",
  },
];

function EventsSection() {
  return (
    <section className="events-section container">
      {/* Upcoming Events */}
      <h2 className="title">Upcoming Events</h2>
      <div className="events-grid">
        {upcomingEvents.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.img} alt={event.title} className="event-img" />
            <div className="event-content">
              <h3>{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Past Events */}
      <h2 className="title">Past Events</h2>
      <div className="events-grid">
        {pastEvents.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.img} alt={event.title} className="event-img" />
            <div className="event-content">
              <h3>{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;