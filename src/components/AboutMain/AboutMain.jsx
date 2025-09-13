import React from "react";
import "./AboutMain.css";
import StatsCounter from "../StatCounter/statcounter";

function AboutMain() {
  return (
    <section className="about">
      <div className="about-hero df-jcc-aic">
        <div className="overlay"></div>
        <div className="about-hero-bg"></div>

        <div className="container">
          <p className="desc">
            Established in 1976 | Based in the United Kingdom
          </p>
        </div>
      </div>

      <section className="affiliate-section">
        <div className="container affiliate">
          <h1 className="about-title">Affiliated Partners</h1>
          <div className="affiliated-schools">
            <div className="school">
              <img
                src="https://ahep.ac.uk/wp-content/uploads/2024/02/187299.png"
                alt="Middlesex University"
                className="school-logo"
              />
              <span>Middlesex University</span>
            </div>
            <div className="school">
              <img
                src="https://live.staticflickr.com/8113/8697596712_3fbdae11cc_b.jpg"
                alt="University of Oxford"
                className="school-logo"
              />
              <span>University of Oxford</span>
            </div>
            <div className="school">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Shield_of_Imperial_College_London.svg/640px-Shield_of_Imperial_College_London.svg.png"
                alt="Imperial College London"
                className="school-logo"
              />
              <span>Imperial College London</span>
            </div>
            <div className="school">
              <img
                src="https://dlcportal.ui.edu.ng/_next/static/media/ui-logo.bf61628a.png"
                alt="University of Ibadan"
                className="school-logo"
              />
              <span>University of Ibadan</span>
            </div>
          </div>
        </div>
      </section>
      {/* Overview Section */}
      <section className="overview-section">
        <div className="container">
          <h1 className="about-title">Institute Overview</h1>
          <p className="overview-text">
            CampusConnect is a modern digital platform designed to enhance
            communication, collaboration, and engagement within the academic
            community. It serves as a hub where students, faculty, and staff can
            stay informed about events, access resources, and foster connections
            that enrich both academic and social life. By combining technology
            with user-friendly design, CampusConnect bridges the gap between
            learning, extracurricular activities, and campus culture.
          </p>
        </div>
      </section>
      <section className="mission-vision">
        <div className="container">
          <div className="mission">
            <h2>Our Mission</h2>
            <p>
              We aim to create a connected, inclusive, and innovative campus
              environment by providing seamless access to information,
              resources, and opportunities that empower students and faculty to
              thrive academically, socially, and professionally. We are
              dedicated to fostering a vibrant academic community where every
              member feels valued and supported. Our mission is to bridge gaps
              between departments, encourage interdisciplinary collaboration,
              and ensure that every student and staff member has the tools and
              information they need to succeed. Through continuous innovation
              and a commitment to excellence, we strive to make campus life more
              engaging, transparent, and accessible for all.
            </p>
          </div>
          <div className="mission">
            <h2>Our Vision</h2>
            <p>
              CampusConnect intends to be the leading campus engagement platform
              that transforms higher education communities into vibrant,
              well-connected ecosystems where collaboration, growth, and
              innovation flourish. We envision a future where technology
              seamlessly integrates with campus life, enabling effortless
              communication, real-time updates, and meaningful connections. Our
              vision is to inspire a culture of lifelong learning, inclusivity,
              and shared achievement, making our institution a model for
              academic and social excellence in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="departments-section">
        <div className="container">
          <h1 className="about-title">Departments</h1>
          <div className="departments-list">
            <div className="department-card">
              <h3>Department of Computer Science</h3>
              <p>
                Focused on software engineering, artificial intelligence, data
                science, and cybersecurity. Offers undergraduate and
                postgraduate programs with hands-on labs and industry
                partnerships.
              </p>
            </div>
            <div className="department-card">
              <h3>Department of Electrical Engineering</h3>
              <p>
                Covers electronics, power systems, telecommunications, and
                embedded systems. Students gain practical experience through
                projects and internships.
              </p>
            </div>
            <div className="department-card">
              <h3>Department of Mechanical Engineering</h3>
              <p>
                Specializes in robotics, thermodynamics, manufacturing, and
                automotive engineering. Emphasizes innovation and real-world
                problem solving.
              </p>
            </div>
            <div className="department-card">
              <h3>Department of Business Administration</h3>
              <p>
                Provides education in management, marketing, finance, and
                entrepreneurship. Prepares students for leadership roles in
                diverse industries.
              </p>
            </div>
            <div className="department-card">
              <h3>Department of Fine & Applied Arts</h3>
              <p>
                Provides education and hands-on experience in visual arts,
                design, and multimedia. Encourages creativity and portfolio
                development.
              </p>
            </div>
            <div className="department-card">
              <h3>Department of Humanities & Social Sciences</h3>
              <p>
                Offers courses in communication, psychology, sociology, and
                languages to foster well-rounded graduates with strong
                interpersonal skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h1 className="about-title">Meet Our Team</h1>
          <div className="team-list">
            <div className="team-card">
              <img
                src="/img/cyber.jpg"
                alt="Ajisola Victor"
                className="team-photo"
              />
              <h3>Ajisola Victor</h3>
              <p>
                Web Developer. Specializes in frontend architecture and user
                experience for CampusConnect.
              </p>
            </div>
            <div className="team-card">
              <img
                src="/img/joe.jpg"
                alt="Ogunmuyiwa Ireoluwa"
                className="team-photo"
              />
              <h3>Ogunmuyiwa Ireoluwa</h3>
              <p>
                Web Developer. Focuses on backend integration and optimization
                for the site.
              </p>
            </div>

            <div className="team-card">
              <img
                src="/img/Isaac.jpg"
                alt="Issac adenji"
                className="team-photo"
              />
              <h3>Adeniji Isaac</h3>
              <p>
                Web Developer. Responsible for UI enhancements and maintaining
                code quality.
              </p>
            </div>

            <div className="team-card">
              <img
                src="/img/ahamd.jpg"
                alt="Ahmad Akorede "
                className="team-photo"
              />
              <h3>Ahmad Akorede </h3>
              <p>
                Web Developer. Expert in responsive design and accessibility for
                CampusConnect.
              </p>
            </div>
            <div className="team-card">
              <img
                src="/img/musty.jpg"
                alt="Mustapha Akintola"
                className="team-photo"
              />
              <h3>Mustapha Akintola</h3>
              <p>
                Web Developer. Works on interactive features and event modules
                for the platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsCounter />

      <div className="highlight-section">
        <div className="container">
          <h1 className="about-title">Community Highlights</h1>

          <div className="highlight highlight-row">
            <div className="highlight-text">
              <h3>Information Access</h3>
              <p>
                CampusConnect provides a unified platform where students,
                parents, and educators can easily access critical information
                about the college — such as admission guidelines, course
                offerings, faculty profiles, and campus facilities. This
                simplifies research and decision-making for prospective students
                and fosters transparency within the academic community.
              </p>
            </div>
            <div className="highlight-image">
              <img
                src="https://www.timeshighereducation.com/campus/sites/default/files/2023-06/AstudentlearningAIliteracy.jpg"
                alt="Information Access"
              />
            </div>
          </div>

          <div className="highlight highlight-row reverse">
            <div className="highlight-text">
              <h3>Real-Time Updates </h3>
              <p>
                CampusConnect ensures users stay informed through real-time
                announcements, event alerts, academic calendar changes, and
                emergency updates. Whether it’s a class reschedule, exam
                timetable, or campus event, the platform delivers timely
                notifications directly to users' dashboards or devices,
                improving engagement and communication efficiency.
              </p>
            </div>
            <div className="highlight-image">
              <img
                src="https://img.freepik.com/free-vector/real-time-sync-concept-illustration_114360-457.jpg?semt=ais_hybrid&w=740"
                alt="Real-Time Updates"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container events-section">
        <h1 className="about-title">Key Annual Events</h1>
        <div className="events-list">
          <div className="event-category">
            <h2>Technical Events</h2>
            <ul>
              <li>
                <strong>TechFest</strong> (March): A showcase of student
                innovations, workshops, and guest lectures from industry
                experts.
              </li>
              <li>
                <strong>Hackathon</strong> (July): 24-hour coding marathon where
                teams solve real-world problems and compete for prizes.
              </li>
              <li>
                <strong>Robotics Championship</strong> (September):
                Inter-college robotics competition featuring design, build, and
                battle rounds.
              </li>
            </ul>
          </div>
          <div className="event-category">
            <h2>Cultural Events</h2>
            <ul>
              <li>
                <strong>Annual Day</strong> (November): A grand celebration with
                performances, awards, and guest speakers.
              </li>
              <li>
                <strong>Music Nights</strong> (February & August): Live music
                performances by students and invited artists.
              </li>
              <li>
                <strong>Dance Competitions</strong> (April): Inter-departmental
                dance battles and cultural showcases.
              </li>
            </ul>
          </div>
          <div className="event-category">
            <h2>Sports & Other Activities</h2>
            <ul>
              <li>
                <strong>Inter-college Sports Meet</strong> (January): Athletics,
                football, basketball, and more, fostering sportsmanship and
                teamwork.
              </li>
              <li>
                <strong>Blood Donation Drives</strong> (June & December):
                Bi-annual drives in collaboration with local hospitals.
              </li>
              <li>
                <strong>Alumni Meet</strong> (October): Reunion event for past
                graduates to network and share experiences.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMain;
