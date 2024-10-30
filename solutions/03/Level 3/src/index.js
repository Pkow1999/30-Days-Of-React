// index.js
import React from 'react'
import ReactDOM from 'react-dom/client'
import image from './images/asabeneh.jpg'


const rootElement = document.getElementById('root');

const skills = [
  'HTML',
  'CSS',
  'JS',
  'React',
  'Redux',
  'Node',
  'MongoDB',
  'Python',
  'Flask',
  'Django',
  'NumPy',
  'Pandas',
  'Data Analysis',
  'MYSQL',
  'GraphSQL',
  'D3.js',
  'Gatsby',
  'Docker',
  'Heroku',
  'Git'
]

const name = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}


const header =(
  <header>
    <img src={image} alt='Asabeneh'/>
    <h1>{name.firstName.toLocaleUpperCase()} {name.lastName.toLocaleUpperCase()} <i class="fa fa-check-circle" style={{color: 'rgb(42, 207, 207)'}}></i></h1>
    <p>Senior Developer, Finland</p>
  </header>
)

const skillsFormatted = skills.map((skill) =>
<div className='skill' key={skill}>
    {skill}
</div>)

const main =(
  <main>
    <h1>SKILLS</h1>
    <div className='skill-wrapper'>
      {skillsFormatted}
    </div>
  </main>
)

const footer =(
  <footer>
    <i class="far fa-clock"/><span> Joined on Aug 30, 2020</span>
  </footer>
)

const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)

ReactDOM.createRoot(rootElement).render(app);
