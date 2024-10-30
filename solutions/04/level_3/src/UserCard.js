import image from './images/asabeneh.jpg'
import './UserCard.css'

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


const Header = () =>(
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

const Main = () =>(
  <main>
    <h1>SKILLS</h1>
    <div className='skill-wrapper'>
      {skillsFormatted}
    </div>
  </main>
)

const Footer = () =>(
  <footer>
    <i class="far fa-clock"/><span> Joined on Aug 30, 2020</span>
  </footer>
)

const UserCard = () =>{
  return(
    <div className='userCard'>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}

export default UserCard;