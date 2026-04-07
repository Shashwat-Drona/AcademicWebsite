import { useEffect } from 'react';
import { Clock, Users, CheckCircle, ChevronDown, Lock } from 'lucide-react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { getCourseByKey } from '../data/courses';
import './CourseDetails.css';

const CourseDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { courseKey } = useParams();

  const selectedKey = location.state?.courseKey || courseKey || localStorage.getItem('selectedCourseKey') || 'spatialDynamics';
  const course = getCourseByKey(selectedKey);

  useEffect(() => {
    localStorage.setItem('selectedCourseKey', course.key);
  }, [course.key]);

  return (
    <div className="course-details">
      <div className="container">
        <section className="course-hero">
          <div className="hero-content">
            <span className="badge badge-accent">ADVANCED CERTIFICATION</span>
            <h1 className="hero-title">
              {course.heroTitle.split('\n').map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </h1>

            <div className="hero-meta">
              <span className="meta-item"><Clock size={16} /> {course.heroDuration}</span>
              <span className="meta-item"><Users size={16} /> {course.heroSeats}</span>
              <span className="meta-item"><CheckCircle size={16} /> {course.heroCredits}</span>
            </div>
          </div>
        </section>

        <div className="course-layout">
          <div className="course-main">
            <section className="philosophy-section">
              <h2>{course.philosophyHeading}</h2>
              <div className="card philosophy-card">
                <p><strong>{course.philosophy[0]}</strong></p>
                <p>{course.philosophy[1]}</p>
              </div>
            </section>

            <section className="curriculum-section">
              <div className="section-header">
                <h2>Curriculum Structure</h2>
                <span className="total-hours">{course.totalHours}</span>
              </div>

              <div className="module-list">
                {course.modules.map((module, index) => {
                  const isActive = index === 0;

                  return (
                    <div
                      key={module.title}
                      className={`module-item card ${isActive ? 'active' : ''}`}
                      onClick={isActive ? () => navigate('/player', { state: { lessonKey: course.lessonKey } }) : undefined}
                      style={isActive ? { cursor: 'pointer' } : undefined}
                    >
                      <div className="module-header">
                        <div className={`module-number ${isActive ? '' : 'light'}`}>{String(index + 1).padStart(2, '0')}</div>
                        <div className="module-info">
                          <h3>{module.title}</h3>
                          <span>{module.meta}</span>
                        </div>
                        {isActive ? <ChevronDown className="module-icon" /> : <Lock className="module-icon text-muted" />}
                      </div>

                      {isActive && module.details && (
                        <div className="module-body">
                          <ul>
                            {module.details.map((detail) => (
                              <li key={detail}><Clock size={14}/>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          <aside className="course-sidebar">
            <div className="card enrollment-card">
              <div className="enrollment-header">
                <span className="label">ENROLLMENT FEE</span>
                <div className="price-wrap">
                  <span className="current-price">{course.price}</span>
                  <span className="old-price">{course.totalFee}</span>
                </div>
              </div>

              <div className="enrollment-actions">
                <button
                  className="btn-primary full-width"
                  onClick={() => navigate('/dashboard')}
                >
                  Confirm Enrollment
                </button>
                <button className="btn-secondary full-width" onClick={() => navigate('/explore')}>Request Syllabus</button>
              </div>

              <ul className="perks-list">
                <li><CheckCircle size={16} className="text-success" /> Lifetime access to archives</li>
                <li><CheckCircle size={16} className="text-success" /> 1-on-1 monthly mentorship</li>
                <li><CheckCircle size={16} className="text-success" /> Professional Portfolio Review</li>
              </ul>
            </div>

            <div className="card master-card">
              <span className="label">MASTER IN RESIDENCE</span>
              <div className="master-profile">
                <div className="avatar" style={{ backgroundImage: `url('${course.mentorAvatar}')` }}></div>
                <div className="master-info">
                  <h4>{course.mentorName}</h4>
                  <span>{course.mentorRole}</span>
                </div>
              </div>
              <blockquote className="master-quote">
                "{course.mentorQuote}"
              </blockquote>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
