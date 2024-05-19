import React from 'react';
import utLogo from '../ut-logo.png'; // Ensure this is the correct path to the UT logo
import austinSkyline from '../ut-background.jpg'; // Ensure this is the correct path to the Austin skyline image

function Education() {
  return (
    <div className="Education position-relative text-white py-5" style={{ backgroundImage: `url(${austinSkyline})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="bg-dark bg-opacity-75 p-5 rounded shadow m-4 mx-auto" style={{ maxWidth: '800px' }}>
        <h2 className="display-4 font-bold mb-5">Education</h2>
        <div className="d-flex flex-column align-items-center">
          <img src={utLogo} alt="University of Texas" style={{ width: '200px', height: '105px' }} />
          <h3 className="h4 font-semibold mt-3">University of Texas at Austin</h3>
          <p>Bachelor of Science in Electrical and Computer Engineering - Software Engineering Track</p>
          <p>August 2021 - May 2025</p>
          <p>GPA: 3.69</p>
        </div>
      </div>
    </div>
  );
}

export default Education;


