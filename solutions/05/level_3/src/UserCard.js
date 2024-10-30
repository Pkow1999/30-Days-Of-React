import image from './images/asabeneh.jpg'
import './UserCard.css'

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}

const Header = ({name, title, country, img}) =>(
  <header>
    <img src={img} alt='Asabeneh'/>
    <h1>{name.firstName.toLocaleUpperCase()} {name.lastName.toLocaleUpperCase()} <i class="fa fa-check-circle" style={{color: 'rgb(42, 207, 207)'}}></i></h1>
    <p>{title}, {country}</p>
  </header>
)

function SkillsFormated( {skills} ){
  if(Array.isArray(skills))
    return skills.map((skill) =>
   <div className='skill' key={skill}>{skill}</div>)
}

const Main = (prop) =>(
  <main>
    <h1>SKILLS</h1>
    <div className='skill-wrapper'>
      <SkillsFormated skills={prop.skills}></SkillsFormated>
    </div>
  </main>
)

const Footer = ({joinDate}) =>(
  <footer>
    <i class="far fa-clock"/><span>{showDate(joinDate)}</span>
  </footer>
)


const personSkills = [
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

const personName = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const personTitle = 'Senior Developer'
const personCountry = 'Finland'

const personJoinDate = new Date('2020-08-20')


const UserCard = () =>{
  return(
    <div className='userCard'>
      <Header
        name={personName}
        img={image}
        title={personTitle}
        country={personCountry}
      ></Header>
      <Main
        skills = {personSkills}
      ></Main>
      <Footer
        joinDate={personJoinDate}
      ></Footer>
    </div>
  )
}

export default UserCard;