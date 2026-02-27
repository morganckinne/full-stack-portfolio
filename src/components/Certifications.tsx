import React, { useEffect } from 'react';
import '../assets/styles/Certifications.scss';

// function Certifications() {
const Certifications: React.FC = () => {
    useEffect(() => {
    const scriptId = "credly-embed";

    if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.src = "https://cdn.credly.com/assets/utilities/embed.js";
        script.async = true;
        document.body.appendChild(script);
    }
    }, []);
  return (
    // <div className="container">
    <div className="certification-container">
        <h1>Certifications</h1>
        <div className="certification-grid">
            <div className="certification" data-iframe-width="300" data-iframe-height="600" data-share-badge-id="37c1856f-fb9b-47c8-afc5-acc90cac3df8" data-share-badge-host="https://www.credly.com"></div>
        </div>
    </div>
    // </div>
  );
}

export default Certifications;


