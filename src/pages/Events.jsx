import React, { useState, useEffect } from "react";
import {
  Bookmark,
  BookmarkCheck,
  Filter,
  Users,
  Search,
  ChevronDown
} from "lucide-react";
import eventsData from "../data/events.json";
import EventCard from "../components/EventCard/EventCard";
import EventDetails from "./EventDetails";
import "../styles/events.css";

const EventCatalog = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [featuredEvent, setFeaturedEvent] = useState(null);
  const [bookmarkedEvents, setBookmarkedEvents] = useState(new Set());
  const [showBookmarked, setShowBookmarked] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Load events from JSON
    setEvents(eventsData.events);
    setFeaturedEvent(eventsData.featuredEvent);
    setFilteredEvents(eventsData.events);

    // Load bookmarks from localStorage
    const savedBookmarks = localStorage.getItem("bookmarkedEvents");
    if (savedBookmarks) {
      setBookmarkedEvents(new Set(JSON.parse(savedBookmarks)));
    }
  }, []);

  useEffect(() => {
    // Filter and sort events
    let filtered = [...events];

     // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(event => 
        event.name.toLowerCase().includes(query) ||
        event.category.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (event) => event.category === selectedCategory
      );
    }

    // Show bookmarked filter
    if (showBookmarked) {
      filtered = filtered.filter((event) => bookmarkedEvents.has(event.id));
    }

    // Sort events
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "date":
          return new Date(a.date) - new Date(b.date);
        case "name":
          return a.name.localeCompare(b.name);
        case "category":
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

    setFilteredEvents(filtered);
  }, [events, selectedCategory, sortBy, bookmarkedEvents, showBookmarked, searchQuery]);

  const handleBookmark = (eventId) => {
    const newBookmarks = new Set(bookmarkedEvents);
    if (newBookmarks.has(eventId)) {
      newBookmarks.delete(eventId);
    } else {
      newBookmarks.add(eventId);
    }
    setBookmarkedEvents(newBookmarks);
    localStorage.setItem("bookmarkedEvents", JSON.stringify([...newBookmarks]));
  };

  const handleEventClick = (eventId) => {
    const event = events.find((e) => e.id === eventId);
    setSelectedEvent(event);
    setSelectedEventId(eventId);
  };

  const handleBackToEvents = () => {
    setSelectedEventId(null);
    setSelectedEvent(null);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      academic: "#3B82F6",
      cultural: "#F59E0B",
      sports: "#10B981",
      departmental: "#8B5CF6",
    };
    return colors[category] || "#6B7280";
  };

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
          <div className="hero-event-info">
            <p>
              Discover upcoming college events, from tech fests and workshops to
              cultural nights and sports competitions — all in one place with
              CampusConnect.
            </p>
          </div>
        </div>
      </section>

      {/* Event Catalog Section */}
      <section className="catalog-section">
        <div className="container">
          {/* Controls */}
          <div className="catalog-controls">
            <div className="search-container">
              <div className="search-field">
                <Search size={20} />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="clear-search"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>
            
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
            {filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                isBookmarked={bookmarkedEvents.has(event.id)}
                onBookmark={handleBookmark}
                getCategoryColor={getCategoryColor}
                formatDate={formatDate}
                onViewDetails={handleEventClick}
              />
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="no-events">
              <h3>No events found</h3>
              <p>
                Try adjusting your filters or check back later for new events.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default EventCatalog;
