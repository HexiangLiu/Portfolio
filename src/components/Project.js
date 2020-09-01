import React, { useEffect } from 'react';
import { FaBattleNet, FaGithub } from 'react-icons/fa';

import './Project.scss';

export default function Project({ project }) {
  const { img, title, description, site, code, keywords } = project;

  useEffect(() => {
    const projects = document.querySelectorAll('.project');
    const images = document.querySelectorAll('.project__image');

    const loadProject = (element) => {
      // element.classList.add('visible');
      element.style.opacity = 1;
    };

    const loadImage = (element) => {
      element.setAttribute('src', element.getAttribute('data-src'));
    };

    const observer1 = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadProject(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.8 }
    );

    const observer2 = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadImage(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.8 }
    );
    projects.forEach((project) => observer1.observe(project));
    images.forEach((image) => observer2.observe(image));
  }, []);

  return (
    <article className="project">
      <div className="project__img--container">
        <img className="project__image" data-src={img} alt="project-1" />
        <p className="project__btn">
          <a className="btn project__btn--1" href={site} target="blank">
            <FaBattleNet className="icon" /> view site
          </a>
          <a className="btn project__btn--2" href={code} target="blank">
            <FaGithub className="icon" />
            code
          </a>
        </p>
      </div>
      <div className="project__detail">
        <h3 className="project__title">{title}</h3>
        <p className="project__description">{description}</p>

        <ul className="project__skills">
          {keywords.map((keyword, index) => (
            <li key={index} className="project__skill">
              {keyword}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
