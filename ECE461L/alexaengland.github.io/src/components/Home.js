import React from 'react';
import profilePic from '../profile-pic.jpg'; // Ensure this is the correct path to your profile picture
import linkedinLogo from '../linkedin-logo.png'; // Ensure this is the correct path to the LinkedIn logo
import githubLogo from '../github-logo.png'; // Ensure this is the correct path to the GitHub logo

function Home() {
  return (
    <div className="Home min-vh-100 d-flex flex-column justify-content-center align-items-center text-black bg-blue-200">
      <div className="text-center mb-4">
        <img src={profilePic} className="rounded-circle border border-4 border-white shadow-lg" alt="Alexa England" style={{ width: '300px', height: '300px' }} />
      </div>
      <h1 className="display-3 fw-bold mb-3">Alexa England</h1>
      <p className="lead mb-4">Aspiring Machine Learning Specialist and Software Engineer.</p>
      <div className="social-links d-flex justify-content-center gap-4">
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

export default Home;


