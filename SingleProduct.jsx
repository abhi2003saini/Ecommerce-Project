import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import './singleproduct.css'
import { productAPI } from "./Index"; // Make sure this import is correct based on your file structure

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const { cart, setCart } = useContext(productAPI); // Correctly using useContext to get cart and setCart

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/" + id)
      .then((res) => {
        return res;
      })
      .then((data) => {
        setProduct(data.data);
        console.log(data.data);
      });
  }, [id]); // Adding id to dependency array to ensure effect runs when id changes

  function handleAddCart(e, product) {
    const existsInCart = cart.some((item) => item.id === product.id);
    const existingInCart = cart.find((item) => item.id === product.id);

    if (existsInCart) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else if (existingInCart) {
      setCart((prevCart) => {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      });
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  }

  function exitInCart(itemid) {
    return cart.some((item) => item.id === itemid);
  }

  console.log(cart);

  return (
    <>
      {product && (
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={product.image} alt="product description" />
            </div>
            <div className="col-md-6">
              <h1 className="text-2xl my-2 font-bold">{product.title}</h1>
              <p>{product.description}</p>
              <h2 className="text-2xl">INR &nbsp;{product.price * 100}</h2>
              {exitInCart(product.id) ? (
                <button
                  className="addincart"
                  onClick={(e) => {
                    handleAddCart(e, product);
                  }}
                >
                  ExitFromCart
                </button>
              ) : (
                <button
                  className="addincart"
                  onClick={(e) => {
                    handleAddCart(e, product);
                  }}
                >
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleProduct;
