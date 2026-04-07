import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CourseDetails from './pages/CourseDetails';
import Dashboard from './pages/Dashboard';
import Checkout from './pages/Checkout';
import Explore from './pages/Explore';
import CoursePlayer from './pages/CoursePlayer';
import LearningDNA from './pages/LearningDNA';
import './App.css';

function AppRoutes() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const landingHandled = sessionStorage.getItem('atelierLandingHandled');

    if (!landingHandled) {
      sessionStorage.setItem('atelierLandingHandled', 'true');

      if (location.pathname !== '/' && location.pathname !== '/explore') {
        navigate('/', { replace: true });
      }
    }
  }, [location.pathname, navigate]);

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/curriculum" element={<CourseDetails />} />
          <Route path="/curriculum/:courseKey" element={<CourseDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/player" element={<CoursePlayer />} />
          <Route path="/dna" element={<LearningDNA />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
