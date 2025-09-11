import React, { useState, useEffect } from 'react';
import { Camera, Calendar as CalendarIcon, X } from 'lucide-react';
import galleryData from '../data/gallery.json';
import '../styles/Gallery.css';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [currentBg, setCurrentBg] = useState(0);
  const [modalImage, setModalImage] = useState(null); // <-- for modal

  const categories = ['All', 'Technical', 'Cultural', 'Sports', 'Academic'];
  const years = ['All', '2024', '2023', '2022'];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg(prev => (prev + 1) % backgroundImages.length);
    }, 5000);
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
        style={{ backgroundImage: `url(${backgroundImages[currentBg]})` }}
      >
        <div className="gallery-header-overlay"></div>
        <div className="gallery-header-content">
          <h1 className="gallery-title">Event Gallery</h1>
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
                <label>Category:</label>
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
                <label>Year:</label>
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
        </div>

        {/* Gallery Grid */}
        {filteredImages.length > 0 ? (
          <div className="gallery-grid">
            {filteredImages.map(image => (
              <div 
                key={image.id} 
                className="gallery-card"
                onClick={() => setModalImage(image)} // open modal
              >
                <div className="card-image-container">
                  <img src={image.imageUrl} alt={image.title} />
                  <div className="card-image-overlay">
                  </div>
                  <span className={`category-badge ${getCategoryColor(image.category)}`}>
                    {image.category}
                  </span>
                </div>

                <div className="card-content">
                  <h3 className="card-title">{image.title}</h3>
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
            <h3>No images found</h3>
            <p>No images match your current filters. Try adjusting or clearing filters.</p>
            <button onClick={clearFilters} className="hero-gradient-btn">Clear All Filters</button>
          </div>
        )}

        {/* ===== Modal Popup ===== */}
        {modalImage && (
          <div className="modal-overlay" onClick={() => setModalImage(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={() => setModalImage(null)}>
                <X size={20} />
              </button>
              <img src={modalImage.imageUrl} alt={modalImage.title} className="modal-image" />
              <h2 className="modal-title">{modalImage.title}</h2>
              <p className="modal-description">{modalImage.description}</p>
              <p className="modal-event"><strong>Event:</strong> {modalImage.event}</p>
              <p className="modal-year"><strong>Year:</strong> {modalImage.year}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
