import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <span className="header-text">Developer</span>
        <div className="navbarLogos">
          <a href="https://www.instagram.com/isaac.d.l/" target="_blank">
            <img src="/images/logoT.png" alt="logo" className="logoT" />
          </a>
          <a href="https://github.com/Isaacdl2" target="_blank">
            <img
              src="/images/github_PNG40.png"
              alt="GitHub"
              className="logoG"
            />
          </a>
        </div>
      </div>
      <nav>
        <ul className="header-nav">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#work">Work Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
