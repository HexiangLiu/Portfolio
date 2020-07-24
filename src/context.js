import React from 'react';

import beach from './assets/beach_resort.jpg';
import cocktail from './assets/cocktail.JPG';
import todoList from './assets/todolist.jpg';
import budgetCalculator from './assets/budgetCalculator.jpg';
import portfolio from './assets/portfolio.JPG';
import counter from './assets/counter.JPG';
import ecommerce from './assets/ecommerce.JPG';
import covid from './assets/COVID.jpg';
import weather from './assets/weather.JPG';
import schedule from './assets/schedule.JPG';
import quiz from './assets/quiz.JPG';

const MainContext = React.createContext();

const projectData = [
  {
    id: 1,
    img: ecommerce,
    title: 'ecommerce store',
    topic: 'redux',
    description:
      'An ecommerce store website that allows users to register, login, shopping and complete orders using credit cards. Built font end using React, React Router, Redux, Sass. Developed back end with Strapi. Intergrated with Stripe in order to creat payment flows',
    site: 'https://henry-ecommerce-store.netlify.app/',
    code: 'https://github.com/HexiangLiu/react-redux-ecommerce',
  },
  {
    id: 2,
    img: portfolio,
    title: 'portfolio',
    topic: 'react',
    description:
      'My pretty cool single page React Portfolio designed by me using HTML, CSS, Sass, Javascript, React and React Router',
    site: 'https://henry-liu-portfolio.netlify.app/',
    code: 'https://github.com/Henry-Liu1997/Portfolio',
  },
  {
    id: 3,
    img: beach,
    title: 'beach resort',
    topic: 'react',
    description:
      'A luxurious beach resort project designed by me using HTML, CSS, Sass, Javascript, React, React Router and Styled componets ',
    site: 'https://henry-react-beach-resort.netlify.app/',
    code: 'https://github.com/Henry-Liu1997/react-beach-resort',
  },
  {
    id: 4,
    img: cocktail,
    title: 'cocktail',
    topic: 'react',
    description:
      'A cockitail search website designed by using HTML, Sass, React and third party api. Powered by TheCocktailDB',
    site: 'https://henry-cocktail.netlify.app/',
    code: 'https://github.com/Henry-Liu1997/react-cocktail',
  },
  {
    id: 5,
    img: counter,
    title: 'counter',
    topic: 'redux',
    description:
      'A counter designed by using HTML, CSS, Javascirpt, React, Redux and Redux Thunk. Used third party API to get the real time temperature ℉ in New York City and Beijing by appling axios and Redux Thunk.',
    site: 'https://henry-react-redux-counter.netlify.app/',
    code: 'https://github.com/Henry-Liu1997/react-redux-counter',
  },
  {
    id: 6,
    img: todoList,
    title: 'todo list',
    description:
      'A todoList designed by me using HTML, CSS, Sass, Javascript, React',
    site: 'https://henry-todolist.netlify.app/',
    code: 'https://github.com/Henry-Liu1997/react-todolist',
  },
  {
    id: 7,
    img: budgetCalculator,
    title: 'budget calculator',
    topic: 'react',
    description:
      'A budget calculator designed by me using HTML, CSS, Javascript, BootStrap, React',
    site: 'https://henry-react-budget-calculator.netlify.app/',
    code: 'https://github.com/Henry-Liu1997/react-budget-calculator',
  },
  {
    id: 8,
    img: covid,
    title: 'COVID-19 Resource',
    topic: 'jQuery',
    description:
      'A webpage that help New York residents to find the nearest testing locations and free meals locations with their zip code. •	Lead developer of a group of four. Wrote down pseudocode, assigned tasks to team members and handled Github workflow',
    site: 'https://hexiangliu.github.io/COVID-Project/',
    code: 'https://github.com/HexiangLiu/COVID-Project',
  },
  {
    id: 9,
    img: weather,
    title: 'Weather Dashboard',
    topic: 'jQuery',
    description:
      "A weather-dashboard developed by using HTML, CSS, BootStrap, Javascript and JQuery. Powerd by third party API https://openweathermap.org/. You can serach for current and next five day's weather conditions of any cities",
    site: 'https://henry-liu1997.github.io/weather-dashboard/',
    code: 'https://github.com/HexiangLiu/weather-dashboard',
  },
  {
    id: 10,
    img: schedule,
    title: 'Workday Schedule',
    topic: 'jQuery',
    description:
      'A simple work day scheduler desinged using HTML,Javascript,CSS and JQuery. Integrated with localstorage API.',
    site: 'https://henry-liu1997.github.io/work-day-scheduler/',
    code: 'https://github.com/HexiangLiu/work-day-scheduler',
  },

  {
    id: 11,
    img: quiz,
    title: 'Code Quiz',
    topic: 'jQuery',
    description:
      "The quiz has 6 questions. And you have to complete it within one miniute. Everytime you enter a correct answer you will get 10 points otherwise you will lose 10 points and the time will be subtracted by 10 from the clock. The game will end when all questions are answered or the timer reaches 0. Then you can save my initials and score and chekout all player's score by clicking the view player's score dropdown.",
    site: 'https://henry-liu1997.github.io/Web-APIs-Code-Quiz/',
    code: 'https://github.com/HexiangLiu/Web-APIs-Code-Quiz',
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
