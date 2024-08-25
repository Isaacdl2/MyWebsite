import "./GridLayout.css";
import ButtonSection from "./ButtonSection";

function GridLayout() {
  return (
    <div className="container">
      <div className="square-1">
        <h2>Isaac D. Larson</h2>
        <div className="content">
          <p className="text-above-line">
            Student in Computer Science & Eletrical Engineering
          </p>
          <div className="line"></div>
        </div>
        <ButtonSection></ButtonSection>
      </div>
      <div className="square-2">
        <div className="photo">
          <img src="/images/myImage.png"></img>
        </div>
      </div>
      <div className="square-3">
        <h2>About Me</h2>
        <div className="line2"></div>
        <p>
          Hi, I’m Isaac! I’m currently pursuing a dual major in Computer Science
          and Electrical/Computer Engineering at the University of Arizona. My
          studies have ignited a strong passion in space exploration and
          artificial intelligence. I am eager to apply my skills and knowledge
          to innovative projects that push the boundaries of technology.
        </p>
      </div>
      <div className="square-4">
        <h2>Square 4</h2>
        <p>Content for bottom right corner.</p>
      </div>
      <div className="square-5">
        <h2>Square 5</h2>
        <p>Content for bottom right corner.</p>
      </div>
      <div className="square-6">
        <h2>Square 5</h2>
        <p>Content for bottom right corner.</p>
      </div>
    </div>
  );
}

export default GridLayout;
