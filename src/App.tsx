import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CityPage from './pages/CityPage';
import LegalPage from './pages/LegalPage';
import PrivacyPage from './pages/PrivacyPage';
import CGVPage from './pages/CGVPage';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/ville/:cityName" element={<CityPage />} />
          <Route path="/mentions-legales" element={<LegalPage />} />
          <Route path="/politique-confidentialite" element={<PrivacyPage />} />
          <Route path="/cgv" element={<CGVPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
