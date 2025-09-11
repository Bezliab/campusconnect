import React, { useState, useEffect } from 'react';
import { Bookmark, BookmarkCheck, Filter, Calendar, MapPin, Clock, Users } from 'lucide-react';
import eventsData from '../data/events.json';
import EventCard from '../components/EventCard/EventCard';
import EventDetails from './EventDetails';
import '../styles/events.css';

const EventCatalog = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [featuredEvent, setFeaturedEvent] = useState(null);
  const [bookmarkedEvents, setBookmarkedEvents] = useState(new Set());
  const [showBookmarked, setShowBookmarked] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [timeLeft, setTimeLeft] = useState({});
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    // Load events from JSON
    setEvents(eventsData.events);
    setFeaturedEvent(eventsData.featuredEvent);
    setFilteredEvents(eventsData.events);

    // Load bookmarks from localStorage
    const savedBookmarks = localStorage.getItem('bookmarkedEvents');
    if (savedBookmarks) {
      setBookmarkedEvents(new Set(JSON.parse(savedBookmarks)));
    }
  }, []);

  useEffect(() => {
    // Countdown timer for featured event
    if (featuredEvent) {
      const timer = setInterval(() => {
        const now = new Date().getTime();
        const eventDate = new Date(featuredEvent.date).getTime();
        const distance = eventDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });

        if (distance < 0) {
          clearInterval(timer);
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [featuredEvent]);

  useEffect(() => {
    // Filter and sort events
    let filtered = [...events];

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(event => event.category === selectedCategory);
    }

    // Show bookmarked filter
    if (showBookmarked) {
      filtered = filtered.filter(event => bookmarkedEvents.has(event.id));
    }

    // Sort events
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(a.date) - new Date(b.date);
        case 'name':
          return a.name.localeCompare(b.name);
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

    setFilteredEvents(filtered);
  }, [events, selectedCategory, sortBy, bookmarkedEvents, showBookmarked]);

  const handleBookmark = (eventId) => {
    const newBookmarks = new Set(bookmarkedEvents);
    if (newBookmarks.has(eventId)) {
      newBookmarks.delete(eventId);
    } else {
      newBookmarks.add(eventId);
    }
    setBookmarkedEvents(newBookmarks);
    localStorage.setItem('bookmarkedEvents', JSON.stringify([...newBookmarks]));
  };

  const handleEventClick = (eventId) => {
    const event = events.find(e => e.id === eventId);
    setSelectedEvent(event);
    setSelectedEventId(eventId);
  };

  const handleBackToEvents = () => {
    setSelectedEventId(null);
    setSelectedEvent(null);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
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

  // If an event is selected, show the EventDetails component
  if (selectedEventId && selectedEvent) {
    return (
      <EventDetails
        event={selectedEvent}
        onBack={handleBackToEvents}
        isBookmarked={bookmarkedEvents.has(selectedEventId)}
        onBookmark={handleBookmark}
      />
    );
  }

  return (
    <div className="event-catalog">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img src={featuredEvent?.image} alt="Featured Event" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-background">
          <img src={featuredEvent?.image} alt="Featured Event" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="college-title">Maybe College Events</h1>
          <div className="featured-event-info">
            <h2>{featuredEvent?.name}</h2>
            <p>{featuredEvent?.description}</p>
          </div>
          <div className="countdown">
            <h3>Event Starts In:</h3>
            <div className="countdown-timer">
              <div className="time-unit">
                <span className="number">{timeLeft.days || 0}</span>
                <span className="label">Days</span>
              </div>
              <div className="time-unit">
                <span className="number">{timeLeft.hours || 0}</span>
                <span className="label">Hours</span>
              </div>
              <div className="time-unit">
                <span className="number">{timeLeft.minutes || 0}</span>
                <span className="label">Minutes</span>
              </div>
              <div className="time-unit">
                <span className="number">{timeLeft.seconds || 0}</span>
                <span className="label">Seconds</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Catalog Section */}
      <section className="catalog-section">
        <div className="container">
          {/* Controls */}
          <div className="catalog-controls">
            <div className="filters">
              <div className="filter-group">
                <Filter size={20} />
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="filter-select"
                >
                  <option value="all">All Categories</option>
                  <option value="academic">Academic Events</option>
                  <option value="cultural">Cultural Events</option>
                  <option value="sports">Sports Events</option>
                  <option value="departmental">Departmental Events</option>
                </select>
              </div>
              
              <div className="filter-group">
                <Users size={20} />
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="filter-select"
                >
                  <option value="date">Sort by Date</option>
                  <option value="name">Sort by Name</option>
                  <option value="category">Sort by Category</option>
                </select>
              </div>
            </div>

            <button 
              className={`bookmark-toggle ${showBookmarked ? 'active' : ''}`}
              onClick={() => setShowBookmarked(!showBookmarked)}
            >
              <BookmarkCheck size={20} />
              {showBookmarked ? 'Show All Events' : 'Show Bookmarked'}
            </button>
          </div>

          {/* Events Grid */}
          <div className="events-container">
            {filteredEvents.map(event => (
              <EventCard
                key={event.id}
                event={event}
                isBookmarked={bookmarkedEvents.has(event.id)}
                onBookmark={handleBookmark}
                getCategoryColor={getCategoryColor}
                formatDate={formatDate}
                onEventClick={handleEventClick}
              />
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="no-events">
              <h3>No events found</h3>
              <p>Try adjusting your filters or check back later for new events.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default EventCatalog;