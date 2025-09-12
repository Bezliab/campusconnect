import React, { createContext, useContext, useState, useEffect } from "react";

const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarkedEvents, setBookmarkedEvents] = useState(new Set());

  useEffect(() => {
    const saved = localStorage.getItem("bookmarkedEvents");
    if (saved) setBookmarkedEvents(new Set(JSON.parse(saved)));
  }, []);

  useEffect(() => {
    localStorage.setItem("bookmarkedEvents", JSON.stringify([...bookmarkedEvents]));
  }, [bookmarkedEvents]);

  const toggleBookmark = (eventId) => {
    setBookmarkedEvents(prev => {
      const next = new Set(prev);
      if (next.has(eventId)) next.delete(eventId);
      else next.add(eventId);
      return next;
    });
  };

  return (
    <BookmarkContext.Provider value={{ bookmarkedEvents, toggleBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => useContext(BookmarkContext);
