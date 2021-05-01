import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { products } from "./constants";
import ProductsGrid from "./components/ProductsGrid";

function App() {
  const [cart, setCart] = useState(
    [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ])
  const [itemCount, setItemCount] = useState(0)


  let handleIncrement = (product) => {
    // cart array'inin kopyasını oluştur
    let newcart = [...cart];
    // parametre olarak gelen product'ın cart array'i içerisindeki index'ini bul
    const index = newcart.indexOf(product);
    // kopyalanan cart array'ine bu ürünü ekle ve value property'sini 1 artır
    newcart[index].value++
    setCart(newcart)
    // getItemCount fonksiyonunu kullanarak sepetteki ürün sayısını bul
    const newitemCount = getItemCount(cart);
    // state'i güncelle
    setItemCount(newitemCount)


  };

  let handleDecrement = (product) => {
    const newcart = [...cart];
    const index = newcart.indexOf(product);
    newcart[index].value--;
    setCart(newcart)
    const newitemCount = getItemCount(cart);
    setItemCount(newitemCount)
  };

  let getItemCount = (cart) => {
    // Sepetteki toplam ürün sayısını bul
    let newitemCount = cart.reduce((total, product) => total + product.value, 0);

    return newitemCount;
  };


  return (
    <div className="App">
      <Navbar totalItems={itemCount} />
      <ProductsGrid
        products={products}
        cart={cart}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );

}

export default App;
