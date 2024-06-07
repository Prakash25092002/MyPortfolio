import React from "react";
import ttt from "../../assets/ttt.jpeg";
import wf from "../../assets/wf.jpeg";
import port from "../../assets/port.jpeg";
import ls from "../../assets/ls.jpg";
const ServicesPage = () => {
  const projects = [
    {
      id: 1,
      title: "Weather-Forcasting Website",
      description:
      "Get accurate, real-time weather forecasts with our React.js powered app. Seamlessly integrated with weather APIs for intuitive updates at your fingertips.",
      technologies: ["React", "Api", "Tailwind.css", ],
      imageUrl:wf // Replace with actual image URL
    },
    { 
      id: 2,
      title: "Live streaming software ",
      description:
        "Experience seamless live streaming with our software. Built with Node.js, Express.js, Docker, Fmpgg, and Socket.io, it offers robust functionality for high-quality broadcasts.",
      technologies: ["node.js", "Express.js", "Docker","Fmpgg","Socket.io"],
      imageUrl: ls, // Replace with actual image URL
    },
    {
      id: 3,
      title: "Tic Tac Toe",
      description:
        "Enjoy a classic game of Tic Tac Toe made with React.js, JavaScript, and Tailwind CSS. Play against a friend or challenge the computer for a quick and fun experience.",
      technologies: ["react.js", "JavaScript", "Tailwind.Css"],
      imageUrl: ttt, // Replace with actual image URL
    },
    {
      id: 4,
      title: "Portfolio",
      description:
      "Showcase my skills and projects with a sleek Portfolio website. Crafted using React.js, Tailwind.css, and React-Router, it offers a seamless browsing experience for your visitors.",
      technologies: ["React.js", "Tailwind.css", "React-Router", ],
      imageUrl: port, // Replace with actual image URL
    },
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-semibold mb-9 text-center  ">Projects</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="p-4 border border-gray-200 rounded-lg">
            <img src={project.imageUrl} alt={project.title} className="w-full h-32 object-cover mb-4 rounded-lg"/>
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-200 text-gray-700 rounded-md mr-2 mb-2"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
