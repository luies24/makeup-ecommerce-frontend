import React from 'react'
import './App.css'
import {Route, Switch} from 'react-router-dom'
import Header from './Components/Header'
import SignUp from './Components/SignUp'
import Products from './Components/Products'
import Cart from './Components/Cart'
import ProductDetails from './Components/ProductDetails'
import Checkout from './Components/Checkout'

function App() {
  return (
    <div>
      <Header />
      {/* <Products /> */}
      {/* <ProductDetails /> */}
      {/* <SignUp /> */}
      {/* <Cart /> */}
      <Checkout />
      {/* <Switch>
        <Route path='/Products' />
        <Route path='/SignUp' />
        <Route path='/Cart' />
      </Switch> */}
    </div>
  );
}

export default App;
