import React,{Fragment,useEffect} from 'react'
import "./Home.css";
import Product from './ProductCard';
import MetaData from "../Layout/MetaData"
import {getProduct,clearErrors} from "../../actions/productAction";
import {useSelector,useDispatch} from "react-redux";
import Loader from "../Layout/Loader/Loader";
import {useAlert} from "react-alert";
// const product={
//   name:"Blue TShirt",
//   images:[{ url: "https://i.ibb.co/DRST11n/1.webp" }],
//   price:"$3000",
//   _id:"abcd",
// };

const Home = () => {

  const alert=useAlert();
  const dispatch=useDispatch();
  const {loading,error,products,productsCount}=useSelector(
    (state) => state.products
    );

  useEffect(()=>{

    if(error){
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  },[dispatch,error,alert]);

    return (
        <Fragment>
            {loading ? 
              <Loader/>
            :
            <Fragment>
            {/* <MetaData title="ECOMMERCE"/> */}
            <MetaData title="ECOMMERCE" />
            <div className="banner">
              <p>Welcome to Ecommerce</p>
              <h1>FIND AMAZING PRODUCTS BELOW</h1>
  
              <a href="#container">
                <button>
                  Scroll 
                </button>
              </a>
            </div>
            <h2 className="homeHeading">Featured Products</h2>

            <div className="container" id="container">
              {products &&
                products.map((product) => (
                  <Product product={product} />
                ))}
            </div>
            {/* key={product._id} */}
          </Fragment>}
        </Fragment>
        )
      };
export default Home