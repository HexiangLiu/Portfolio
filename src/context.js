import React from 'react';

import beach from './images/beach_resort.jpg';
import todoList from './images/todolist.jpg';
import budgetCalculator from './images/budgetCalculator.jpg';
import portfolio from './images/portfolio.JPG';

const MainContext = React.createContext();

const projectData = [
  {
    id: 1,
    img: portfolio,
    title: 'portfolio',
    description: 'My pretty cool single page React Portfolio',
    site: 'https://henry-liu-portfolio.netlify.app/',
    code: 'https://github.com/Henry-Liu1997/Portfolio',
  },
  {
    id: 2,
    img: beach,
    title: 'beach resort',
    description:
      'A class based react project designed with react router, styled componets',
    site: 'https://henry-react-beach-resort.netlify.app/',
    code: 'https://github.com/Henry-Liu1997/react-beach-resort',
  },
  {
    id: 3,
    img: todoList,
    title: 'todo list',
    description: 'A todoList built with React',
    site: 'https://henry-todolist.netlify.app/',
    code: 'https://github.com/Henry-Liu1997/react-todolist',
  },
  {
    id: 4,
    img: budgetCalculator,
    title: 'budget calculator',
    description: 'A function based react project bulit with using react hooks',
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
