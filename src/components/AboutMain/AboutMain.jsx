import React from "react";
import "./AboutMain.css";
function AboutMain() {
  return (
    <section className="about">
      <div className="about-hero df-jcc-aic">
        <div className="overlay"></div>
        <div className="about-hero-bg"></div>

        <div className="container">
          <h1 className="about-hero-title">About CampusConnect</h1>
          <p className="desc">
            Established in 1976 | Based in the United Kingdom
          </p>
        </div>
      </div>
      <div className="container affiliate">
        <h1 className="about-title">
          Affiliated Partners
        </h1>
        <div className="affiliated-schools">
          <div className="school">
            <img src="https://ih1.redbubble.net/image.3644243783.5128/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg" alt="University of Cambridge" className="school-logo" />
            <span>University of Cambridge</span>
          </div>
          <div className="school">
            <img src="https://live.staticflickr.com/8113/8697596712_3fbdae11cc_b.jpg" alt="University of Oxford" className="school-logo" />
            <span>University of Oxford</span>
          </div>
          <div className="school">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Shield_of_Imperial_College_London.svg/640px-Shield_of_Imperial_College_London.svg.png" alt="Imperial College London" className="school-logo" />
            <span>Imperial College London</span>
          </div>
          <div className="school">
            <img src="https://changewildlifeconsumers.org/site/assets/files/1226/resizes/resource_university-college-london-ucl-centre-for-behaviour-change-website-1.jpg" alt="University College London" className="school-logo" />
            <span>University College London</span>
          </div>
        </div>
      </div>
      <div className="highlight-section">
        <div className="container">
          <h1 className="about-title">Community Highlights</h1>

          {/* First highlight*/}
          <div className="highlight highlight-row">
            <div className="highlight-text">
              <h3>Information Access</h3>
              <p>
                CampusConnect provides a unified platform where students, parents, and educators can easily access critical
                information about the college — such as admission guidelines, course offerings, faculty profiles, and campus
                facilities. This simplifies research and decision-making for prospective students and fosters transparency
                within the academic community.
              </p>
            </div>
            <div className="highlight-image">
              <img src="https://www.timeshighereducation.com/campus/sites/default/files/2023-06/AstudentlearningAIliteracy.jpg" alt="Information Access" />
            </div>
          </div>

          {/* Second highlight*/}
          <div className="highlight highlight-row reverse">

            <div className="highlight-text">
              <h3>Real-Time Updates </h3>
              <p>
                CampusConnect ensures users stay informed through real-time announcements, event alerts, academic calendar
                changes, and emergency updates. Whether it’s a class reschedule, exam timetable, or campus event, the platform
                delivers timely notifications directly to users' dashboards or devices, improving engagement and communication
                efficiency.
              </p>
            </div>
            <div className="highlight-image">
              <img src="https://img.freepik.com/free-vector/real-time-sync-concept-illustration_114360-457.jpg?semt=ais_hybrid&w=740" alt="Real-Time Updates" />
            </div>
          </div>
        </div>
      </div>
      <div className="container events-section">
        <h1 className="about-title">Key Annual Events</h1>
        <div className="events-list">
          {/* Technical Events */}
          <div className="event-category">
            <h2>Technical Events</h2>
            <ul>
              <li>
                <strong>TechFest</strong> (March): A showcase of student innovations, workshops, and guest lectures from industry experts.
              </li>
              <li>
                <strong>Hackathon</strong> (July): 24-hour coding marathon where teams solve real-world problems and compete for prizes.
              </li>
              <li>
                <strong>Robotics Championship</strong> (September): Inter-college robotics competition featuring design, build, and battle rounds.
              </li>
            </ul>
          </div>
          {/* Cultural Events */}
          <div className="event-category">
            <h2>Cultural Events</h2>
            <ul>
              <li>
                <strong>Annual Day</strong> (November): A grand celebration with performances, awards, and guest speakers.
              </li>
              <li>
                <strong>Music Nights</strong> (February & August): Live music performances by students and invited artists.
              </li>
              <li>
                <strong>Dance Competitions</strong> (April): Inter-departmental dance battles and cultural showcases.
              </li>
            </ul>
          </div>
          {/* Sports & Other Activities */}
          <div className="event-category">
            <h2>Sports & Other Activities</h2>
            <ul>
              <li>
                <strong>Inter-college Sports Meet</strong> (January): Athletics, football, basketball, and more, fostering sportsmanship and teamwork.
              </li>
              <li>
                <strong>Blood Donation Drives</strong> (June & December): Bi-annual drives in collaboration with local hospitals.
              </li>
              <li>
                <strong>Alumni Meet</strong> (October): Reunion event for past graduates to network and share experiences.
              </li>
            </ul>
          </div>
        </div>
      </div>

    </section>
  );
}

export default AboutMain;