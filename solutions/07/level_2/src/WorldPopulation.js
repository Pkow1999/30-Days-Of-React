import './WorldPopulation.css';
import { tenHighestPopulation } from './ten_most_highest_population';
import React from 'react'

class Header extends React.Component{
    constructor(props){
      super(props)
    }

    render(){
      return(
        <header>
          <h1>30 Days Of React</h1>
          <h2>World population</h2>
          <p>Ten most populated countries</p>
        </header>
      ) 
    }
}

class Main extends React.Component{
    constructor(props){
      super(props);
    }
    FormatData({ data: { country, population } }){
      const style = {width : `${population / tenHighestPopulation.at(0).population * 100}%`}
      const formatedPop =  population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return (
        <div className='item'>
          <span className='cell name'>{country}</span>
          <span className='cell graph' >
            <span className='country-graph' style={style}></span>
          </span>
          <span className='cell population'>{formatedPop}</span>
        </div>
      )
    }
    render(){
      return tenHighestPopulation.map((countryPop) => <this.FormatData key={countryPop.country} data={countryPop}/>);
    }
}

class WorldPopulation extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
      return (
        <div className="App">
          <Header></Header>
          <div className="Main">
            <Main></Main>
          </div>
        </div>
      );
    }
}

export default WorldPopulation;
