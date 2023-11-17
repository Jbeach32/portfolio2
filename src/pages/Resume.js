// Resume.js
import React from 'react';

const Resume = () => {
    console.log(React);
  return (
    <section>
      <h2>Resume</h2>
      <p>
        Download my resume:{' '}
        <a href="/path/to/your-resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume.pdf
        </a>
      </p>
      <h3>Skills and Proficiencies</h3>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        {/* Add more skills as needed */}
      </ul>
    </section>
  );
};

export default Resume;
