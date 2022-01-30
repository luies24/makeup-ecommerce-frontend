import React from 'react'
import './App.css'
import {Route, Switch} from 'react-router-dom'
import Header from './Components/Header'
import SignUp from './Components/SignUp'
import Products from './Components/Products'
import Cart from './Components/Cart'

function App() {
  return (
    <div>
      <Header />
      <Products />
      {/* <SignUp /> */}
      {/* <Cart /> */}
      {/* <Switch>
        <Route path='/Products' />
        <Route path='/SignUp' />
        <Route path='/Cart' />
      </Switch> */}
    </div>
  );
}

export default App;
