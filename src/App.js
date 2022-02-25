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

  //Grabs product that was clicked on and pass it into this function
  //This function then saves that product into an array called 'selectedProduct'
  //Then it is passed to 'productDetails' component to render the information on the product the user clicked on.
  displayProductDetails = (product) => {
    this.setState({selectedProduct: product})
  }

  //When user clicks on add to cart, It passes that product into this function.
  //Which then adds it to the end of the 'cart' array.
  cartList = (product) => {
    this.setState({cart: [...this.state.cart, product]})
  }

  removeCartItem = (product) => {
    const newCart = this.state.cart.filter(items => items !== product)
    this.setState({ cart: newCart })
  }

  
  render() {

    const { inventory } = this.state
    const { selectedProduct } = this.state
    const { cart } = this.state

    return (
      <div>
        <Header />
        <Switch>
            <Route 
              path='/Products' 
              render={props => <Products {...props} 
                inventory={inventory} 
                displayProductDetails={this.displayProductDetails} 
                cartList={this.cartList} 
              />} 
            />
            {/* Don't think I need Card route here */}
            <Route path='/Card' render={props => <Card {...props} inventory={inventory} />} />
            <Route 
              path='/ProductDetails' 
              render={props => <ProductDetails {...props} 
              product={selectedProduct} 
              cartList={this.cartList} />} 
            />
            <Route path='/SignUp' render={props => <SignUp />} />
            <Route path='/Cart' render={props => <Cart {...props} 
              cart={cart} 
              removeCartItem={this.removeCartItem} />} 
            />
            <Route path='/Checkout' render={props => <Checkout />} />
        </Switch>
      </div>
    );
  }
}

export default App;
