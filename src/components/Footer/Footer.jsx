import "./Footer.css";
import githubIcon from "../../assets/github.svg";
import linkedinIcon from "../../assets/linkedin.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <p className="footer__copyright">
          © 2024 Supersite, Powered by News API
        </p>
        <nav className="footer__nav">
          <div className="footer__links">
            <a
              href="/"
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Home
            </a>
            <a
              href="https://tripleten.com"
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              TripleTen
            </a>
          </div>
          <div className="footer__social">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubIcon} alt="GitHub" className="footer__icon" />
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
      </div>
    </footer>
  );
}

export default Footer;
