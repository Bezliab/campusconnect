import React from 'react';
import { Bookmark, BookmarkCheck, Calendar, MapPin, Clock, Eye } from 'lucide-react';
import { useBookmarks } from '../../context/BookmarkContext';

const EventCard = ({ event, getCategoryColor, formatDate, onViewDetails }) => {
  const { bookmarkedEvents, toggleBookmark } = useBookmarks();

  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(event.id); // This will navigate to /events/:id
    }
  };

  const isBookmarked = bookmarkedEvents.has(event.id);

  return (
    <div className="event-card">
      <div className="event-image">
        <img src={event.image} alt={event.name} />
        <div 
          className="category-badge" 
          style={{ backgroundColor: getCategoryColor(event.category) }}
        >
          {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
        </div>
      </div>
      
      <div className="event-content">
        <h3 className="event-title-card">{event.name}</h3>
        
        <div className="event-details">
          <div className="detail-item">
            <Calendar size={16} />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="detail-item">
            <Clock size={16} />
            <span>{event.time}</span>
          </div>
          <div className="detail-item">
            <MapPin size={16} />
            <span>{event.venue}</span>
          </div>
        </div>
        
        <p className="event-description">{event.description}</p>
        
        <div className="event-actions-btn">
          <button 
            className="view-details-btn"
            onClick={handleViewDetails}
          >
            <Eye size={18} />
            View Details
          </button>
          <button 
            className={`bookmark-btn ${isBookmarked ? 'bookmarked' : ''}`}
            onClick={() => toggleBookmark(event.id)}
          >
            {isBookmarked ? (
              <BookmarkCheck size={18} />
            ) : (
              <Bookmark size={18} />
            )}
            {isBookmarked ? 'Bookmarked' : 'Bookmark'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;