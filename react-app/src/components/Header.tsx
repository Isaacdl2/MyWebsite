import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        {/*<img src="/images/UA-LOGO.png" className="logo" /> */}
        <span className="header-text">Developer</span>
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
