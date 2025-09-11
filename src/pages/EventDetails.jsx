import React from 'react';
import { ArrowLeft, Calendar, Clock, MapPin, Tag, Bookmark, BookmarkCheck } from 'lucide-react';
import '../styles/eventDetail.css';

const EventDetails = ({ event, onBack, isBookmarked, onBookmark }) => {
  if (!event) {
    return (
      <div className="event-details-container">
        <div className="event-not-found">
          <h2>Event Not Found</h2>
          <p>The requested event could not be found.</p>
          <button onClick={onBack} className="back-button">
            <ArrowLeft size={20} />
            Back to Events
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      academic: '#3B82F6',
      cultural: '#F59E0B',
      sports: '#10B981',
      departmental: '#8B5CF6'
    };
    return colors[category] || '#6B7280';
  };

  return (
    <div className="event-details-container">
      <div className="event-details-header">
        <button onClick={onBack} className="back-button">
          <ArrowLeft size={20} />
          Back to Events
        </button>
      </div>

      <div className="event-details-content">
        <div className="event-hero">
          <div className="event-hero-image">
            <img src={event.image} alt={event.name} />
            <div className="event-hero-overlay"></div>
          </div>
          <div className="event-hero-content">
            <div 
              className="event-category-badge"
              style={{ backgroundColor: getCategoryColor(event.category) }}
            >
              <Tag size={16} />
              {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
            </div>
            <h1 className="event-title">{event.name}</h1>
            <div className="event-meta">
              <div className="meta-item">
                <Calendar size={20} />
                <span>{formatDate(event.date)}</span>
              </div>
              <div className="meta-item">
                <Clock size={20} />
                <span>{event.time}</span>
              </div>
              <div className="meta-item">
                <MapPin size={20} />
                <span>{event.venue}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="event-body">
          <div className="event-main-content">
            <div className="event-description-section">
              <h2>About This Event</h2>
              <p className="event-full-description">{event.description}</p>
              
              {event.additionalInfo && (
                <div className="additional-info">
                  <h3>Additional Information</h3>
                  <p>{event.additionalInfo}</p>
                </div>
              )}
            </div>
          </div>

          <div className="event-sidebar">
            <div className="event-actions">
              <button 
                className={`bookmark-button ${isBookmarked ? 'bookmarked' : ''}`}
                onClick={() => onBookmark(event.id)}
              >
                {isBookmarked ? (
                  <>
                    <BookmarkCheck size={20} />
                    Bookmarked
                  </>
                ) : (
                  <>
                    <Bookmark size={20} />
                    Bookmark Event
                  </>
                )}
              </button>
            </div>

            <div className="event-quick-info">
              <h3>Quick Info</h3>
              <div className="quick-info-item">
                <strong>Date:</strong>
                <span>{formatDate(event.date)}</span>
              <div className="quick-info-item">
                <strong>Category:</strong>
                <span style={{ color: getCategoryColor(event.category) }}>
                  {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                </span>
              </div>
            </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;