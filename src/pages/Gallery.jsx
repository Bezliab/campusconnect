import React, { useState, useEffect } from 'react';
import { Camera, Calendar as CalendarIcon } from 'lucide-react';
import galleryData from '../data/gallery.json';
import '../styles/Gallery.css';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [currentBg, setCurrentBg] = useState(0);

  const categories = ['All', 'Technical', 'Cultural', 'Sports', 'Academic'];
  const years = ['All', '2024', '2023', '2022'];

  // Background slideshow images
  const backgroundImages = [
    'https://bloximages.chicago2.vip.townnews.com/chippewa.com/content/tncms/assets/v3/editorial/e/3c/e3cd5a33-eedf-5573-9280-b86bd8d46404/5a7dfdc55be10.image.jpg',
    'https://imu.indiana.edu/images/hotel/reservations-campusevents/football-crowd.jpg',
    'https://images.squarespace-cdn.com/content/v1/56709e74a976af4552e28f93/1560937035996-X9ENEFTORNKZYBIHWKEX/410044_00_N148_medium.jpg',
    'https://eventsdc.com/sites/default/files/styles/webp/public/2020-09/The%20Fields%20at%20RFK_Field%202%20%281%29_0.jpg.webp?itok=TSr2yodl'
  ];

  useEffect(() => {
    setImages(galleryData);
    setFilteredImages(galleryData);
  }, []);

  // Slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg(prev => (prev + 1) % backgroundImages.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let filtered = images;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(image => image.category === selectedCategory);
    }

    if (selectedYear !== 'All') {
      filtered = filtered.filter(image => image.year === selectedYear);
    }

    setFilteredImages(filtered);
  }, [images, selectedCategory, selectedYear]);

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedYear('All');
  };

  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case 'technical': return 'category-technical';
      case 'cultural': return 'category-cultural';
      case 'sports': return 'category-sports';
      case 'academic': return 'category-academic';
      default: return 'category-default';
    }
  };

  return (
    <div className="gallery-container">
      {/* ===== Full Width Header Slideshow ===== */}
      <div
        className="gallery-header-slideshow"
        style={{
          backgroundImage: `url(${backgroundImages[currentBg]})`,
        }}
      >
        <div className="gallery-header-overlay"></div>
        <div className="gallery-header-content">
          <h1 className="gallery-title">
            Event Gallery
          </h1>
          <p className="gallery-subtitle">
            Explore memorable moments from our campus events through our visual gallery
          </p>
        </div>
      </div>

      {/* ===== Page Content Wrapper ===== */}
      <div className="gallery-wrapper">
        {/* Filters */}
        <div className="filters-section">
          <div className="filters-row">
            <div className="filters-controls">
              <div className="filter-group">
                <label className="filter-label">Category:</label>
                <select 
                  value={selectedCategory} 
                  onChange={e => setSelectedCategory(e.target.value)}
                  className="filter-select"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <CalendarIcon className="icon-sm text-muted" />
                <label className="filter-label">Year:</label>
                <select 
                  value={selectedYear} 
                  onChange={e => setSelectedYear(e.target.value)}
                  className="filter-select year-select"
                >
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              <button className="clear-filters-btn" onClick={clearFilters}>
                Clear Filters
              </button>
            </div>
          </div>

          {/* Active Filters */}
          <div className="active-filters">
            {selectedCategory !== 'All' && (
              <span className="filter-badge">
                Category: {selectedCategory}
                <button onClick={() => setSelectedCategory('All')} className="remove-filter-btn">×</button>
              </span>
            )}
            {selectedYear !== 'All' && (
              <span className="year-filter-badge">
                Year: {selectedYear}
                <button onClick={() => setSelectedYear('All')} className="remove-filter-btn">×</button>
              </span>
            )}
          </div>
        </div>

        {/* Gallery Grid */}
        {filteredImages.length > 0 ? (
          <div className="gallery-grid">
            {filteredImages.map(image => (
              <div key={image.id} className="gallery-card">
                <div className="card-image-container">
                  <img src={image.imageUrl} alt={image.title} />
                  <div className="card-image-overlay"></div>

                  <span className={`category-badge ${getCategoryColor(image.category)}`}>
                    {image.category}
                  </span>

                  <span className="year-badge">{image.year}</span>
                </div>

                <div className="card-content">
                  <h3 className="card-title">{image.title}</h3>
                  <p className="card-description">{image.description}</p>
                  <div className="card-footer">
                    <span className="card-event">{image.event}</span>
                    <span>{image.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <Camera className="empty-state-icon" />
            <h3 className="empty-state-title">No images found</h3>
            <p className="empty-state-description">
              No images match your current filters. Try adjusting your selection or clearing the filters.
            </p>
            <button onClick={clearFilters} className="hero-gradient-btn">Clear All Filters</button>
          </div>
        )}

        {/* Category Quick Filters */}
        <div className="category-section">
          <div className="category-section-header">
            <h2 className="category-section-title">Browse by Category</h2>
            <p className="category-section-description">
              Explore images from different event categories
            </p>
          </div>

          <div className="category-grid">
            {categories.slice(1).map(category => {
              const categoryCount = images.filter(img => img.category === category).length;
              const getCategoryIcon = cat => {
                switch (cat) {
                  case 'Technical': return '💻';
                  case 'Cultural': return '🎭';
                  case 'Sports': return '⚽';
                  case 'Academic': return '🏢';
                  default: return '📸';
                }
              };

              return (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setSelectedYear('All');
                  }}
                  className="category-filter-btn"
                >
                  <div className="category-icon">{getCategoryIcon(category)}</div>
                  <div className="category-name">{category}</div>
                  <div className="category-count">{categoryCount} Events</div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
