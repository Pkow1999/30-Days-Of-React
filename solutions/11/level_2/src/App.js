import React from 'react'

class App extends React.Component {
  state = {
    posX : 0,
    posY : 0,
  }
  randomizePosition = (e) =>{
    const posX = Math.random() * 80
    const posY = Math.random() * 89
    this.setState({posX, posY})
    console.log(this.state);
  }

  render() {
    return (
      <div className='app'>
        <div style={{top: `${this.state.posY}%`, right: `${this.state.posX}%`}} onMouseEnter={this.randomizePosition}className='box'>
            <div className='text'>
              30 Days of React
            </div>
        </div>
      </div>
    )
  }
}

export default App
