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
      .then(inventory => {
        for(let i = 8; i < 16; i++){
          this.setState({inventory: [...this.state.inventory, inventory[i]]})
        }
      })
  }

  displayProductDetails = (product) => {
    this.setState({selectedProduct: product})
  }
  
  render() {

    const { inventory } = this.state
    const { selectedProduct } = this.state
    const { cart } = this.state

    return (
      <div>
        <Header />
        <Switch>
            <Route path='/Products' render={props => <Products {...props} inventory={inventory} displayProductDetails={this.displayProductDetails} />} />
            <Route path='/Card' render={props => <Card {...props} inventory={inventory} />} />
            <Route path='/ProductDetails' render={props => <ProductDetails {...props} product={selectedProduct} />} />
            <Route path='/SignUp' render={props => <SignUp />} />
            <Route path='/Cart' render={props => <Cart />} />
            <Route path='/Checkout' render={props => <Checkout />} />
        </Switch>
      </div>
    );
  }
}

export default App;
