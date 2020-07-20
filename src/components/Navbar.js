import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaAlignJustify,
  FaRegWindowClose,
} from 'react-icons/fa';

import profile_photo from '../assets/Hexiang_Liu.jpg';

import './Navbar.scss';

export default function Navbar() {
  const [display, setDisplay] = useState(false);

  return (
    <>
      <span className="navbar__toggle" onClick={() => setDisplay(!display)}>
        {display ? <FaRegWindowClose /> : <FaAlignJustify />}
      </span>
      <aside className={`aside ${display && 'show'}`}>
        <nav className="navbar">
          <div className="navbar__info">
            <img
              className="navbar__img"
              src={profile_photo}
              alt="profile_photo"
            />
            <h1>Henry Liu</h1>
            <p>
              <FaEnvelope className="navbar__icon--mail" />
              hl3194@columbia.edu
            </p>
          </div>
          <div className="navbar__navigation">
            <NavLink className="navbar__link" to="/">
              about
            </NavLink>
            <NavLink className="navbar__link" to="/project">
              project
            </NavLink>
            <NavLink className="navbar__link" to="/contact">
              contact
            </NavLink>
          </div>
          <div className="navbar__social">
            <a href="https://www.linkedin.com/in/hexiang-liu/" target="__blank">
              <FaLinkedin className="navbar__icon" />
            </a>
            <a href="https://github.com/HexiangLiu" target="__blank">
              <FaGithub className="navbar__icon" />
            </a>
          </div>
        </nav>
      </aside>
    </>
  );
}
