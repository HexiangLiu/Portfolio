import React from 'react';

import beach from './images/beach_resort.jpg';
import cocktail from './images/cocktail.JPG';
import todoList from './images/todolist.jpg';
import budgetCalculator from './images/budgetCalculator.jpg';
import portfolio from './images/portfolio.JPG';
import counter from './images/counter.JPG';

const MainContext = React.createContext();

const projectData = [
  {
    id: 1,
    img: portfolio,
    title: 'portfolio',
    description:
      'My pretty cool single page React Portfolio designed by me using HTML, CSS, Sass, Javascript, React and React Router',
    site: 'https://henry-liu-portfolio.netlify.app/',
    code: 'https://github.com/Henry-Liu1997/Portfolio',
  },
  {
    id: 2,
    img: beach,
    title: 'beach resort',
    description:
      'A luxurious beach resort project designed by me using HTML, CSS, Sass, Javascript, React, React Router and Styled componets ',
    site: 'https://henry-react-beach-resort.netlify.app/',
    code: 'https://github.com/Henry-Liu1997/react-beach-resort',
  },
  {
    id: 3,
    img: cocktail,
    title: 'cocktail',
    description:
      'A cockitail search website designed by using HTML, Sass, React and third party api. Powered by TheCocktailDB',
    site: 'https://henry-cocktail.netlify.app/',
    code: 'https://github.com/Henry-Liu1997/react-cocktail',
  },
  {
    id: 4,
    img: counter,
    title: 'counter',
    description:
      'A counter designed by using HTML, CSS, Javascirpt, React, Redux and Redux Thunk. Used third party API to get the real time temperature ℉ in New York City and Beijing by appling axios and Redux Thunk.',
    site: 'https://henry-react-redux-counter.netlify.app/',
    code: 'https://github.com/Henry-Liu1997/react-redux-counter',
  },
  {
    id: 5,
    img: todoList,
    title: 'todo list',
    description:
      'A todoList designed by me using HTML, CSS, Sass, Javascript, React',
    site: 'https://henry-todolist.netlify.app/',
    code: 'https://github.com/Henry-Liu1997/react-todolist',
  },
  {
    id: 6,
    img: budgetCalculator,
    title: 'budget calculator',
    description:
      'A budget calculator designed by me using HTML, CSS, Javascript, BootStrap, React',
    site: 'https://henry-react-budget-calculator.netlify.app/',
    code: 'https://github.com/Henry-Liu1997/react-budget-calculator',
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
