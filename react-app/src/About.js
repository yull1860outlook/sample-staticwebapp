import React  , { useState, useEffect } from 'react';

const About = () => {
  const [data, setData] = useState('');
  useEffect(() => {
    (async function () {
      const  text = await fetch(`/api/data`);
      setData(text);
    })();
  });

  return  <div className="content-container">
    <div className="content-title-group not-found">
      <h2 className="title">Product Wish List</h2>
      <p>
        This project was created to help represent a fundamental app written
        with React. The shopping theme is used throughout the app.
      </p>
      <br />
      <h2 className="title">Resources</h2>
      <ul>
        <li>
          <a href="https://github.com/MicrosoftDocs/mslearn-staticwebapp">
            Code in GitHub
          </a>
        </li>
      </ul>{data}
    </div>
  </div>;
}

export default About;
