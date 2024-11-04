import './ConditionalRendering.css'
import asabenehImg from './images/asabeneh.jpg'
import autumn from './images/autumn.jpg'
import React from 'react'


function Header({headerStyle, date}){
    return(
        <header style={headerStyle}>
            <div className='header-text'>
                <h1>Welcome to 30 Days Of React</h1>
                <h3>Getting Started React</h3>
                <h4>JavaScript Library</h4>
                <h5>Asabeneh Yetayeh</h5>
                <p>{date}</p>
            </div>
        </header>
    )
}

function Main({mainStyle}){
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
            </div>
        </main>
    )
}

class ConditionalRendering extends React.Component{
    date = new Date("1995-12-17T03:24:00");
    state = {
        season: this.getSeason(this.date),
        time: this.getTime(this.date),
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
        const hours = time.getHours() > 9 ? time.getHours() : '0'+time.getHours();
        const minutes = time.getMinutes() > 9 ? time.getMinutes() : '0'+time.getMinutes();
        const seconds = time.getSeconds() > 9 ? time.getSeconds() : '0'+time.getSeconds();
        return `${date} ${month}, ${year}   ${hours}:${minutes}:${seconds}`
    }
    getSeason(Date){
        console.log(Date.getMonth());
        switch(Date.getMonth()){
            case(11):
            case(0):
            case(1):
                return 'winter'
            case(2):
            case(3):
            case(4):
                return 'spring'
            case(5):
            case(6):
            case(7):
                return 'summer'
            case(8):
            case(9):
            case(10):
                return 'autumn'
            default:
                return ''
        }
    }
    getTime(Date){
        const hour = Date.getHours();
        if(hour >= 6 && hour <= 11)
            return 'morning'
        else if(hour >= 12 && hour <= 17)
            return 'noon'
        else if(hour >= 18 && hour <= 21)
            return 'evening'
        else
        return 'night'
    }
    getMainStyle = () => {
        console.log(this.state.season);
        switch(this.state.season){
            case('spring'):
                return {backgroundColor: `aqua`};
            case('summer'):
                return {backgroundColor: `yellow`};
            case('autumn'):
                return {backgroundImage: `url(${autumn})`};
            case('winter'):
                return {backgroundColor: `gray`, color: 'white'};
            default:
                return {};
        }
    }
    getHeaderStyle = () => {
        console.log(this.state.time);
        switch(this.state.time){
            case('morning'):
                return {backgroundColor: `aqua`};
            case('noon'):
                return {backgroundColor: `yellow`};
            case('evening'):
                return {backgroundColor: `darkgray`, color: 'beige'};
            case('night'):
                return {backgroundColor: `black`, color: 'white'};
            default:
                return {};
        }
    }
    constructor(props){
        super(props)
        this.date = new Date();
    }
    render(){
        return(
            <>
                <Header 
                    headerStyle={this.getHeaderStyle()}
                    date={this.showDate(this.date)}
                >
                </Header>
                <Main 
                    mainStyle={this.getMainStyle()}
                >
                </Main>
            </>
        )
    }
}

export default ConditionalRendering;