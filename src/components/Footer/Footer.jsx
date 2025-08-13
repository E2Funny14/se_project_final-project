import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2024 Supersite, Powered by News API</p>
      <nav className="footer__nav">
        <div className="footer__links">
        <a href="/" className="footer__link">Home</a>
        <a href="https://tripleten.com" className="footer__link">TripleTen</a>
        </div>
        <div className="footer__social">
          <a href="https://github.com">
            <img src="https://tse3.mm.bing.net/th/id/OIP.PJoXmwv3lYJ2f7Pr1vtfkQHaEK?pid=Api&P=0&h=220" alt="GitHub" className="footer__icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://tse2.mm.bing.net/th/id/OIP.w_zDkEJ9aLiWR-g0rff8hwHaHa?pid=Api&P=0&h=220" alt="LinkedIn" className="footer__icon-linkedin" />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;