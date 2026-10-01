import {
  ArrowUpRight,
  Mail,
} from 'lucide-react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            CLING<span>.</span>
          </div>

          <p>
            Technology, design and ideas
            <br />
            built to move businesses forward.
          </p>
        </div>

        <a className="footer-big-link" href="#contact">
          <span>START A PROJECT</span>
          <ArrowUpRight size={34} strokeWidth={1.2} />
        </a>
      </div>

      <div className="footer-middle">
        <div className="footer-column">
  <span>EXPLORE</span>
  <a href="#about">About</a>
  <a href="#work">Work</a>
  <a href="#services">Services</a>
  <a href="#products">Products</a>
  <a href="#industries">Industries</a>
</div>

        <div className="footer-column">
          <span>COMPANY</span>
          <a href="#innovation">Innovation</a>
          <a href="#leadership">Leadership</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-column">
          <span>CONNECT</span>

          <a href="mailto:info@clinginfotech.com">
            <Mail size={14} />
            Email
          </a>

          <a
            href="https://www.linkedin.com/company/clinginfotech/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="footer-social-symbol">in</span>
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/clinginfotech/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="footer-social-symbol">◎</span>
            Instagram
          </a>
        </div>

        <div className="footer-location">
          <span>HEAD OFFICE</span>

          <p>
            Wave City
            <br />
            NH-24, Noida
            <br />
            Uttar Pradesh
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} CLING INFO TECH WORKS PRIVATE LIMITED
        </span>

        <span>
          MADE WITH IDEAS + CODE
        </span>
      </div>
    </footer>
  );
}

export default Footer;