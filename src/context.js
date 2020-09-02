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
      'An ecommerce store website that allows users to register, login, shopping and complete orders with credit cards. Built font end using React, React Router, Redux, Sass. Developed back end with content manngement system Strapi. Intergrated with Stripe in order to handle and monitor payment flows',
    site: 'https://henry-ecommerce-store.netlify.app/',
    code: 'https://github.com/HexiangLiu/react-redux-ecommerce',
    keywords: [
      'React',
      'React-router-dom',
      'Redux',
      'Redux Thunk',
      'Sass',
      'Strapi(CMS)',
      'Stripe',
    ],
  },
  {
    id: 2,
    img: contact,
    title: 'contact keeper',
    description:
      'A typical MERN project that allows user to register, login, and store or search their contacts along with the contact information. Built front end with React, React Router. Applied useReducer and useContext hooks to perform state management. Developed backend with Node.js and Express, and used JWT to handle user authentication. Hoist database on MongoDB Altas Cloud',
    site: 'https://hexiang-contact-keeper.herokuapp.com/',
    code: 'https://github.com/HexiangLiu/Contact-Keeper-Backend',
    keywords: [
      'React',
      'React-router-dom',
      'Bootstrap',
      'Sass',
      'Node.js',
      'Express',
      'MongoDB',
    ],
  },
  {
    id: 3,
    img: portfolio,
    title: 'portfolio',
    description:
      'A single page React Portfolio designed by using React and React Router. A fully responsive and moblie friendly page styled with customized Scss without using any CSS framwork. Applied lazy loading using intersection observer in order to improve performace.',
    site: 'https://hexiangliu.netlify.app/',
    code: 'https://github.com/HexiangLiu/Portfolio',
    keywords: ['React', 'React-router-dom', 'Lazy-loading', 'Sass'],
  },
  {
    id: 4,
    img: beach,
    title: 'beach resort',
    description:
      'A luxurious beach resort project designed by me using HTML, CSS, Sass, Javascript, React, React Router and Styled componets ',
    site: 'https://henry-react-beach-resort.netlify.app/',
    code: 'https://github.com/HexiangLiu/react-beach-resort',
    keywords: ['React', 'React-router-dom', 'Styled Component', 'Sass'],
  },
  {
    id: 5,
    img: budgetCalculator,
    title: 'budget calculator',
    description:
      'A progessive web application that allows users to download and use it to store and calculate budget even when offline. Built font end UI with React, and achieve PWA by using manifest, Service Worker API, Web Cache and localStorage API',
    site: 'https://henry-budget-calculator.netlify.app/',
    code: 'https://github.com/HexiangLiu/react-budget-calculator',
    keywords: [
      'PWA',
      'React',
      'Manifest',
      'Service Worker',
      'Web Cache',
      'localStorage',
    ],
  },
  {
    id: 6,
    img: covid,
    title: 'COVID-19 Resource',
    description:
      'A webpage that designed to help New York residents to find the nearest testing locations and free meals locations with their zip code. Built front end UI with jQuery and Foundation framework, powered by New York testing locations, free meals locations and ZIP Code API',
    site: 'https://hexiangliu.github.io/COVID-Project/',
    code: 'https://github.com/HexiangLiu/COVID-Project',
    keywords: ['jQuery', 'AJAX'],
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
