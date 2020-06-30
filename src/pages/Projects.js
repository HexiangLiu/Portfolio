import React, { useContext } from 'react';

import { MainContext } from '../context';
import Project from '../components/Project';

import './Projects.scss';

export default function Projects(props) {
  const items = useContext(MainContext);

  return (
    <>
      <section className="projects">
        <h1 className="projects__title">Take a look at my project</h1>
        <h2 className="projects__intro">
          Yes! I am a big fan of react and I've done a lot of react projects
          even my portfolio!
        </h2>
        {items.map((item) => (
          <Project project={item} key={item.id} />
        ))}
      </section>
    </>
  );
}
