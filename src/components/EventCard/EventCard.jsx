import React from 'react';
import { Bookmark, BookmarkCheck, Calendar, MapPin, Clock } from 'lucide-react';

const EventCard = ({ event, isBookmarked, onBookmark, getCategoryColor, formatDate, onEventClick }) => {
  return (
    <div className="event-card" onClick={() => onEventClick(event.id)}>
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
        <h3 className="event-title">{event.name}</h3>
        
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
        
        <button 
          className={`bookmark-btn ${isBookmarked ? 'bookmarked' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onBookmark(event.id);
          }}
        >
          {isBookmarked ? (
            <BookmarkCheck size={20} />
          ) : (
            <Bookmark size={20} />
          )}
          {isBookmarked ? 'Bookmarked' : 'Bookmark'}
        </button>
      </div>
    </div>
  );
};

export default EventCard;