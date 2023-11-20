// Resume.js
import React from 'react';

const Resume = () => {
    console.log(React);
  return (
    <section>
      <h2>Resume</h2>
      <p>
        Download my resume:{' '}
        <a href="https://drive.google.com/file/d/1EQGO8wWC0Qas68UMHOWiixOhy3hg-EhW/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          Resume.pdf
        </a>
      </p>
      <h3>Skills and Proficiencies</h3>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        {/* Add more skills as needed */}
      </ul>
    </section>
  );
};

export default Resume;
