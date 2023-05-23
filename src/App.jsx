import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
// import list from "./data.js";

function App() {
  const list = [
    {
      id: 1,
      title: "My First Book of Pencil Control",
      author: "by Wonder House Books | 25 April 2018",
      price: 89,
      img:
        "https://m.media-amazon.com/images/I/810OOg88LoL._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
    },
    {
      id: 2,
      title: "108 Panchatantra Stories",
      author: "by Maple Press  | 1 September 2020",
      price: 98,
      img:
        "https://m.media-amazon.com/images/I/71rmxx8P2qL._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
    },
    {
      id: 3,
      title: "Amazing Questions & Answers Science",
      author: "by Om Books Editorial Team  | 25 November 2018",
      price: 143,
      img:
        "https://m.media-amazon.com/images/I/81Gbz0XnW7L._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
    },
    {
      id: 4,
      title: "My First Book of Pencil Control",
      author: "by Wonder House Books | 25 April 2018",
      price: 57,
      img:
        "https://m.media-amazon.com/images/I/81Gbz0XnW7L._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
    },
  ];

  const [cart, setCart] = useState([]);

  function addProduct(item) {
    const productId = parseInt(item.target.dataset.id);
    const itemClicked = list.find((product) => product.id === productId);
    if (itemClicked) {
      setCart([...cart, itemClicked]);
    }
  }
  return (
    <>
      <Search />

      <div className="header">
        <h1>Meus produtos</h1>
        {list.map((item, index) => (
          <div className="container" key={index}>
            <h2>{item.title}</h2>
            <img src={item.img} />
            <p>{item.author}</p>
            <p>{item.price}</p>
            <button data-id={item.id} onClick={addProduct}>
              Add Cart
            </button>
          </div>
        ))}
      </div>

      <div className="cart">
        <h1>Carrinho</h1>
        {cart.map((product, index) => (
          <>
            <div  className="container" key={index}>
              <h2 >{product.title}</h2>
              <img src={product.img} />
              <p>R$ {product.price}</p>
              <p>{product.author}</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default App;
