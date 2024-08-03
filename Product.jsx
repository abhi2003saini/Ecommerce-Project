import axios from "axios";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./product.css";
import { productAPI } from "./Index";
import { Link } from "react-router-dom";

function Product() {
  const [data, setData] = useState([]);
  const {cart, setCart} = useContext(productAPI)
  
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/")
      .then((res) => {
        return res;
      })
      .then((data) => {
        setData(data.data);
        console.log(data.data);
      });
  }, []);
  function trimTitle(title) {
    return title.length > 50 ? title.slice(0, 50) + "..." : title;
  }

  function trimDesc(desc) {
    return desc.length > 100 ? desc.slice(0, 100) + "..." : desc;
  }

  function handleAddCart(e, product) {
    // setCart([...cart, data[id]]);
    const existsInCart = cart.some((item) => item.id === product.id)
    const existingInCart = cart.find((item) => item.id === product.id)

    if(existsInCart){
      setCart(cart.filter((item) => item.id !== product.id))
    }else if(existingInCart){
      setCart((prevCart) => {
        return prevCart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item )
      })
    }else{
      setCart((prevCart) => [...prevCart, {...product, quantity: 1}])
    }

  }
  console.log(cart);

  
  // function exitFromCart(e, id) {
  //   setCart(cart.filter((index) => item.id !== id + 1));
  // }
  // function exitInCart(itemid) {
  //   let exit = false;
  //   cart.forEach((c) => {
  //     if (c.id == itemid) {
  //       exit = true;
  //     }
  //   });
  //   return exit;
  // }
  return (
    <div className="product-container">
      {data.map((item, index) => {
        const exitInCart = cart.some((product)=> item.id === product.id);
        return (
          <div className="product" key={index}>
            <img
              className="product-image"
              src={item.image}
              alt="product image"
            />
            <Link to = {`product/${item.id}`}>
              <h3 className="product-title font-bold px-3 line-clamp-1 text-center hover:text-blue-500">
                {trimTitle(item.title)}
              </h3>
            </Link>
            <p className="product-price font-bold text-center">
            Price: INR {Math.floor(item.price * 85)}
            </p>
            <p className="product-description px-2 line-clamp-3">
              {trimDesc(item.description)}
            </p>
            {exitInCart ? (
              <button
                className="addincart"
                onClick={(e) => {
                  handleAddCart(e,item);
                }}
              >
                ExitFromCart
              </button>
            ) : (
              <button
                className="addincart"
                onClick={(e) => {
                  handleAddCart(e, item);
                }}
              >
                {" "}
                Add To Cart
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Product;
