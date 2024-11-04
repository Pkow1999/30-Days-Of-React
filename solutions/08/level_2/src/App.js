import './App.css';
// import Portfolio from './Portfolio';
import RandomCountry from './RandomCountry';
import React from 'react';


class App extends React.Component{
    render(){
      return (
        <div className="App">
          {/* <Portfolio></Portfolio> */}
          <RandomCountry></RandomCountry>
        </div>
      );
    }
}
export default App;
