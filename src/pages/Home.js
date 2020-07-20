import React from 'react';

import './Home.scss';

export default function Home() {
  return (
    <main className="home">
      <h1 className="greeting">hi, i am henry</h1>
      <h2 className="intro">an aspiring web developer</h2>
      <p className="about">
        Lifelong seeker of knowledge and Mechanical Engineering graduate who
        currently has their sights set on a full-time web development position.
        Strong self-teaching ability and can quickly master a new skill.
        Effective at combining creativity and problem solving to develop
        user-friendly applications.
      </p>
      <div className="skill-box">
        <h3>my skills</h3>
        <ul className="skills">
          <li className="skill">HTML</li>
          <li className="skill">CSS</li>
          <li className="skill">Javascript</li>
          <li className="skill">jQuery</li>
          <li className="skill">SASS</li>
          <li className="skill">BootStrap</li>
          <li className="skill">React</li>
          <li className="skill">Redux</li>
        </ul>
      </div>
    </main>
  );
}
