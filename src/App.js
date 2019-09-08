import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage'
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up';
import {auth} from './firebase/firebase'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div>
        <div>
          <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact={true} path='/' component={HomePage} />
            <Route exact={true} path='/shop/hats' component={ShopPage} />
            <Route exact={true} path='/signin' component={SignInSignUp} />
            </Switch>    
        </div>  
      </div>
    );
  }
}

export default App;
