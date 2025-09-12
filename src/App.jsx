import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Register from "./pages/Register.jsx";
import Feedback from "./pages/Feedback";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/footer";
import EventDetails from "./pages/EventDetails";
import BackToTop from "./components/BacktoTop";
import { BookmarkProvider } from './context/BookmarkContext';


function App() {
  return (
    <BookmarkProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <BackToTop />
      <Footer />
    </BookmarkProvider>
  );
}

export default App;
