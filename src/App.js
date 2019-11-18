import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage'
import {Switch, Route, Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up';
import {auth, createUserProfileDocument} from './firebase/firebase';
import {connect} from 'react-redux';
import setCurrentUser from './redux/user/user-actions';
import {selectCurrentUser} from './redux/user/user-selectors';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './pages/checkout/checkout';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div>
        <div>
          <Header/>
          <Switch>
            <Route exact={true} path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact={true} path='/checkout' component={CheckoutPage} />
            <Route exact={true} path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInSignUp/>)} />
            </Switch>    
        </div>  
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
