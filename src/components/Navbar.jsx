import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Bell, User, Search } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(false);
  const [profileTab, setProfileTab] = useState('courses');

  const userProfile = {
    name: 'Shashwat Drona',
    role: 'Spatial Design Scholar',
    email: 'shashwat@atelier.edu',
    cohort: 'Atelier Batch 2026',
    dna: {
      archetype: 'Interdisciplinary Architect',
      focusIndex: 84,
      curiosityIndex: 91,
      sprintIndex: 76
    },
    courses: [
      { title: 'Spatial Dynamics in Modern Atelier Design', path: '/curriculum', status: 'In Progress', lessonKey: 'lightFoundations' },
      { title: 'Architectural Semiotics: Reading Space as Text', path: '/dashboard', status: '64% Complete', lessonKey: 'architecturalSemiotics' },
      { title: 'The History of the Studio', path: '/player', status: 'Active Session', lessonKey: 'historyStudio' },
      { title: 'Urban Resilience in the Anthropocene', path: '/dashboard', status: 'Exam Prep', lessonKey: 'urbanResilience' },
      { title: 'Academic Research Methods', path: '/checkout', status: 'Enrolled', lessonKey: 'researchMethods' },
      { title: 'The Ethics of Aesthetics', path: '/', status: 'Enrolled', lessonKey: 'ethicsAesthetics' }
    ]
  };

  return (
    <header className="navbar-wrapper">
      <div className="container navbar">
        <div className="nav-brand">
          <Link to="/">Academic Atelier</Link>
        </div>

        <nav className="nav-links">
          <Link to="/curriculum" className={location.pathname === '/curriculum' ? 'active' : ''}>Curriculum</Link>
          <Link to="/checkout">Library</Link>
          <Link to="/" className={location.pathname === '/' || location.pathname === '/explore' ? 'active' : ''}>Atelier</Link>
          <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>Archive</Link>
        </nav>

        <div className="nav-actions">
           {(location.pathname === '/dashboard' || location.pathname === '/explore') && (
             <div className="search-bar">
               <Search size={16} className="search-icon" />
               <input type="text" placeholder="Search archives..." />
             </div>
           )}
          <button className="icon-btn" onClick={() => navigate('/dashboard')}>
            <Bell size={20} />
          </button>

          <div className="profile-menu-wrapper">
            <button
              className="icon-btn profile-btn"
              onClick={() => setProfileOpen((prev) => !prev)}
              aria-expanded={profileOpen}
              aria-label="Toggle profile menu"
            >
              <User size={18} />
            </button>

            {profileOpen && (
              <div className="profile-popover">
                <div className="profile-head">
                  <h4>{userProfile.name}</h4>
                  <p>{userProfile.role}</p>
                  <span>{userProfile.email}</span>
                  <span>{userProfile.cohort}</span>
                </div>

                <div className="profile-tabs">
                  <button className={`profile-tab-btn ${profileTab === 'courses' ? 'active' : ''}`} onClick={() => setProfileTab('courses')}>My Courses</button>
                  <button className={`profile-tab-btn ${profileTab === 'dna' ? 'active' : ''}`} onClick={() => setProfileTab('dna')}>Learning DNA</button>
                </div>

                {profileTab === 'courses' && (
                  <div className="profile-courses">
                    <h5>My Courses ({userProfile.courses.length})</h5>
                    {userProfile.courses.map((course) => (
                      <button
                        key={course.title}
                        type="button"
                        className="profile-course-item profile-course-btn"
                        onClick={() => {
                          if (course.lessonKey) {
                            navigate('/player', { state: { lessonKey: course.lessonKey } });
                          } else {
                            navigate(course.path);
                          }
                          setProfileOpen(false);
                        }}
                      >
                        <strong>{course.title}</strong>
                        <span>{course.status}</span>
                      </button>
                    ))}
                  </div>
                )}

                {profileTab === 'dna' && (
                  <div className="profile-dna-card">
                    <h5>Learning DNA Card</h5>
                    <p>{userProfile.dna.archetype}</p>
                    <div className="dna-metric">
                      <span>Focus Index</span>
                      <strong>{userProfile.dna.focusIndex}%</strong>
                    </div>
                    <div className="dna-bar"><div style={{ width: `${userProfile.dna.focusIndex}%` }}></div></div>
                    <div className="dna-metric">
                      <span>Curiosity Index</span>
                      <strong>{userProfile.dna.curiosityIndex}%</strong>
                    </div>
                    <div className="dna-bar"><div style={{ width: `${userProfile.dna.curiosityIndex}%` }}></div></div>
                    <div className="dna-metric">
                      <span>Sprint Index</span>
                      <strong>{userProfile.dna.sprintIndex}%</strong>
                    </div>
                    <div className="dna-bar"><div style={{ width: `${userProfile.dna.sprintIndex}%` }}></div></div>

                    <Link to="/dna" className="profile-dna-link" onClick={() => setProfileOpen(false)}>
                      Open Full DNA Card
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
