// Project.js
import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ title, image, deployedLink, githubLink }) => {
  console.log(React);
  return (
    <div className="project">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
        {' | '}
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      </p>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  deployedLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
};

export default Project;

