// Portfolio.js
import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
    console.log(React);
  // Define your project data
  const projects = [
    {
      title: 'Project 1',
      image: 'project1.jpg',
      deployedLink: 'https://note-takerjbeach-29c955ba285b.herokuapp.com/',
      githubLink: 'https://github.com/Jbeach32/Note',
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