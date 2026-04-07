import { Link } from 'react-router-dom';
import './LearningDNA.css';

const profile = {
  scholar: 'Shashwat Drona',
  archetype: 'Interdisciplinary Architect',
  cohort: 'Atelier Batch 2026',
  specialization: 'Spatial Design + Human Systems',
  signatureTrait: 'Connects theoretical frameworks with practical studio outcomes.'
};

const dnaStats = [
  { label: 'Focus Index', value: 84, note: 'Sustains long-form design sessions with high consistency.' },
  { label: 'Curiosity Index', value: 91, note: 'Strong tendency toward interdisciplinary exploration.' },
  { label: 'Sprint Index', value: 76, note: 'Performs reliably under deadline pressure.' }
];

const uspSignals = [
  { label: 'Cross-Discipline Completion', value: '9 Modules', context: 'Architecture + Philosophy + History' },
  { label: 'Research Depth Score', value: 'A-', context: 'Argument quality and source synthesis' },
  { label: 'Session Consistency', value: '4.6 / 5', context: 'Last 14 guided study sessions' }
];

const recommendations = [
  'Pair Urban Resilience with Methods to improve evidence-backed critique writing.',
  'Run Deep Focus mode before Sprint mode for stronger exam memory retention.',
  'Keep weekly cross-domain reading to preserve high Curiosity Index momentum.'
];

const ritualPlan = [
  { block: 'Warmup (10 min)', task: 'Review last session notes and one core concept.' },
  { block: 'Deep Work (40 min)', task: 'Study one dense module without context switching.' },
  { block: 'Reflection (15 min)', task: 'Write two critical insights and one open question.' },
  { block: 'Sprint (20 min)', task: 'Quick-recall drill for definitions and case studies.' }
];

const LearningDNA = () => {
  const avgScore = Math.round(dnaStats.reduce((sum, item) => sum + item.value, 0) / dnaStats.length);

  return (
    <div className="dna-page">
      <div className="container">
        <header className="dna-header">
          <span className="section-label">SCHOLAR IDENTITY PROFILE</span>
          <h1>Learning DNA Card</h1>
          <p>Your adaptive scholar profile maps how you learn, think, and execute in the Atelier environment. This page is your signature USP layer for personalized academic progression.</p>
        </header>

        <div className="dna-layout">
          <section className="card dna-main-card">
            <div className="dna-identity">
              <div>
                <span className="identity-label">Scholar</span>
                <h2>{profile.scholar}</h2>
              </div>
              <div className="identity-pill">{profile.archetype}</div>
            </div>

            <p className="dna-subtext">{profile.signatureTrait}</p>

            <div className="dna-identity-grid">
              <div>
                <span>Cohort</span>
                <strong>{profile.cohort}</strong>
              </div>
              <div>
                <span>Specialization</span>
                <strong>{profile.specialization}</strong>
              </div>
              <div>
                <span>DNA Stability</span>
                <strong>High (92%)</strong>
              </div>
            </div>

            {dnaStats.map((item) => (
              <div key={item.label} className="dna-stat-block">
                <div className="dna-stat-head">
                  <strong>{item.label}</strong>
                  <span>{item.value}%</span>
                </div>
                <div className="dna-progress"><div style={{ width: `${item.value}%` }}></div></div>
                <p>{item.note}</p>
              </div>
            ))}

            <div className="dna-section-block">
              <h3>USP Evidence Snapshot</h3>
              <div className="usp-grid">
                {uspSignals.map((item) => (
                  <div key={item.label} className="usp-card">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                    <p>{item.context}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="dna-section-block">
              <h3>Personalized Recommendations</h3>
              <ul className="dna-list">
                {recommendations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <aside className="card dna-summary-card">
            <span className="summary-label">OVERALL DNA SCORE</span>
            <div className="dna-score">{avgScore}</div>
            <p>Score calibrated from mood patterns, enrollment choices, and study actions.</p>

            <div className="ritual-box">
              <h4>Weekly Ritual Plan</h4>
              {ritualPlan.map((item) => (
                <div key={item.block} className="ritual-item">
                  <strong>{item.block}</strong>
                  <span>{item.task}</span>
                </div>
              ))}
            </div>

            <div className="dna-actions">
              <Link to="/dashboard" className="btn-primary full-width">Return to Dashboard</Link>
              <Link to="/player" className="btn-secondary full-width">Open Study Session</Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default LearningDNA;
