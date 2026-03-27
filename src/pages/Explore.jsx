import { useState } from 'react';
import { CheckSquare, Square, Star, ChevronDown, Sparkles } from 'lucide-react';
import './Explore.css';

const COURSES = [
  {
    id: 1,
    title: 'The Ethics of Aesthetics',
    category: 'Philosophy',
    badge: 'PHILOSOPHY',
    author: 'Dr. Julian Thorne',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=600',
    rating: '4.9',
    reviews: '320',
    price: '$149'
  },
  {
    id: 2,
    title: 'Gothic Engineering Masterclass',
    category: 'Architecture',
    badge: 'ARCHITECTURE',
    author: 'Elena Rossi',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600',
    rating: '4.8',
    reviews: '185',
    price: '$199'
  },
  {
    id: 3,
    title: 'The Abstract Expressionist',
    category: 'Modern Art',
    badge: 'MODERN ART',
    author: 'Marcus Vane',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=600',
    rating: '5.0',
    reviews: '92',
    price: '$125'
  },
  {
    id: 4,
    title: 'Creative Writing: Pure Prose',
    category: 'Literature',
    badge: 'LITERATURE',
    author: 'Sarah Jenkins',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=600',
    rating: '4.7',
    reviews: '455',
    price: '$89'
  },
  {
    id: 5,
    title: 'Mythology in Western Civ',
    category: 'History',
    badge: 'HISTORY',
    author: 'Dr. Ariadne Vance',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100',
    image: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&q=80&w=600',
    rating: '4.9',
    reviews: '612',
    price: '$175'
  },
  {
    id: 6,
    title: 'The Bio-Ethics Frontier',
    category: 'Science',
    badge: 'SCIENCE',
    author: 'Simon Kaine',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600',
    rating: '4.6',
    reviews: '110',
    price: '$210'
  }
];

const CATEGORIES = [
  { name: 'All Disciplines', filter: 'All', count: 6 },
  { name: 'Architecture', filter: 'Architecture', count: 1 },
  { name: 'Philosophy', filter: 'Philosophy', count: 1 },
  { name: 'Classical Arts', filter: 'Classical Arts', count: 0 },
  { name: 'Modern Art', filter: 'Modern Art', count: 1 },
  { name: 'Modern History', filter: 'History', count: 1 },
  { name: 'Literature', filter: 'Literature', count: 1 },
  { name: 'Science', filter: 'Science', count: 1 }
];

const Explore = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredCourses = activeFilter === 'All' 
    ? COURSES 
    : COURSES.filter(course => course.category === activeFilter);

  return (
    <div className="explore-page">
      <div className="container">
        {/* Explore Hero */}
        <section className="explore-hero">
          <div className="explore-hero-content">
            <span className="hero-tag">NEW MASTERCLASS</span>
            <h1 className="explore-hero-title">Modernist Architecture & Human Scale</h1>
            <p className="explore-hero-desc">
              Explore the intersection of structural engineering and social impact in our latest architectural series led by world-renowned urbanists.
            </p>
            <div className="explore-hero-actions">
              <button className="btn-primary">Enroll in Atelier</button>
              <button className="btn-secondary">View Curriculum</button>
            </div>
          </div>
          
          <div className="explore-hero-image-wrap">
            <div className="explore-hero-image">
               <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" alt="Modernist Architecture"/>
            </div>
            <div className="enrolled-badge">
              <div className="avatars-group">
                <div className="avatar sm av-1"></div>
                <div className="avatar sm av-2"></div>
              </div>
              <div className="enrolled-info">
                <span>1.2k Scholars Enrolled</span>
                <div className="progress-bar mini"><div className="progress-fill" style={{width: '70%'}}></div></div>
              </div>
            </div>
          </div>
        </section>

        {/* Catalog Layout */}
        <div className="catalog-layout">
          {/* Filters Sidebar */}
          <aside className="filters-sidebar">
            <div className="filter-group">
              <h3>Disciplines</h3>
              <ul className="filter-list">
                {CATEGORIES.map((cat, idx) => (
                  <li 
                    key={idx}
                    className={activeFilter === cat.filter ? 'active' : ''}
                    onClick={() => setActiveFilter(cat.filter)}
                  >
                    <span>{cat.name}</span> 
                    <span className="count">{cat.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="filter-group">
              <h3>Format</h3>
              <ul className="filter-options">
                <li><CheckSquare size={18} className="text-primary"/> Masterclass Series</li>
                <li><Square size={18} className="text-muted"/> Reading Intensive</li>
                <li><Square size={18} className="text-muted"/> Visual Archive</li>
              </ul>
            </div>

            <div className="card promo-card">
              <Sparkles className="promo-icon" size={24}/>
              <h4>Alumni Access</h4>
              <p>Unlock the full historical archive and private discussions.</p>
              <button className="btn-promo full-width">UPGRADE</button>
            </div>
          </aside>

          {/* Courses Grid */}
          <main className="courses-main">
            <div className="courses-header">
              <h2>{activeFilter === 'All' ? 'Explore Curriculum' : `${activeFilter} Curriculum`}</h2>
              <div className="sort-by">
                <span>Sort by:</span>
                <button className="sort-btn">Scholarly Impact <ChevronDown size={14}/></button>
              </div>
            </div>

            <div className="courses-grid" style={{ minHeight: '400px', alignContent: 'start' }}>
              {filteredCourses.length > 0 ? (
                filteredCourses.map(course => (
                  <div key={course.id} className="card course-card">
                    <div className="card-img" style={{backgroundImage: `url('${course.image}')`}}>
                      <span className="badge badge-light">{course.badge}</span>
                    </div>
                    <div className="card-content">
                      <h3>{course.title}</h3>
                      <div className="instructor">
                        <div className="avatar xsm" style={{backgroundImage: `url('${course.avatar}')`}}></div>
                        <span>by {course.author}</span>
                      </div>
                      <div className="course-footer">
                        <div className="rating">
                          <Star size={14} className="star-icon" fill="currentColor" />
                          <strong>{course.rating}</strong>
                          <span className="text-muted">({course.reviews})</span>
                        </div>
                        <div className="price">{course.price}</div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div style={{gridColumn: 'span 3', textAlign: 'center', padding: '3rem', color: 'var(--text-muted)'}}>
                  No courses found for this discipline.
                </div>
              )}
            </div>

            <div className="load-more">
               <button className="btn-secondary">LOAD MORE ARCHIVES <ChevronDown size={16}/></button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Explore;
