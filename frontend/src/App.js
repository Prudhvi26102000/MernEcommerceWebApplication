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
import LoginSignUp from './component/User/LoginSignUp';
import store from "./store";
import { loadUser} from './actions/userAction';
import UserOptions from './component/Layout/Header/UserOptions';
import { useSelector } from 'react-redux';
import Profile from './component/User/Profile';
import ProtectedRoute from './component/Route/ProtectedRoute';
import UpdateProfile from './component/User/UpdateProfile';

function App() {

  const {isAuthenticated,user}=useSelector(state=>state.user);

  React.useEffect(()=>{
    WebFont.load({
      google:{
        families:["Roboto","Droid Sans","Chilanka"],
      }
    });

    store.dispatch(loadUser());

  },[]);
  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user}/>}
      <Route exact path="/" component={Home} /> 
      <Route exact path="/product/:id" component={ProductDetails} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/products/:keyword" component={Products} />
      
      <Route exact path="/search" component={Search} />

      <ProtectedRoute exact path="/account" component={Profile} />

      <ProtectedRoute exact path="/me/update" component={UpdateProfile} />

      <Route exact path="/login" component={LoginSignUp} />
      <Footer />
    </Router>
  );
}

export default App;
