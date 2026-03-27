import { Link, useLocation } from 'react-router-dom';
import { Bell, User, Search } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="navbar-wrapper">
      <div className="container navbar">
        <div className="nav-brand">
          <Link to="/">Academic Atelier</Link>
        </div>
        
        <nav className="nav-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Curriculum</Link>
          <Link to="/checkout">Library</Link>
          <Link to="/explore" className={location.pathname === '/explore' ? 'active' : ''}>Atelier</Link>
          <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>Archive</Link>
        </nav>

        <div className="nav-actions">
           {(location.pathname === '/dashboard' || location.pathname === '/explore') && (
             <div className="search-bar">
               <Search size={16} className="search-icon" />
               <input type="text" placeholder="Search archives..." />
             </div>
           )}
          <button className="icon-btn">
            <Bell size={20} />
          </button>
          <button className="icon-btn profile-btn">
            <User size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
