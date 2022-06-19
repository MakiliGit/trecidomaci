import { Container } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Products from "./ProductsComponent";
import ShopCart from "./ShopCart";

type ProductsContextType = {
  products: Record<string, number>; 
  count: number;
}

const initState: ProductsContextType = {
  products: {},
  count: 0
};

export const ProductsContext =
  React.createContext<ProductsContextType>(initState);

function App() {
  const [state, setState] = React.useState(initState);

  const addProductToCart = (productID: string) => {
    setState((prevState) => {
      const newState = { ...prevState };
      const val = prevState.products[productID];
      newState.products[productID] = val ? val + 1 : 1;
      newState.count = val ? prevState.count : prevState.count + 1;
      return newState;
    });
  };

  const removeProductFromCart = (productID: string) => {
    setState((prevState) => {
      const newState = { ...prevState };
      delete newState.products[productID];
      newState.count = prevState.count - 1;
      return newState;
    });
  };

  const increment = (productID: string) => {
    setState((prevState) => {
      const newState = { ...prevState };
      newState.products[productID] = prevState.products[productID] + 1;
      return newState;
    });
  };

  const decrement = (productID: string) => {
    if (state.products[productID] - 1 == 0)
      return removeProductFromCart(productID);
    setState((prevState) => {
      const newState = { ...prevState };
      newState.products[productID] = prevState.products[productID] - 1;
      return newState;
    });
  };

  return (
    <ProductsContext.Provider value={state}>
      <div style={{ width: "100vw", height: "100vh" }} id="app-div">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Container
                maxWidth="sm"
                style={{ height: "100%" }}
                id="products-container"
              >
                <h1>Proizvodi</h1>
                <hr></hr>
                <Products onClick={addProductToCart}></Products>
              </Container>
            }
          ></Route>
          <Route
            path="/cart"
            element={<ShopCart 
              onRemove={removeProductFromCart} 
              increment={increment}
              decrement={decrement}
            />}
          />
        </Routes>
      </div>
    </ProductsContext.Provider>
  );
}

export default App;
