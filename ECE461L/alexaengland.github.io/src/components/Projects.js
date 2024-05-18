import React from 'react';
import './Projects.css'; // Ensure this is the correct path

function Projects() {
  const projectData = [
    {
      title: "Project and Hardware Management Web-Application",
      date: "January 2024 – April 2024",
      description: [
        "Developed a management web application using Python, React, HTML, CSS, JavaScript, Flask, and MongoDB.",
        "Applied agile project management methodologies, including Scrum and Kanban, to ensure timely delivery of project milestones, adaptability to change, and effective team collaboration.",
        "Designed a user-friendly UI enabling efficient project viewing and software check-in/check-out functionality, enhancing operational efficiency and user engagement."
      ]
    },
    {
      title: "Weather App",
      date: "November 2023",
      description: [
        "Created a weather app in Android Studio using Open Meteo API for real-time forecasts.",
        "Implemented location-based data retrieval and an intuitive UI.",
        "Executed comprehensive data analysis on acquired data to calculate and present expected daily average temperatures for the subsequent week."
      ]
    },
    {
      title: "Mastermind Game using Networking",
      date: "October 2023",
      description: [
        "Developed a multi-threaded game server in Java using TCP/IP protocols.",
        "Implemented a thread-per-client model to enable multiple clients to join the game simultaneously.",
        "Conducted thorough testing and debugging to ensure robustness and reliability of the server under several different network conditions and user scenarios."

      ]
    },
    {
      title: "Disaster Relief Robots",
      date: "May 2023",
      description: [
        "Engineered a Java disaster-response program to direct autonomous robots during natural disasters, improving the efficiency of rescue operations.",
        "Designed a multi-criteria decision-making framework within the algorithm to autonomously prioritize rescue missions, considering factors such as age, health, and location accessibility."
      ]
    },
    {
      title: "Digital Kinder Kit",
      date: "March 2023 - April 2023",
      description: [
        "Developed a program in Java to represent the kinder kits which are given to infants in Victoria by the Australian government.",
        "Allows the user to create a canvas and print triangles and rectangles and then move, rotate, zoom in or out, or delete them to create various drawings."
      ]
    },
    {
      title: "Pac-Man Game Design Incorporating Embedded Systems",
      date: "November 2022",
      description: [
        "Engineered a custom version of Pac-Man, utilizing C programming and a Texas Instruments microcontroller, with a focus on integrating advanced electronic components and interfaces for an enriched gaming experience.",
        "Developed an advanced Human-Machine Interface (HMI) to improve user experience by integrating a joystick for intuitive navigation, LEDs for visual feedback, and an audio jack connected to a DAC for immersive sound output, all incorporated into a custom PCB designed using Autodesk Eagle, enhancing interactive gameplay."
      ]
    }
  ];

  return (
    <div className="Projects">
      <h2 className="display-4 fw-bold text-center mb-5">Projects</h2>
      <div className="row">
        {projectData.map((project, index) => (
          <div className="col-12 mb-4" key={index}>
            <div className="project-card shadow-sm p-4">
              <h3 className="project-title">{project.title}</h3>
              <h4 className="project-date text-muted">{project.date}</h4>
              <ul className="project-description list-unstyled">
                {project.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;




