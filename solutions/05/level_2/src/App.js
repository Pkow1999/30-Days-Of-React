import './App.css';
import cssImage from './images/css_logo.png'
import htmlImage from './images/html_logo.png'
import jsImage from './images/js_logo.png'
import reactImage from './images/react_logo.png'

const ImagesWrapper = ({ array }) => {
  if(Array.isArray(array))
  {
    return array.map((value) => <img src={value} alt={Object.keys(value)[0]} />)
  }
  return '';
}


const Header = ({ imagesData }) =>(
  <header>
    <h1>Front End Technologies</h1>
    <div className='image-wrapper'>
      <ImagesWrapper array={imagesData}></ImagesWrapper>
    </div>
  </header>
)

function Main({header, paragraph, buttonText}){
  return(
    <main>
      <div className='subscribe-wrapper'>
        <h1>{header}</h1>
        <p>{paragraph}</p>
        <div className='input-wrapper'>
          <input placeholder='First Name'></input>
          <input placeholder='Last name'></input>
          <input placeholder='Email'></input>
        </div>
        <button>{buttonText}</button>
      </div>
    </main>
    )
}

const images = [cssImage, htmlImage, jsImage, reactImage]

function App() {
  return (
    <div className="App">
      <Header 
        imagesData = {images}
      />
      <Main 
        header='Subscribe'
        paragraph='Sign up with your email address to receive news and updates.'
        buttonText ='Subscribe'
      />
    </div>
  );
}

export default App;
