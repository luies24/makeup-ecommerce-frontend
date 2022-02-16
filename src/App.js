import React from 'react'
import './App.css'
import { 
    Switch,
    Route
       } from 'react-router-dom'

import Header from './Components/Header'
import SignUp from './Components/SignUp'
import Products from './Components/Products'
import Cart from './Components/Cart'
import ProductDetails from './Components/ProductDetails'
import Checkout from './Components/Checkout'
import Card from './Components/Card'

class App extends React.Component {

  state = {
    inventory: [],
    selectedProduct: [],
    favorites: [],
    cart: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/middleman')
      .then(response => response.json())
      .then(inventory => this.setState({ inventory }))
  }
  
  render() {
    return (
      <div>
        {console.log(this.state.inventory)}
        <Header />
        <Switch>
            <Route path='/' render={props => <Products/>} />
            <Route path='/Card' render={props => <Card />} />
            <Route path='/ProductDetails' render={props => <ProductDetails />} />
            <Route path='/SignUp' render={props => <SignUp />} />
            <Route path='/Cart' render={props => <Cart />} />
            <Route path='/Checkout' render={props => <Checkout />} />
        </Switch>
      </div>
    );
  }
}

export default App;
