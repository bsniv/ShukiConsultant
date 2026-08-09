import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AccessibilityToolbar from './components/AccessibilityToolbar';
import HomePage from './pages/HomePage';
import AccessibilityPage from './pages/AccessibilityPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import './styles/global.css';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        <Header />
        <AccessibilityToolbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/accessibility" element={<AccessibilityPage />} />
            <Route path="/service/:id" element={<ServiceDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
