import './App.css';
import ConditionalRendering from './ConditionalRendering'
import React from 'react';


class App extends React.Component{
    render(){
      return (
        <div className="App">
          <ConditionalRendering></ConditionalRendering>
        </div>
      );
    }
}
export default App;
