import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <Link to="/">ACADEMIC ATELIER</Link>
          <p className="copyright">© 2024 ACADEMIC ATELIER. CRAFTED FOR THE INTELLECTUAL PURSUIT.</p>
        </div>
        
        <div className="footer-links">
          <Link to="/">PHILOSOPHY</Link>
          <Link to="/">TERMS OF STUDY</Link>
          <Link to="/">PRIVACY POLICY</Link>
          <Link to="/">CONTACT</Link>
          <Link to="/">ALUMNI</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
