import { Bookmark, Filter, Plus, BookOpen, Clock, Trash2, Share2, Download, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const courseImages = {
    architecturalSemiotics: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&q=80&w=1200',
    minimalismJapan: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&q=80&w=1200',
    botanicalIllustration: 'https://images.unsplash.com/photo-1463320898484-cdee8141c787?auto=format&fit=crop&q=80&w=1200',
    researchMethods: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&q=80&w=1200',
    quantumMechanics: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=1200',
    urbanResilience: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?auto=format&fit=crop&q=80&w=1200'
  };

  return (
    <div className="dashboard-page">
      <div className="container">
        {/* Header */}
        <header className="dashboard-header">
          <div className="header-text">
            <span className="section-label">PERSONAL COLLECTION</span>
            <h1>Your Saved Pursuits</h1>
            <p>Continue your intellectual journey through your curated selection of advanced studies and research modules.</p>
          </div>
          <div className="header-actions">
            <button className="btn-secondary"><Filter size={18}/> Filter</button>
            <button className="btn-primary"><Plus size={18}/> Browse More</button>
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="dashboard-grid">
          
          {/* Main active course */}
          <div className="card active-course-card">
            <div className="card-img-large" style={{backgroundImage: `url('${courseImages.architecturalSemiotics}')`}}>
              <span className="badge badge-light">IN PROGRESS</span>
            </div>
            <div className="active-card-content">
              <div className="card-top">
                <span className="category">PHILOSOPHY & LOGIC</span>
                <Bookmark size={20} className="icon-save" />
              </div>
              <h2>Architectural Semiotics: Reading Space as Text</h2>
              <p>A deep dive into the linguistic structures of physical environments and the narrative potential of urban design.</p>
              
              <div className="progress-section">
                <div className="progress-stats">
                  <span className="progress-value">64% Completed</span>
                  <span className="progress-modules">8 of 12 Modules</span>
                </div>
                <div className="progress-bar"><div className="progress-fill" style={{width: '64%'}}></div></div>
              </div>

              <div className="card-actions">
                <button 
                  className="btn-primary resume-btn"
                  onClick={() => navigate('/player')}
                >
                  Resume Study
                </button>
                <button className="btn-icon-round">...</button>
              </div>
            </div>
          </div>

          {/* Learning Velocity Stats */}
          <div className="card velocity-card">
            <h3>Learning Velocity</h3>
            <div className="stat-row">
              <div className="stat-icon-wrap"><Clock size={20} /></div>
              <div className="stat-info">
                <strong>12.4 hrs</strong>
                <span>THIS WEEK'S FOCUS</span>
              </div>
            </div>
            <div className="stat-row">
              <div className="stat-icon-wrap"><Award size={20} /></div>
              <div className="stat-info">
                <strong>3 Courses</strong>
                <span>NEARING COMPLETION</span>
              </div>
            </div>
            <a href="#" className="view-analytics">View Full Analytics</a>
          </div>

          {/* Small Course Cards */}
          <div className="card dash-course-card">
             <div className="card-header-img" style={{backgroundImage: `url('${courseImages.minimalismJapan}')`}}>
                <span className="badge badge-accent">PRIORITY</span>
             </div>
             <div className="dash-card-body">
               <div className="card-meta">
                 <span>AESTHETICS</span>
                 <span>22 hrs remaining</span>
               </div>
               <h3>The Minimalism Movement in Post-War Japan</h3>
               <div className="progress-bar thin"><div className="progress-fill" style={{width: '40%'}}></div></div>
               <div className="card-actions-sm">
                 <button className="btn-outline full-width">Resume</button>
                 <button className="btn-icon"><Share2 size={18}/></button>
               </div>
             </div>
          </div>

          <div className="card dash-course-card">
         <div className="card-header-img" style={{backgroundImage: `url('${courseImages.botanicalIllustration}')`}}>
             </div>
             <div className="dash-card-body">
               <div className="card-meta">
                 <span>SCIENTIFIC HISTORY</span>
                 <span>4 hrs total</span>
               </div>
               <h3>Botanical Illustration: A Taxonomic History</h3>
               <div className="progress-bar thin"><div className="progress-fill" style={{width: '0%'}}></div></div>
               <div className="card-actions-sm">
                 <button className="btn-primary full-width">Start Learning</button>
                 <button className="btn-icon"><Trash2 size={18}/></button>
               </div>
             </div>
          </div>

          {/* Add New Course Card */}
          <div className="card dash-course-card dash-add-card">
             <div className="card-header-img" style={{backgroundImage: `url('${courseImages.researchMethods}')`}}></div>
             <div className="dash-card-body centralized">
               <div className="icon-circle"><BookOpen size={24}/></div>
               <h3>Academic Research Methods</h3>
               <p>Required foundations for advanced atelier projects and curriculum advancement.</p>
               <button className="btn-float-add"><Plus size={20}/></button>
               <button className="btn-outline full-width text-center">Enroll Now</button>
             </div>
          </div>

          {/* Completed Course */}
          <div className="card dash-course-card">
             <div className="card-header-img" style={{backgroundImage: `url('${courseImages.quantumMechanics}')`}}>
             </div>
             <div className="dash-card-body">
               <div className="card-meta">
                 <span>COSMOLOGY</span>
                 <span>Completed</span>
               </div>
               <h3>Quantum Mechanics for the Observational Poet</h3>
               <div className="progress-bar thin"><div className="progress-fill" style={{width: '100%'}}></div></div>
               <div className="card-actions-sm">
                 <button className="btn-borderless full-width">Review Archive</button>
                 <button className="btn-icon"><Download size={18}/></button>
               </div>
             </div>
          </div>

          {/* Large Vertical Card */}
          <div className="card active-course-card vertical-span">
            <div className="card-img-side" style={{backgroundImage: `url('${courseImages.urbanResilience}')`}}>
            </div>
            <div className="active-card-content">
               <div className="card-top">
                <span className="category">HUMAN GEOGRAPHY</span>
                <span className="exam-due">Exam Due in 2 Days</span>
              </div>
              <h2>Urban Resilience in the Anthropocene</h2>
              <p>Examining how metropolitan structures adapt to changing climates and social upheavals through design innovation.</p>
              
              <div className="stats-row">
                 <div className="stat-block">
                   <span>PROGRESS</span>
                   <strong>82%</strong>
                 </div>
                 <div className="stat-block">
                   <span>GRADE AVG</span>
                   <strong>A-</strong>
                 </div>
              </div>

              <div className="card-actions inline-actions">
                <button className="btn-danger">Final Review</button>
                <button className="btn-icon-round bg-light"><Bookmark size={18}/></button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
