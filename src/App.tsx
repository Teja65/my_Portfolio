import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToSection from './components/ScrollToSection';

function PortfolioPage() {
  return (
    <>
      <ScrollToSection />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/about" element={<PortfolioPage />} />
        <Route path="/projects" element={<PortfolioPage />} />
        <Route path="/skills" element={<PortfolioPage />} />
        <Route path="/contact" element={<PortfolioPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
