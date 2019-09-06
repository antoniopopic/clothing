import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage'

class App extends React.Component {
  constructor(){
    super()
    this.state = {}
  }
  render() {
  return (
    <div>
      <HomePage />
    </div>  
    );
  }
}

export default App;
