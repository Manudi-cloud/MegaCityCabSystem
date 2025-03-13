import React from "react";

function UserGuidelines() {
  return (
    <div>
      <h1>User Guidelines</h1>
      <p>Click the button below to view or download the user guidelines.</p>
      
      {/* Link to open the PDF */}
      <a href="/guidelines.pdf" target="_blank" rel="noopener noreferrer">
        View Guidelines (PDF)
      </a>

      {/* Button to download the PDF */}
      <br />
      <a href="/guidelines.pdf" download>
        <button>Download PDF</button>
      </a>
    </div>
  );
}

export default UserGuidelines;