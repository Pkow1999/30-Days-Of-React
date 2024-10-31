import './Portfolio.css'
import asabenehImg from './images/asabeneh.jpg'
import React from 'react'

function Header({headerStyle}){
    return(
        <header style={headerStyle}>
            <div className='header-text'>
                <h1>Welcome to 30 Days Of React</h1>
                <h3>Getting Started React</h3>
                <h4>JavaScript Library</h4>
                <h5>Asabeneh Yetayeh</h5>
                <p>Oct 7, 2020</p>
            </div>
        </header>
    )
}

function Main({changeBackground, greetPeople, handleTime, mainStyle}){
    return(
        <main style={mainStyle}>
            <div className='prerequisites'>
                Prerequisites to get started react.js:
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
                <img src={asabenehImg} alt='Asabeneh'/>
                <div className='name'>Asabeneh Yetayeh</div>
                <div className='button-wrapper'>
                    <button onClick={greetPeople}>Greet People</button>
                    <button onClick={handleTime}>Show Time</button>
                    <button onClick={changeBackground}>Change Background</button>
                </div>
            </div>
        </main>
    )
}

function Footer({footerStyle}){
    return(
        <footer style={footerStyle}>
            <div>Copyright 2020</div>
        </footer>
    )
}
class Portfolio extends React.Component{
    state = {
        portfolioStyle: {},
        headerStyle: {},
        mainStyle: {},
        footerStyle: {},
    }
    showDate = (time) => {
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
    
    handleTimeFunc = () => {
        alert(this.showDate(new Date()))
    }
    changeBackgroundFunc = () => {
        const darkBackground = {backgroundColor: 'rgb(15, 23, 42)', color: 'white'}
        const style = Object.keys(this.state.headerStyle).length !== 0 ? { } : darkBackground;

        this.setState({portfolioStyle : style, headerStyle : style, mainStyle : style, footerStyle : style});
        console.log(this.state.footerStyle);
    }
    greetPeopleFunc = () =>{
        alert('Welcome to 30 Days Of React!')
    }
    render(){
        return(
            <>
                <Header headerStyle={this.state.headerStyle}></Header>
                <Main 
                    mainStyle={this.state.mainStyle}
                    handleTime = {this.handleTimeFunc}
                    changeBackground={this.changeBackgroundFunc}
                    greetPeople={this.greetPeopleFunc}>
                </Main>
                <Footer footerStyle={this.state.footerStyle}></Footer>
            </>
        )
    }
}

export default Portfolio;