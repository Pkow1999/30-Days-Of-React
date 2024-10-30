// index.js
import React from 'react'
import ReactDOM from 'react-dom/client'
import cssImage from './images/css_logo.png'
import htmlImage from './images/html_logo.png'
import jsImage from './images/js_logo.png'
import reactImage from './images/react_logo.png'

const rootElement = document.getElementById('root');

const header =(
  <header>
    <h1>Front End Technologies</h1>
    <div className='image-wrapper'>
      <img src={htmlImage} alt='html_logo'/>
      <img src={cssImage} alt='css_logo'/>
      <img src={jsImage} alt='js_logo'/>
      <img src={reactImage} alt='react_logo'/>
    </div>
  </header>
)

const main =(
  <main>
    <div className='subscribe-wrapper'>
      <h1>Subscribe</h1>
      <p>Sign up with your email address to receive news and updates.</p>
      <div className='input-wrapper'>
        <input placeholder='First Name'></input>
        <input placeholder='Last name'></input>
        <input placeholder='Email'></input>
      </div>
      <button>Subscribe</button>
    </div>

  </main>
)

const app = (
  <div className='app'>
  {header}
  {main}
  </div>
)

ReactDOM.createRoot(rootElement).render(app);
