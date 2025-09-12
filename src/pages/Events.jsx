import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import {
  Bookmark,
  BookmarkCheck,
  Filter,
  Users,
  Search,
  ChevronDown,
  ChevronUp 
} from "lucide-react";
import eventsData from "../data/events.json";
import EventCard from "../components/EventCard/EventCard";
import Pagination from "../components/Pargination";
import EventDetails from "./EventDetails";
import "../styles/events.css";
import { useBookmarks } from "../context/BookmarkContext";

// Helper to get event by id
const getEventById = (events, id) => events.find(e => String(e.id) === String(id));

const EventDetailsWrapper = ({ events }) => {
  const { id } = useParams();
  const event = getEventById(events, id);
  return <EventDetails event={event} />;
};

const EventCatalog = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [featuredEvent, setFeaturedEvent] = useState(null);
  const [showBookmarked, setShowBookmarked] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [searchQuery, setSearchQuery] = useState('');
  const { bookmarkedEvents } = useBookmarks();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(6);

  useEffect(() => {
    setEvents(eventsData.events);
    setFeaturedEvent(eventsData.featuredEvent);
    setFilteredEvents(eventsData.events);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, sortBy, showBookmarked, searchQuery]);

  useEffect(() => {
    let filtered = [...events];
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(event => 
        event.name.toLowerCase().includes(query)
      );
    }
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (event) => event.category === selectedCategory
      );
    }
    if (showBookmarked) {
      filtered = filtered.filter((event) => bookmarkedEvents.has(event.id));
    }
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

  // Calculate pagination
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
  const startIndex = (currentPage - 1) * eventsPerPage;
  const endIndex = startIndex + eventsPerPage;
  const currentEvents = filteredEvents.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll to top of events section
    document.querySelector('.catalog-section')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const handleEventCardViewDetails = (eventId) => {
    navigate(`/events/${eventId}`);
  };

  const handleShowBookmarkedToggle = () => {
    setShowBookmarked(prev => !prev);
    setCurrentPage(1);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
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
                    <div className="filter-group filter-group-select">
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
                      <span className="chevron-icon">
                        <ChevronDown size={18} />
                      </span>
                    </div>
                    
                    <div className="filter-group filter-group-select">
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
                      <span className="chevron-icon">
                        <ChevronDown size={18} />
                      </span>
                    </div>
                  </div>

                  <button 
                    className={`bookmark-toggle ${showBookmarked ? 'active' : ''}`}
                    onClick={handleShowBookmarkedToggle}
                  >
                    <ChevronDown size={20} />
                    {showBookmarked ? 'Show All Events' : 'Show Bookmarked'}
                  </button>
                </div>

                {/* Events Grid */}
<div className="events-container">
  {currentEvents.map((event) => (   
    <EventCard
      key={event.id}
      event={event}
      getCategoryColor={getCategoryColor}
      formatDate={formatDate}
      onViewDetails={handleEventCardViewDetails}
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
              {/* Pagination */}
          {filteredEvents.length > 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              itemsPerPage={eventsPerPage}
              totalItems={filteredEvents.length}
            />
          )}
            </section>
          </div>
        }
      />
      <Route
        path=":id"
        element={<EventDetailsWrapper events={events} />}
      />
    </Routes>
  );
};

export default EventCatalog;