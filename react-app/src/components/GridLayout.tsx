import "./GridLayout.css";

function GridLayout() {
  return (
    <div className="container">
      <div className="square-1">
        <h2>Square 1</h2>
        <p>Content for top left corner.</p>
      </div>
      <div className="square-2">
        <h2>Square 2</h2>
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
    </div>
  );
}

export default GridLayout;
