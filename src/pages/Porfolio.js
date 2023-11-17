// Portfolio.js
import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  // Define your project data
  const projects = [
    {
      title: 'Project 1',
      image: 'project1.jpg',
      deployedLink: 'https://project1.com',
      githubLink: 'https://github.com/yourusername/project1',
    },
    // Add more projects as needed
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
