import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage'
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';

/* const HatsPage = () => (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  ); */
class App extends React.Component {
  constructor(){
    super()
    this.state = {}
  }


  

  render() {
    return (
      <div>
        <div>
          <Header />
          <Switch>
            <Route exact={true} path='/' component={HomePage} />
            <Route exact={true} path='/shop/hats' component={ShopPage} />
            </Switch>    
        </div>  
      </div>
    );
  }
}

export default App;
