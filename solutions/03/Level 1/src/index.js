// index.js
import React from 'react'
import ReactDOM from 'react-dom/client'

import wolfImage from './images/Wolf.png'

import debugingModule from './testModule'

const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}

const date = 'Oct 2, 2020'
// JSX element, header
const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>Instructor: {author.firstName} {author.lastName}</p>
      <small>{date}</small>
      {debugingModule.debugPrint(author)}
    </div>
  </header>
)

const numOne = 3
const numTwo = 2
const numThree = 15;

const result = (
  <p>
    {debugingModule.addMultiple(numOne, numTwo, numThree)}
  </p>
)

const yearBorn = 1820
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)

const user =(
  <div>
    <img src={wolfImage} alt='Wolf'></img>
  </div>
)

// JSX element, main
const main = (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      {result}
      {personAge}
      {user}
    </div>
  </main>
)

const copyRight = 'Copyright 2020'

// JSX element, footer
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)


// JSX element, app
const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(app);
