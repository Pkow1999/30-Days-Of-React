import './App.css';
import ColorGenerator from './ColorGenerator';
import NumberGenerator from './NumberGenerator';
import WorldPopulation from './WorldPopulation';
import React from 'react';


class App extends React.Component{
    constructor(props){
      super(props);
    }
    
    render(){
      return (
        <div className="App">
          <NumberGenerator></NumberGenerator>
          <ColorGenerator></ColorGenerator>
          <WorldPopulation></WorldPopulation>
        </div>
      );
    }
}
export default App;
