import { useEffect, useState } from 'react';
import { Bookmark, Filter, Plus, BookOpen, Clock, Trash2, Share2, Download, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const moodPresets = {
  focus: {
    label: 'Deep Focus',
    heading: 'Monastic rhythm for uninterrupted studio work.',
    description: 'You are in Deep Focus mode. The dashboard now prioritizes long-form modules, fewer context switches, and high-completion work blocks.',
    activeProgress: 72,
    activeModules: '9 of 12 Modules',
    weeklyHours: '14.8 hrs',
    nearingCompletion: '2 Courses',
    minimalismHours: '18 hrs remaining',
    minimalismProgress: 58,
    botanicalHours: '6 hrs total',
    botanicalAction: 'Continue Study',
    researchText: 'Methods shortlist tuned for deep reading and distraction-free note synthesis.',
    urbanProgress: '86%',
    urbanGrade: 'A',
    examNote: 'Focused Revision Window',
    finalAction: 'Finalize Review',
    quickAction: 'Start 45-min Focus Session'
  },
  explore: {
    label: 'Exploration',
    heading: 'Cross-disciplinary discovery and idea expansion.',
    description: 'You are in Exploration mode. The dashboard highlights breadth, interdisciplinary experiments, and curiosity-driven modules.',
    activeProgress: 64,
    activeModules: '8 of 12 Modules',
    weeklyHours: '11.2 hrs',
    nearingCompletion: '3 Courses',
    minimalismHours: '22 hrs remaining',
    minimalismProgress: 40,
    botanicalHours: '4 hrs total',
    botanicalAction: 'Start Learning',
    researchText: 'Research methods now surface adjacent disciplines to expand your creative references.',
    urbanProgress: '82%',
    urbanGrade: 'A-',
    examNote: 'Exam Due in 2 Days',
    finalAction: 'Final Review',
    quickAction: 'Open Cross-Discipline Picks'
  },
  sprint: {
    label: 'Exam Sprint',
    heading: 'Deadline-first execution with rapid consolidation.',
    description: 'You are in Exam Sprint mode. The dashboard surfaces revision-heavy modules and time-critical cards first.',
    activeProgress: 79,
    activeModules: '10 of 12 Modules',
    weeklyHours: '16.6 hrs',
    nearingCompletion: '4 Courses',
    minimalismHours: '12 hrs remaining',
    minimalismProgress: 76,
    botanicalHours: '2 hrs total',
    botanicalAction: 'Quick Revision',
    researchText: 'Method cards emphasize exam frameworks, concise summaries, and speed recall rituals.',
    urbanProgress: '91%',
    urbanGrade: 'A',
    examNote: 'Exam Due in 1 Day',
    finalAction: 'Take Final Drill',
    quickAction: 'Launch Exam Drill'
  }
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeMood, setActiveMood] = useState(() => localStorage.getItem('studioMood') || 'explore');
  const [actionMessage, setActionMessage] = useState('Mood calibration ready.');
  const [showBotanical, setShowBotanical] = useState(true);

  useEffect(() => {
    localStorage.setItem('studioMood', activeMood);
  }, [activeMood]);

  const mood = moodPresets[activeMood] || moodPresets.explore;
  const isFocus = activeMood === 'focus';
  const isSprint = activeMood === 'sprint';
  const showResearchCard = !isFocus;
  const showCompletedCard = !isFocus;
  const showBotanicalCard = !isFocus && showBotanical;
  const openPlayer = (lessonKey) => navigate('/player', { state: { lessonKey } });

  const runMoodAction = () => {
    if (activeMood === 'explore') {
      setActionMessage('Discovery pack prepared. Redirecting to Atelier catalog.');
      navigate('/explore');
      return;
    }

    if (activeMood === 'sprint') {
      setActionMessage('Sprint protocol activated. Opening revision studio.');
      openPlayer('urbanResilience');
      return;
    }

    setActionMessage('Deep focus timer started. Opening immersive study session.');
    openPlayer('architecturalSemiotics');
  };

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
            <span className="section-label">PERSONAL COLLECTION • STUDIO MOOD ENGINE</span>
            <h1>Your Saved Pursuits</h1>
            <p>{mood.description}</p>
            <div className="mood-switcher" role="tablist" aria-label="Studio Mood">
              {Object.entries(moodPresets).map(([key, value]) => (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={activeMood === key}
                  className={`mood-chip ${activeMood === key ? 'active' : ''}`}
                  onClick={() => {
                    setActiveMood(key);
                    setActionMessage(`${value.label} engaged.`);
                  }}
                >
                  {value.label}
                </button>
              ))}
            </div>
          </div>
          <div className="header-actions">
            <button className="btn-secondary" onClick={() => setActionMessage(`Filter preset applied for ${mood.label}.`)}><Filter size={18}/> Filter</button>
            <button className="btn-primary" onClick={() => navigate('/explore')}><Plus size={18}/> Browse More</button>
          </div>
        </header>

        <div className="card mood-insight">
          <h3>{mood.label}</h3>
          <p>{mood.heading}</p>
          <button className="btn-secondary mood-quick-action" onClick={runMoodAction}>{mood.quickAction}</button>
          <span className="mood-note">{actionMessage}</span>
        </div>

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
                  <span className="progress-value">{mood.activeProgress}% Completed</span>
                  <span className="progress-modules">{mood.activeModules}</span>
                </div>
                <div className="progress-bar"><div className="progress-fill" style={{width: `${mood.activeProgress}%`}}></div></div>
              </div>

              <div className="card-actions">
                <button 
                  className="btn-primary resume-btn"
                  onClick={() => openPlayer('architecturalSemiotics')}
                >
                  Resume Study
                </button>
                <button className="btn-icon-round" onClick={() => setActionMessage('Course options opened for this module set.')}>...</button>
              </div>
            </div>
          </div>

          {/* Learning Velocity Stats */}
          <div className="card velocity-card">
            <h3>Learning Velocity</h3>
            <div className="stat-row">
              <div className="stat-icon-wrap"><Clock size={20} /></div>
              <div className="stat-info">
                <strong>{mood.weeklyHours}</strong>
                <span>THIS WEEK'S FOCUS</span>
              </div>
            </div>
            <div className="stat-row">
              <div className="stat-icon-wrap"><Award size={20} /></div>
              <div className="stat-info">
                <strong>{mood.nearingCompletion}</strong>
                <span>NEARING COMPLETION</span>
              </div>
            </div>
            <a href="#" className="view-analytics" onClick={(event) => { event.preventDefault(); setActionMessage('Analytics snapshot refreshed from your current study mood.'); }}>View Full Analytics</a>
          </div>

          {/* Small Course Cards */}
          <div className="card dash-course-card">
             <div className="card-header-img" style={{backgroundImage: `url('${courseImages.minimalismJapan}')`}}>
                <span className="badge badge-accent">PRIORITY</span>
             </div>
             <div className="dash-card-body">
               <div className="card-meta">
                 <span>AESTHETICS</span>
                 <span>{mood.minimalismHours}</span>
               </div>
               <h3>The Minimalism Movement in Post-War Japan</h3>
               <div className="progress-bar thin"><div className="progress-fill" style={{width: `${mood.minimalismProgress}%`}}></div></div>
               <div className="card-actions-sm">
                 <button className="btn-outline full-width" onClick={() => openPlayer('minimalismJapan')}>Resume</button>
                 <button className="btn-icon" onClick={() => setActionMessage('Share draft generated for your study circle.')}><Share2 size={18}/></button>
               </div>
             </div>
          </div>

            {showBotanicalCard && <div className="card dash-course-card">
         <div className="card-header-img" style={{backgroundImage: `url('${courseImages.botanicalIllustration}')`}}>
             </div>
             <div className="dash-card-body">
               <div className="card-meta">
                 <span>SCIENTIFIC HISTORY</span>
                 <span>{mood.botanicalHours}</span>
               </div>
               <h3>Botanical Illustration: A Taxonomic History</h3>
               <div className="progress-bar thin"><div className="progress-fill" style={{width: '0%'}}></div></div>
               <div className="card-actions-sm">
                 <button className="btn-primary full-width" onClick={() => openPlayer('botanicalIllustration')}>{mood.botanicalAction}</button>
                 <button className="btn-icon" onClick={() => { setShowBotanical(false); setActionMessage('Botanical course archived from this view.'); }}><Trash2 size={18}/></button>
               </div>
             </div>
          </div>}

          {/* Add New Course Card */}
           {showResearchCard && <div className="card dash-course-card dash-add-card">
             <div className="card-header-img" style={{backgroundImage: `url('${courseImages.researchMethods}')`}}></div>
             <div className="dash-card-body centralized">
               <div className="icon-circle"><BookOpen size={24}/></div>
               <h3>Academic Research Methods</h3>
               <p>{mood.researchText}</p>
               <button className="btn-float-add" onClick={() => navigate('/explore')}><Plus size={20}/></button>
               <button className="btn-outline full-width text-center" onClick={() => navigate('/checkout')}>Enroll Now</button>
             </div>
           </div>}

          {/* Completed Course */}
           {showCompletedCard && <div className="card dash-course-card">
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
                 <button className="btn-borderless full-width" onClick={() => navigate('/explore')}>Review Archive</button>
                 <button className="btn-icon" onClick={() => setActionMessage('Archive notes downloaded for offline review.')}><Download size={18}/></button>
               </div>
             </div>
          </div>}

          {/* Large Vertical Card */}
          <div className={`card active-course-card vertical-span ${isSprint ? 'sprint-priority' : ''}`}>
            <div className="card-img-side" style={{backgroundImage: `url('${courseImages.urbanResilience}')`}}>
            </div>
            <div className="active-card-content">
               <div className="card-top">
                <span className="category">HUMAN GEOGRAPHY</span>
                <span className="exam-due">{mood.examNote}</span>
              </div>
              <h2>Urban Resilience in the Anthropocene</h2>
              <p>Examining how metropolitan structures adapt to changing climates and social upheavals through design innovation.</p>
              
              <div className="stats-row">
                 <div className="stat-block">
                   <span>PROGRESS</span>
                   <strong>{mood.urbanProgress}</strong>
                 </div>
                 <div className="stat-block">
                   <span>GRADE AVG</span>
                   <strong>{mood.urbanGrade}</strong>
                 </div>
              </div>

              <div className="card-actions inline-actions">
                <button className="btn-danger" onClick={() => openPlayer('urbanResilience')}>{mood.finalAction}</button>
                <button className="btn-icon-round bg-light" onClick={() => setActionMessage('Urban resilience module pinned to your priority list.')}><Bookmark size={18}/></button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
