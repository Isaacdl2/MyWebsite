import "./GridLayout.css";
import ButtonSection from "./ButtonSection";

function GridLayout() {
  return (
    <div className="container">
      <div className="square-1">
        <h2>Isaac D. Larson</h2>
        <div className="line"></div>
        <ButtonSection></ButtonSection>
      </div>
      <div className="square-2">
        <div className="photo">
          <img src="/images/myImage.png"></img>
        </div>
      </div>
      <div className="square-3">
        <h2>Square 3</h2>
        <p>Content for bottom left corner.</p>
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
