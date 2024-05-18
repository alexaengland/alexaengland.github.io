import React from 'react';
import austinSkyline from '../austin-background.jpg'; // Ensure this is the correct path to the Austin skyline image

function ExperienceAndSkills() {
  return (
    <div className="ExperienceAndSkills position-relative text-white py-5" style={{ backgroundImage: `url(${austinSkyline})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="bg-dark bg-opacity-75 p-5 rounded shadow m-4 mx-auto" style={{ maxWidth: '800px' }}>
        <h2 className="display-4 fw-bold mb-5">Experience & Skills</h2>
        <div className="text-start">
          <h3 className="h4 fw-bold mb-3">Experience</h3>
          <div className="mb-4">
            <h4 className="h5 fw-bold mb-2">ASRC Federal STRIDE Software Intern (June 2024 – August 2024)</h4>
            <ul className="list-unstyled">
              <li>Collaborated with cross-functional teams to identify and resolve software issues.</li>
              <li>Documented software processes and supported new feature implementation.</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="h5 fw-bold mb-2">Capstone Senior Design Project: GIS Data and Ground Sensor Data Fusion (Lockheed Martin) (January 2024 – Present)</h4>
            <ul className="list-unstyled">
              <li>Leading software development efforts for integrating geophone sensor data with GIS for real-time soil bearing capacity analysis.</li>
              <li>Researching and implementing machine learning models for accurate calculations.</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="h5 fw-bold mb-2">IBM Accelerate Participant (June 2023 – July 2023)</h4>
            <ul className="list-unstyled">
              <li>Developed a secure web-based To-Do list application.</li>
              <li>Engaged in career readiness training and received mentorship from IBM professionals.</li>
            </ul>
          </div>
        </div>
        <h3 className="h4 fw-bold mb-3">Skills</h3>
        <p>Proficient in: Keil uVision5, C, ARM Assembly, C++, Python, Verilog, Java</p>
        <p>Familiar with: React, MATLAB, JavaScript, CSS, HTML, Node.js, MySQL, NoSQL, MongoDB, PyMongo, Volley, Git, Sci-Kit Learn, pandas, NumPy, SciPy, Android Studio, Visual Studio Code, IntelliJ</p>
      </div>
    </div>
  );
}

export default ExperienceAndSkills;









