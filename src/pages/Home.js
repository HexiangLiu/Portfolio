import React from 'react';

import './Home.scss';

export default function Home() {
  return (
    <main className="home">
      <h1 className="greeting">hi, i am henry</h1>
      <h2 className="intro">an aspiring web developer</h2>
      <p className="about">
        I have a deep understanding of Javascript, CSS and HTML and a good gasp
        of some modern frameworks such as React. Familiar with back end
        development using Node.js. Intermediate data analysis skills using
        python. Moreover, I am a tech-driven person with strong enthusiasms for
        learning and self-teaching which I think it's the key to avoid falling
        behind in this rapidly changing era
      </p>
      <div className="skill-box">
        <h3>my skills</h3>
        <ul className="skills">
          <li className="skill">HTML</li>
          <li className="skill">CSS</li>
          <li className="skill">Javascript</li>
          <li className="skill">BootStrap</li>
          <li className="skill">React</li>
          <li className="skill">Redux</li>
        </ul>
      </div>
    </main>
  );
}
