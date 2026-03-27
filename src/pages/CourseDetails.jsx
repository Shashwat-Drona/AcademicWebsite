import { Clock, Users, CheckCircle, ChevronDown, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './CourseDetails.css';

const CourseDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="course-details">
      <div className="container">
        {/* Hero Section */}
        <section className="course-hero">
          <div className="hero-content">
            <span className="badge badge-accent">ADVANCED CERTIFICATION</span>
            <h1 className="hero-title">Spatial Dynamics in<br/>Modern Atelier Design</h1>
            
            <div className="hero-meta">
              <span className="meta-item"><Clock size={16} /> 12 WEEKS</span>
              <span className="meta-item"><Users size={16} /> LIMITED TO 15 SCHOLARS</span>
              <span className="meta-item"><CheckCircle size={16} /> ACADEMIC CREDITS: 4.5</span>
            </div>
          </div>
        </section>

        {/* Content Layout */}
        <div className="course-layout">
          <div className="course-main">
            {/* Philosophy */}
            <section className="philosophy-section">
              <h2>Philosophy of Space</h2>
              <div className="card philosophy-card">
                <p>
                  <strong>In this advanced module, we investigate the profound relationship between the
                  physical environment and creative output.</strong> The "Atelier" is not merely a
                  workspace; it is a cognitive instrument. We move beyond ergonomics into the
                  realm of <strong>Psychosomatic Architecture</strong>—exploring how volume, light modulation,
                  and material resonance dictate the flow of intellectual inquiry.
                </p>
                <p>
                  Participants will engage with historic precedents from the Bauhaus to contemporary
                  minimalist studios, developing a personal design language that prioritizes focus, serenity,
                  and high-performance collaboration.
                </p>
              </div>
            </section>

            {/* Curriculum */}
            <section className="curriculum-section">
              <div className="section-header">
                <h2>Curriculum Structure</h2>
                <span className="total-hours">48 TOTAL LEARNING HOURS</span>
              </div>
              
              <div className="module-list">
                {/* Module 1 */}
                <div 
                  className="module-item active card" 
                  onClick={() => navigate('/player')}
                  style={{cursor: 'pointer'}}
                >
                  <div className="module-header">
                    <div className="module-number">01</div>
                    <div className="module-info">
                      <h3>Conceptual Foundations of Light</h3>
                      <span>4 LESSONS • 6 HOURS</span>
                    </div>
                    <ChevronDown className="module-icon" />
                  </div>
                  <div className="module-body">
                    <ul>
                      <li><Clock size={14}/> Natural Light Modulation in Northern Latitudes</li>
                      <li><Clock size={14}/> The Shadows of Tadao Ando (Case Study)</li>
                    </ul>
                  </div>
                </div>

                {/* Module 2 */}
                <div className="module-item card">
                  <div className="module-header">
                    <div className="module-number light">02</div>
                    <div className="module-info">
                      <h3>Acoustic Temperance & Silence</h3>
                      <span>6 LESSONS • 9 HOURS</span>
                    </div>
                    <Lock className="module-icon text-muted" />
                  </div>
                </div>

                {/* Module 3 */}
                <div className="module-item card">
                  <div className="module-header">
                    <div className="module-number light">03</div>
                    <div className="module-info">
                      <h3>Materiality and Touch</h3>
                      <span>5 LESSONS • 8 HOURS</span>
                    </div>
                    <Lock className="module-icon text-muted" />
                  </div>
                </div>
              </div>
            </section>
          </div>

          <aside className="course-sidebar">
            {/* Enrollment Card */}
            <div className="card enrollment-card">
              <div className="enrollment-header">
                <span className="label">ENROLLMENT FEE</span>
                <div className="price-wrap">
                  <span className="current-price">$1,250</span>
                  <span className="old-price">$1,800</span>
                </div>
              </div>

              <div className="enrollment-actions">
                <button 
                  className="btn-primary full-width"
                  onClick={() => navigate('/checkout')}
                >
                  Enroll in Course
                </button>
                <button className="btn-secondary full-width">Request Syllabus</button>
              </div>

              <ul className="perks-list">
                <li><CheckCircle size={16} className="text-success" /> Lifetime access to archives</li>
                <li><CheckCircle size={16} className="text-success" /> 1-on-1 monthly mentorship</li>
                <li><CheckCircle size={16} className="text-success" /> Professional Portfolio Review</li>
              </ul>
            </div>

            {/* Master Card */}
            <div className="card master-card">
              <span className="label">MASTER IN RESIDENCE</span>
              <div className="master-profile">
                <div className="avatar"></div>
                <div className="master-info">
                  <h4>Julian Vane</h4>
                  <span>RIBA Fellow, Spatial Philosopher</span>
                </div>
              </div>
              <blockquote className="master-quote">
                "Design is the silent language of human potential. My goal is to help you build the environments where your best work is inevitable."
              </blockquote>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
