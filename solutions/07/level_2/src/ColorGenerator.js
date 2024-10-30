import './ColorGenerator.css'
import React from 'react'

class Header extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <header>
        <h1>30 Days Of React</h1>
        <h2>Hexadecimal Colors</h2>
      </header>
    )
  }
}
class Main extends React.Component{
  constructor(props){
    super(props);
  }

  generateHexaColor(){
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return '#' + color
  }

  render() {
    const {
      number = 32
    } = this.props
    const listOfColors = []
    for(let i = 0; i < number; ++i)
        listOfColors.push(this.generateHexaColor())
    return listOfColors.map((color) => ( <div className='item' style={{backgroundColor: color}}>{color}</div>))
  }
}

class ColorGenerator extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <>
        <Header></Header>
        <div className='randomColor'>
          <Main></Main>
        </div>
      </>
  )
  }
}

export default ColorGenerator;