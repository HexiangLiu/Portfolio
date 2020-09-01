import React from 'react';

import contact from './assets/contact_keeper.JPG';
import beach from './assets/beach_resort.jpg';
import budgetCalculator from './assets/budgetCalculator.jpg';
import portfolio from './assets/portfolio.JPG';
import ecommerce from './assets/ecommerce.JPG';
import covid from './assets/COVID.jpg';

const MainContext = React.createContext();

const projectData = [
  {
    id: 1,
    img: ecommerce,
    title: 'ecommerce store',
    description:
      'An ecommerce store website that allows users to register, login, shopping and complete orders using credit cards. Built font end using React, React Router, Redux, Sass. Developed back end with Strapi. Intergrated with Stripe in order to creat payment flows',
    site: 'https://henry-ecommerce-store.netlify.app/',
    code: 'https://github.com/HexiangLiu/react-redux-ecommerce',
    keywords: ['React', 'React-router-dom', 'Lazy-loading', 'Scss'],
  },
  {
    id: 2,
    img: contact,
    title: 'contact keeper',
    description:
      'An ecommerce store website that allows users to register, login, shopping and complete orders using credit cards. Built font end using React, React Router, Redux, Sass. Developed back end with Strapi. Intergrated with Stripe in order to creat payment flows',
    site: 'https://hexiang-contact-keeper.herokuapp.com/',
    code: 'https://github.com/HexiangLiu/Contact-Keeper-Backend',
    keywords: ['React', 'React-router-dom', 'Lazy-loading', 'Scss'],
  },
  {
    id: 3,
    img: portfolio,
    title: 'portfolio',
    description:
      'My single page React Portfolio designed by using HTML, Javascript, React and React Router. A fully responsive page Styled with customized Scss without using any CSS framwork. I also applied lazy loading with intersection observer in order to improve performace.',
    site: 'https://hexiangliu.netlify.app/',
    code: 'https://github.com/HexiangLiu/Portfolio',
    keywords: ['React', 'React-router-dom', 'Lazy-loading', 'Scss'],
  },
  {
    id: 4,
    img: beach,
    title: 'beach resort',
    description:
      'A luxurious beach resort project designed by me using HTML, CSS, Sass, Javascript, React, React Router and Styled componets ',
    site: 'https://henry-react-beach-resort.netlify.app/',
    code: 'https://github.com/Henry-Liu1997/react-beach-resort',
    keywords: ['React', 'React-router-dom', 'Lazy-loading', 'Scss'],
  },
  {
    id: 5,
    img: budgetCalculator,
    title: 'budget calculator',
    description:
      'A budget calculator designed by me using HTML, CSS, Javascript, BootStrap, React',
    site: 'https://henry-react-budget-calculator.netlify.app/',
    code: 'https://github.com/Henry-Liu1997/react-budget-calculator',
    keywords: ['React', 'React-router-dom', 'Lazy-loading', 'Scss'],
  },
  {
    id: 6,
    img: covid,
    title: 'COVID-19 Resource',
    description:
      'A webpage that help New York residents to find the nearest testing locations and free meals locations with their zip code. •	Lead developer of a group of four. Wrote down pseudocode, assigned tasks to team members and handled Github workflow',
    site: 'https://hexiangliu.github.io/COVID-Project/',
    code: 'https://github.com/HexiangLiu/COVID-Project',
    keywords: ['React', 'React-router-dom', 'Lazy-loading', 'Scss'],
  },
];

function MainProvider(props) {
  return (
    <MainContext.Provider value={projectData}>
      {props.children}
    </MainContext.Provider>
  );
}

export { MainContext, MainProvider };
