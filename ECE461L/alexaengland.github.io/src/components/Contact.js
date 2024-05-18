import React from 'react';
import linkedinLogo from '../linkedin-logo.png'; // Ensure this is the correct path to the LinkedIn logo
import githubLogo from '../github-logo.png'; // Ensure this is the correct path to the GitHub logo

function Contact() {
  return (
    <div className="Contact bg-blue-100 p-5 rounded shadow mx-auto text-center">
      <h2 className="display-4 fw-bold mb-5">Contact Me</h2>
      <p className="lead mb-2"><strong>Email:</strong> alexaengland29@utexas.edu</p>
      <div className="d-flex justify-content-center gap-4 mt-4">
        <a href="https://www.linkedin.com/in/alexaengland" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" style={{ width: '40px', height: '40px' }} />
        </a>
        <a href="https://github.com/alexaengland" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" style={{ width: '40px', height: '40px' }} />
        </a>
      </div>
    </div>
  );
}

export default Contact;
