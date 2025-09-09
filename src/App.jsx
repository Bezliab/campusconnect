import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Feedback from "./pages/Feedback";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
