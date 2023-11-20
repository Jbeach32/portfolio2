// Portfolio.js
import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
    console.log(React);
  // Define your project data
  const projects = [
    {
      title: 'Javascript Example 1',
      image: 'Note.png', 
      deployedLink: 'https://note-takerjbeach-29c955ba285b.herokuapp.com/',
      githubLink: 'https://github.com/Jbeach32/Note',
    },
    {
      title: 'Javascript Example 2',
      image: 'weather.jpg',
      deployedLink: 'https://github.com/Jbeach32/Weather',
      githubLink: 'https://jbeach32.github.io/Weather/'
    },
    {
      title: 'CSS Example 1',
      image: 'password.png',
      deployedLink: 'https://github.com/Jbeach32/Password',
      githubLink: 'https://jbeach32.github.io/Password/'
    },
    {
      title: 'Javascript Example 3',
      image: 'database.jpg',
      deployedLink: 'https://github.com/Jbeach32/Employee-Database',
      githubLink: 'https://drive.google.com/file/d/1X24VYArroRcObcWMLO_ev6Zzm4xMiFN7/view'
    },
    {
      title: 'Javascript Example 4',
      image: 'quiz.jpg',
      deployedLink: 'https://github.com/Jbeach32/Quiz',
      githubLink: 'https://jbeach32.github.io/Quiz/'
    },
    {
      title: 'Javascript Example 5',
      image: 'calendar.jpg',
      deployedLink: 'https://github.com/Jbeach32/Calendar',
      githubLink: 'https://jbeach32.github.io/Calendar'
    },
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
