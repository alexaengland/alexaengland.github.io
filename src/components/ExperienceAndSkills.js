import React from 'react';
import austinSkyline from '../austin-background.jpg'; // Ensure this is the correct path to the Austin skyline image

function ExperienceAndSkills() {
  return (
    <div className="ExperienceAndSkills position-relative text-white py-5" style={{ backgroundImage: `url(${austinSkyline})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="bg-dark bg-opacity-75 p-5 rounded shadow m-4 mx-auto" style={{ maxWidth: '800px' }}>
        <h2 className="display-4 font-bold mb-5">Experience & Skills</h2>
        <div className="text-start">
          <h3 className="h4 font-semibold mb-3">Experience</h3>
          <div className="mb-4">
            <h4 className="h5 font-semibold mb-2">ASRC Federal STRIDE Software Intern (June 2024 – August 2024)</h4>
            <ul style={{ listStyleType: "disc"}}>
              <li>Collaborated with the NASA SES III contact as part of the space software development team</li>
              <li>Built a multi-agent model using Llama3 to simulate project operations, integrating Stable Diffusion for visual outputs and streamlined workflows</li>
              <li>Developed a RAG model using PyTorch, HuggingFace, Llama3, and LlamaIndex to facilitate team understanding by answering technical questions related to satellite telemetry data, enhancing team understanding of satellite operations</li>
              <li>Trained forecasting time-series algorithms including Amazon Chronos, Prophet, and Neural Prophet using data from GOES-R satellite mnemonics, queried from InfluxDB to predict potential errors and anomalies in satellite instruments</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="h5 font-semibold mb-2">Capstone Senior Design Project: GIS Data and Ground Sensor Data Fusion (Lockheed Martin) (January 2024 – December 2024)</h4>
            <ul style={{ listStyleType: "disc"}}>
              <li>Leading software development efforts for integrating geophone sensor data with GIS for real-time soil bearing capacity analysis.</li>
              <li>Researching and implementing machine learning models for accurate calculations.</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="h5 font-semibold mb-2">IBM Accelerate Participant (June 2023 – July 2023)</h4>
            <ul style={{ listStyleType: "disc"}}>
              <li>Developed a secure web-based To-Do list application.</li>
              <li>Engaged in career readiness training and received mentorship from IBM professionals.</li>
            </ul>
          </div>
        </div>
        <h3 className="h4 font-bold mb-3">Skills</h3>
        <p>Proficient in: C, ARM Assembly Language, C++, Python, Verilog, and Java</p>
        <p>Familiar with: React, MATLAB, JavaScript, CSS, HTML, Node.js, MySQL, NoSQL, MongoDB, PyMongo, Volley, Git, Sci-Kit Learn, pandas, NumPy, SciPy, PyTorch, Android Studio, Visual Studio Code, Jupyter Notebooks, Keil uVision5, PyCharm, Quartus, and IntelliJ</p>
      </div>
    </div>
  );
}

export default ExperienceAndSkills;









