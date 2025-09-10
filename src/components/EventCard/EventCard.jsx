import React from "react";
import PropTypes from "prop-types";
import "./EventCard.css"; // no inline styles — style via this file

const EventCard = ({ event, isBookmarked, onToggleBookmark }) => {
  const {
    id,
    title,
    description,
    date,
    time,
    venue,
    category,
    department,
    isFeatured,
    image,
    registrationLink
  } = event;

  const formattedDate = new Date(date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric"
  });

  return (
    <article className={`event-card ${isFeatured ? "featured" : ""}`} data-id={id}>
      {image && (
        <div className="event-card__media">
          <img src={image} alt={title} loading="lazy" className="event-card__img" />
          {isFeatured && <span className="event-card__badge">Featured</span>}
        </div>
      )}

      <div className="event-card__body">
        <div className="event-card__head">
          <h3 className="event-card__title">{title}</h3>
        </div>
        <p>{category}</p>
        <p className="event-card__desc">{description}</p>
        <ul className="event-card__meta">
          <li><strong>Date:</strong> {formattedDate}</li>
          <li><strong>Time:</strong> {time}</li>
          <li><strong>Venue:</strong> {venue}</li>
          <li><strong>Department:</strong> {department}</li>
        </ul>
        {/* Bookmark button (star) — toggles bookmark by event title */}
          <button
            className={`bookmark-btn ${isBookmarked ? "bookmarked" : ""}`}
            onClick={() => onToggleBookmark(title)}
            aria-pressed={!!isBookmarked}
            aria-label={isBookmarked ? `Remove bookmark for ${title}` : `Bookmark ${title}`}
            title={isBookmarked ? "Bookmarked" : "Bookmark"}
            type="button"
          >
            {isBookmarked ? (
              // filled star SVG
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.558L19.335 24 12 19.897 4.665 24l1.636-8.692L.6 9.75l7.732-1.732L12 .587z" />
              </svg>
            ) : (
              // outline star SVG
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 17.3l6.18 3.98-1.64-7.03L21.9 9.24l-7.19-.62L12 2 9.29 8.62 2.1 9.24l5.36 4.99L5.82 21.28z" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            )}
          </button>
      </div>
    </article>
  );
};

EventCard.propTypes = {
  event: PropTypes.object.isRequired,
  isBookmarked: PropTypes.bool,
  onToggleBookmark: PropTypes.func.isRequired
};

export default EventCard;
