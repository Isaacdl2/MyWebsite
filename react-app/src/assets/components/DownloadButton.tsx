import "./DownloadButton.css";

function DownloadButton() {
  return (
    <a
      href="/documents/test-pdf.pdf"
      download="MyFile.pdf"
      className="download-button"
    >
      <i className="fas fa-download"></i> Download CV
    </a>
  );
}

export default DownloadButton;
