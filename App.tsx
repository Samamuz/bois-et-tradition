import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SavoirFaire from './pages/SavoirFaire';
import Realisations from './pages/Realisations';
import Services from './pages/Services';
import Contact from './pages/Contact';

// ScrollToTop component to reset window scroll on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-stone-800 bg-wood-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/savoir-faire" element={<SavoirFaire />} />
            <Route path="/realisations" element={<Realisations />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            {/* Catch-all route : redirige toute URL inconnue vers l'accueil */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;