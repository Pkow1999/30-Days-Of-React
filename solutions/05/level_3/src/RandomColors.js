import './RandomColors.css'

const generateHexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return '#' + color
  }


function HexaColor( {number = 5, generatingFunction = generateHexaColor} ){
    const listOfColors = []
    for(let i = 0; i < number; ++i)
        listOfColors.push(generatingFunction())
    return listOfColors.map((color) => ( <div className='item' style={{backgroundColor: color}}>{color}</div>))
}

function RandomColors(){
    return(
        <div className='randomColor'>
            <HexaColor 
                number={5}
            />
        </div>
    )
}
export default RandomColors;