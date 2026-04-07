import { useState } from 'react';
import { CheckSquare, Square, Star, ChevronDown, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { atelierCourseOrder, courseCatalog } from '../data/courses';
import './Explore.css';

const COURSES = atelierCourseOrder.map((key, index) => {
  const course = courseCatalog[key];
  return {
    id: index + 1,
    key,
    title: course.title,
    category: course.category,
    badge: course.badge,
    author: course.author,
    avatar: course.avatar,
    image: course.image,
    rating: course.rating,
    reviews: course.reviews,
    price: course.price
  };
});

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
  const [sortMode, setSortMode] = useState('impact');
  const navigate = useNavigate();

  const selectCourse = (courseKey, target = '/checkout') => {
    localStorage.setItem('selectedCourseKey', courseKey);
    navigate(target, { state: { courseKey } });
  };

  const filteredCourses = activeFilter === 'All' 
    ? COURSES 
    : COURSES.filter(course => course.category === activeFilter);

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortMode === 'price') {
      const priceA = Number(a.price.replace('INR ', ''));
      const priceB = Number(b.price.replace('INR ', ''));
      return priceA - priceB;
    }

    return Number(b.rating) - Number(a.rating);
  });

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
              <button className="btn-primary" onClick={() => selectCourse('gothicEngineering', '/checkout')}>Enroll in Atelier</button>
              <button className="btn-secondary" onClick={() => selectCourse('gothicEngineering', '/curriculum/gothicEngineering')}>View Curriculum</button>
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
              <button className="btn-promo full-width" onClick={() => selectCourse(sortedCourses[0]?.key || 'ethicsAesthetics', '/checkout')}>UPGRADE</button>
            </div>
          </aside>

          {/* Courses Grid */}
          <main className="courses-main">
            <div className="courses-header">
              <h2>{activeFilter === 'All' ? 'Explore Curriculum' : `${activeFilter} Curriculum`}</h2>
              <div className="sort-by">
                <span>Sort by:</span>
                <button className="sort-btn" onClick={() => setSortMode((prev) => (prev === 'impact' ? 'price' : 'impact'))}>
                  {sortMode === 'impact' ? 'Scholarly Impact' : 'Price (Low to High)'} <ChevronDown size={14}/>
                </button>
              </div>
            </div>

            <div className="courses-grid" style={{ minHeight: '400px', alignContent: 'start' }}>
              {sortedCourses.length > 0 ? (
                sortedCourses.map(course => (
                  <div key={course.id} className="card course-card" onClick={() => selectCourse(course.key, '/checkout')} style={{ cursor: 'pointer' }}>
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
          <button className="btn-secondary" onClick={() => selectCourse(sortedCourses[0]?.key || 'ethicsAesthetics', '/checkout')}>CONTINUE TO ENROLLMENT <ChevronDown size={16}/></button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Explore;
