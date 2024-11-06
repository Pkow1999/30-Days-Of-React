import './App.css';
import RandomCountry from './RandomCountry'
import React from 'react';


class App extends React.Component{
    render(){
      return (
        <div className="App">
          <RandomCountry></RandomCountry>
        </div>
      );
    }
}
export default App;
