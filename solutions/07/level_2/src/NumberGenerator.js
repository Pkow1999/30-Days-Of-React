import './NumberGenerator.css'
import React from 'react'


class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <header>
                <h1>30 Days Of React</h1>
                <h2>Number Generator</h2>
            </header>
        )
    }
}


class Main extends React.Component{
    constructor(props){
        super(props);
    }
    isPrime(number){
        if(typeof number !== 'number' || number%1 !== 0)
            return
        let prime = true
        if(number === 1)
            return false
        for(let j = 2; j <= Math.floor(number/2); ++j)
        {
            if((number%j) === 0)
            {                        
                prime = false
                break;
            }
        }   
        return prime
    }
    render() {
        const {number = 32} = this.props
        const listOfNumbers = []
        for(let i = 0; i < number; ++i){
            listOfNumbers.push(i)
        }
        return listOfNumbers.map((value) => {
            let color;
            if(this.isPrime(value)){
                color = '#fd5e53'
            }
            else{
                color = value % 2 === 0 ? '#21bf73' : '#fddb3a'
            }
            return(
                 <div className='item' style={{backgroundColor: color}}>{value}</div>
            )
        })
    }
}

class NumberGenerator extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <>
              <Header></Header>
              <div className='numberGenerator'>
                <Main></Main>
              </div>
            </>
        )
    }
}

export default NumberGenerator;