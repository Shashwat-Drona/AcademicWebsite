import { ArrowLeft, Settings, BookOpen, List, Folder, MessageSquare, Lock, ChevronLeft, ChevronRight, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import './CoursePlayer.css';

const CoursePlayer = () => {
  return (
    <div className="course-player-layout">
      
      {/* Sidebar */}
      <aside className="player-sidebar">
        
        <div className="sidebar-header">
           <Link to="/dashboard" className="back-link"><ArrowLeft size={20}/></Link>
           <h2>The Academic<br/>Atelier</h2>
           <button className="settings-btn"><Settings size={20}/></button>
        </div>

        <div className="sidebar-scrollable">
          <div className="syllabus-section">
            <span className="section-label">COURSE SYLLABUS</span>
            <h3>Philosophical Foundations</h3>
            
            <ul className="module-menu">
              <li className="active">
                <div className="menu-item-content">
                  <BookOpen size={18} className="menu-icon"/>
                  <span>The History of the Studio</span>
                </div>
              </li>
              <li>
                <div className="menu-item-content">
                  <List size={18} className="menu-icon"/>
                  <span>Defining Creative Space</span>
                </div>
              </li>
              <li>
                <div className="menu-item-content">
                  <Folder size={18} className="menu-icon"/>
                  <span>Materiality & Form</span>
                </div>
              </li>
              <li>
                <div className="menu-item-content">
                  <MessageSquare size={18} className="menu-icon"/>
                  <span>Collective Critique</span>
                </div>
              </li>
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
           <button className="nav-btn">
             <ChevronLeft size={20}/>
             <span>PREVIOUS</span>
           </button>
           
           <button className="focus-mode-btn">
             <EyeOff size={24}/>
           </button>
           
           <button className="nav-btn">
             <ChevronRight size={20}/>
             <span>NEXT</span>
           </button>
        </div>
      </aside>

      {/* Main Content Area (Stub) */}
      <main className="player-main-content">
         <div className="video-placeholder">
            <img 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1600" 
              alt="The History of the Studio"
              className="video-cover"
            />
            <div className="video-overlay">
               <div className="play-button-bg"><span className="play-icon">▶</span></div>
               <h1>The History of the Studio</h1>
            </div>
         </div>
      </main>

    </div>
  );
};

export default CoursePlayer;
