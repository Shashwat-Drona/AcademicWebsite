import { ArrowLeft, Settings, BookOpen, List, Folder, MessageSquare, Lock, ChevronLeft, ChevronRight, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './CoursePlayer.css';

const lessonLibrary = {
  historyStudio: {
    title: 'The History of the Studio',
    track: 'Philosophical Foundations',
    videoUrl: 'https://www.youtube.com/embed/Unzc731iCUY',
    icon: BookOpen
  },
  lightFoundations: {
    title: 'Conceptual Foundations of Light',
    track: 'Spatial Dynamics in Modern Atelier Design',
    videoUrl: 'https://www.youtube.com/embed/h11u3vtcpaY',
    icon: List
  },
  architecturalSemiotics: {
    title: 'Architectural Semiotics: Reading Space as Text',
    track: 'Philosophy & Logic',
    videoUrl: 'https://www.youtube.com/embed/WPni755-Krg',
    icon: Folder
  },
  minimalismJapan: {
    title: 'The Minimalism Movement in Post-War Japan',
    track: 'Aesthetics',
    videoUrl: 'https://www.youtube.com/embed/iG9CE55wbtY',
    icon: MessageSquare
  },
  botanicalIllustration: {
    title: 'Botanical Illustration: A Taxonomic History',
    track: 'Scientific History',
    videoUrl: 'https://www.youtube.com/embed/Unzc731iCUY',
    icon: BookOpen
  },
  urbanResilience: {
    title: 'Urban Resilience in the Anthropocene',
    track: 'Human Geography',
    videoUrl: 'https://www.youtube.com/embed/h11u3vtcpaY',
    icon: Folder
  },
  researchMethods: {
    title: 'Academic Research Methods',
    track: 'Research Methodology',
    videoUrl: 'https://www.youtube.com/embed/WPni755-Krg',
    icon: List
  },
  ethicsAesthetics: {
    title: 'The Ethics of Aesthetics',
    track: 'Philosophy',
    videoUrl: 'https://www.youtube.com/embed/iG9CE55wbtY',
    icon: MessageSquare
  }
};

const CoursePlayer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [focusMode, setFocusMode] = useState(false);
  const [activeLessonKey, setActiveLessonKey] = useState(() => {
    const stateKey = location.state?.lessonKey;
    const savedKey = sessionStorage.getItem('activeLessonKey');
    return stateKey || savedKey || 'historyStudio';
  });

  const lessonKeys = Object.keys(lessonLibrary);
  const currentLesson = lessonLibrary[activeLessonKey] || lessonLibrary.historyStudio;

  const selectLesson = (lessonKey) => {
    setActiveLessonKey(lessonKey);
    sessionStorage.setItem('activeLessonKey', lessonKey);
  };

  const activeIndex = Math.max(lessonKeys.indexOf(activeLessonKey), 0);

  const openPrevious = () => {
    const prevIndex = Math.max(activeIndex - 1, 0);
    selectLesson(lessonKeys[prevIndex]);
  };

  const openNext = () => {
    const nextIndex = Math.min(activeIndex + 1, lessonKeys.length - 1);
    selectLesson(lessonKeys[nextIndex]);
  };

  return (
    <div className={`course-player-layout ${focusMode ? 'focus-mode' : ''}`}>
      
      {/* Sidebar */}
      <aside className="player-sidebar">
        
        <div className="sidebar-header">
           <Link to="/dashboard" className="back-link"><ArrowLeft size={20}/></Link>
           <h2>The Academic<br/>Atelier</h2>
            <button className="settings-btn" onClick={() => navigate('/dashboard')}><Settings size={20}/></button>
        </div>

        <div className="sidebar-scrollable">
          <div className="syllabus-section">
            <span className="section-label">COURSE SYLLABUS</span>
            <h3>{currentLesson.track}</h3>
            
            <ul className="module-menu">
              {lessonKeys.map((key) => {
                const lesson = lessonLibrary[key];
                const ItemIcon = lesson.icon;

                return (
                  <li key={key} className={activeLessonKey === key ? 'active' : ''} onClick={() => selectLesson(key)}>
                    <div className="menu-item-content">
                      <ItemIcon size={18} className="menu-icon"/>
                      <span>{lesson.title}</span>
                    </div>
                  </li>
                );
              })}
            </ul>

            <span className="section-label mt-4">REMAINING LESSONS (12)</span>
            <ul className="module-menu disabled-menu">
               <li>
                <div className="menu-item-content">
                  <Lock size={18} className="menu-icon"/>
                  <span>The Digital Atelier</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="sidebar-footer">
           <button className="nav-btn" onClick={openPrevious}>
             <ChevronLeft size={20}/>
             <span>PREVIOUS</span>
           </button>
           
           <button className="focus-mode-btn" onClick={() => setFocusMode((prev) => !prev)}>
             <EyeOff size={24}/>
           </button>
           
           <button className="nav-btn" onClick={openNext}>
             <ChevronRight size={20}/>
             <span>NEXT</span>
           </button>
        </div>
      </aside>

      {/* Main Content Area (Stub) */}
      <main className="player-main-content">
         <div className="video-placeholder">
          <iframe
            src={currentLesson.videoUrl}
            title={currentLesson.title}
            className="video-frame"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
            <div className="video-overlay">
               <div className="play-button-bg"><span className="play-icon">▶</span></div>
            <h1>{currentLesson.title}</h1>
            <p className="video-track-label">{currentLesson.track}</p>
              <button className="complete-session-btn" onClick={() => navigate('/dashboard')}>Complete Session</button>
            </div>
         </div>
      </main>

    </div>
  );
};

export default CoursePlayer;
