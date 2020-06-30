import React from 'react';
import { FaBattleNet, FaGithub } from 'react-icons/fa';

import './Project.scss';

export default function Project({ project }) {
  const { img, title, description, site, code } = project;
  console.log(img, title, description);
  return (
    <article className="project">
      <img className="project__image" src={img} alt="project-1" />
      <h2 className="project__title">{title}</h2>
      <p className="project__description">{description}</p>
      <a className="btn project__btn-1" href={site} target="blank">
        <FaBattleNet className="icon" /> view site
      </a>
      <a className="btn project__btn-2" href={code} target="blank">
        <FaGithub className="icon" />
        code
      </a>
    </article>
  );
}
