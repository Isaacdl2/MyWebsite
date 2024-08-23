import "./ButtonSection.css";

function ButtonSection() {
  return (
    <div className="button-section">
      <div className="button-container">
        <a
          href="/documents/test-pdf.pdf"
          download="MyFile.pdf"
          className="download-button"
        >
          <i className="fas fa-download"></i> Download CV
        </a>
        <a href="tel:+1234567890" className="contact-button">
          <i className="fas fa-phone-alt"></i> Contact Me
        </a>
      </div>
    </div>
  );
}

export default ButtonSection;
