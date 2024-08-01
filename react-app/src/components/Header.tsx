import "./Header.css";

function Header() {
  return (
    <header className="header">
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
        </ul>
      </nav>
    </header>
  );
}

export default Header;
