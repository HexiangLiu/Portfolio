import React from 'react';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

import './Contact.scss';
export default function Contact() {
  return (
    <section className="contact">
      <h1 className="contact__title">let's get in touch</h1>
      <h3 className="contact__intro">
        I am actively seeking a web developer position!
      </h3>
      <div className="contact__detail">
        <a
          href="https://www.linkedin.com/in/hexiang-liu/"
          target="__blank"
          className="contact__link"
        >
          <FaLinkedin className="contact__icon" />
        </a>
        <a
          href="https://github.com/Henry-Liu1997"
          target="__blank"
          className="contact__link"
        >
          <FaGithub className="contact__icon" />
        </a>

        <a href="mailto:hl3184@columbia.edu" className="contact__link">
          <FaEnvelope className="contact__icon" />
        </a>
      </div>
    </section>
  );
}
