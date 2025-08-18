import "./Footer.css";
import githubIcon from "../../assets/github.svg"
import linkedinIcon from "../../assets/linkedin.svg"

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2024 Supersite, Powered by News API</p>
      <nav className="footer__nav">
        <div className="footer__links">
          <a href="/" className="footer__link">
            Home
          </a>
          <a href="https://tripleten.com" className="footer__link">
            TripleTen
          </a>
        </div>
        <div className="footer__social">
          <a href="https://github.com">
            <img
              src={githubIcon}
              alt="GitHub"
              className="footer__icon"
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="footer__icon-linkedin"
            />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
