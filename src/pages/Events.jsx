import React, { useEffect, useMemo, useState } from "react";
import EventCard from "../components/EventCard/EventCard.jsx";
import eventsFallback from "../data/events.json";
import "../styles/events.css";

const DATA_URL = "/data/events.json";
const BOOKMARK_KEY = "campusconnect:bookmarkedEvents:v1";

// Sorting options
const SORTS = [
  { key: "dateAsc", label: "Date" },
  { key: "nameAsc", label: "Name" },
  { key: "categoryAsc", label: "Category" }
];

// Sorting functions
const sorters = {
  dateAsc: (a, b) => new Date(a.date) - new Date(b.date),
  dateDesc: (a, b) => new Date(b.date) - new Date(a.date),
  nameAsc: (a, b) => a.title.localeCompare(b.title),
  categoryAsc: (a, b) => a.category.localeCompare(b.category)
};

// Get unique categories from events
const uniqueCategories = (events) => {
  const set = new Set();
  events.forEach((e) => e.category && set.add(e.category));
  return ["All", ...Array.from(set).sort((a, b) => a.localeCompare(b))];
};

const Events = () => {
  const [allEvents, setAllEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("dateAsc");
  const [query, setQuery] = useState("");

  // bookmarks is an array of event titles
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const raw = localStorage.getItem(BOOKMARK_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  // NEW: state to show only bookmarks
  const [showBookmarks, setShowBookmarks] = useState(false);

  // Fetch events.json
  useEffect(() => {
    let alive = true;
    const fetchData = async () => {
      try {
        const res = await fetch(DATA_URL, { cache: "no-store" });
        if (!res.ok) throw new Error("Network error");
        const data = await res.json();
        if (alive) setAllEvents(Array.isArray(data) ? data : []);
      } catch (e) {
        console.warn("Falling back to imported events.json", e);
        if (alive) setAllEvents(Array.isArray(eventsFallback) ? eventsFallback : []);
      } finally {
        if (alive) setLoading(false);
      }
    };
    fetchData();
    return () => {
      alive = false;
    };
  }, []);

  // Persist bookmarks
  useEffect(() => {
    try {
      localStorage.setItem(BOOKMARK_KEY, JSON.stringify(bookmarks));
    } catch (e) {
      console.error("Could not persist bookmarks", e);
    }
  }, [bookmarks]);

  // Build category list from events
  const categories = useMemo(() => uniqueCategories(allEvents), [allEvents]);

  // Filtered list
  const filtered = useMemo(() => {
    let list = [...allEvents];

    if (showBookmarks) {
      list = list.filter((e) => bookmarks.includes(e.title));
    }

    if (category !== "All") list = list.filter((e) => e.category === category);

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (e) =>
          e.title.toLowerCase().includes(q) ||
          e.description.toLowerCase().includes(q) ||
          e.venue.toLowerCase().includes(q) ||
          (e.category && e.category.toLowerCase().includes(q))
      );
    }

    list.sort(sorters[sortBy] ?? sorters.dateAsc);
    return list;
  }, [allEvents, category, sortBy, query, bookmarks, showBookmarks]);

  // Toggle bookmark
  const toggleBookmark = (title) => {
    setBookmarks((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  return (
    <section className="events">
      <header className="events__header">
        <h1 className="events__title">CampusConnect — Events</h1>
        <p className="events__subtitle">
          Explore upcoming activities across Academic, Cultural, Sports, and Departmental tracks.
        </p>
      </header>

      <div className="events-toolbar">
  {/* Search */}
  <div className="filter-group search-group">
    <input
      className="input search-input"
      type="search"
      placeholder="Search events, departments..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      aria-label="Search events"
    />
  </div>

  {/* Filters */}
  <div className="filter-group filters">
    <label htmlFor="category" className="filter-label">Category:</label>
    <select
      id="category"
      className="select"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      {categories.map((cat) => (
        <option key={cat} value={cat}>{cat}</option>
      ))}
    </select>

    <label htmlFor="sortBy" className="filter-label">Sort:</label>
    <select
      id="sortBy"
      className="select"
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
    >
      {SORTS.map((s) => (
        <option key={s.key} value={s.key}>{s.label}</option>
      ))}
    </select>

    <button
      className={`btn-clear ${showBookmarks ? "active" : ""}`}
      onClick={() => setShowBookmarks((prev) => !prev)}
    >
      {showBookmarks ? "Show All Events" : "Show Bookmarked"}
    </button>
  </div>
</div>


      {/* Status messages */}
      {loading ? (
        <div className="events__loading">Loading events…</div>
      ) : error ? (
        <div className="events__error">
          Failed to load events. Please check <code>data/events.json</code>.
        </div>
      ) : filtered.length === 0 ? (
        <div className="events__empty">No events match your filters.</div>
      ) : (
        <div className="events__grid">
          {filtered.map((evt) => (
            <EventCard
              key={evt.id}
              event={evt}
              isBookmarked={bookmarks.includes(evt.title)}
              onToggleBookmark={toggleBookmark}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Events;
