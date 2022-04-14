import './App.css';
import Header from "./component/Layout/Header/Header.js";
import {BrowserRouter as Router ,Route} from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Footer from "./component/Layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails"
import Products from "./component/Product/Products";
import Search from './component/Product/Search';

function App() {
  React.useEffect(()=>{
    WebFont.load({
      google:{
        families:["Roboto","Droid Sans","Chilanka"],
      }
    })
  })
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} /> 
      <Route exact path="/product/:id" component={ProductDetails} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/products/:keyword" component={Products} />
      <Route exact path="/search" component={Search} />
      <Footer />
    </Router>
  );
}

export default App;
