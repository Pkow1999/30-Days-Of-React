import './ColorGenerator.css'

const Header = () =>(
    <header>
      <h1>30 Days Of React</h1>
      <h2>Hexadecimal Colors</h2>
    </header>
  )

function generateHexaColor(){
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const Main = ( {number = 32} ) =>{
  const listOfColors = []
    for(let i = 0; i < number; ++i)
        listOfColors.push(generateHexaColor())
    return listOfColors.map((color) => ( <div className='item' style={{backgroundColor: color}}>{color}</div>))
}

function ColorGenerator(){
    return(
        <>
          <Header></Header>
          <div className='randomColor'>
            <Main></Main>
          </div>
        </>
    )
}
export default ColorGenerator;