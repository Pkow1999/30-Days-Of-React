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


function HexaColor(){
    const listOfColors = []
    for(let i = 0; i < 5; ++i)
        listOfColors.push(generateHexaColor())
    return listOfColors.map((color) => ( <div className='item' style={{backgroundColor: generateHexaColor()}}>{generateHexaColor()}</div>))
}

function RandomColors(){
    return(
        <div className='randomColor'>
            <HexaColor></HexaColor>
        </div>
    )
}
export default RandomColors;