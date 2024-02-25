"use client";

import {createContext, useEffect, useState} from "react";

export const ProductDataContext = createContext({});

const ProductContext = ({children}) => {

  const [products, setProducts] = useState(null);

  const getProductContextInitialValue = async () => {
    const res = await fetch('/api/v1/products');
    if (!res.ok) {
      throw new Error("Could not retrieve products");
    }
    const data = await res.json();
    return data["products"];
  }

  useEffect(() => {

    const getProductsEffect = async () => {
      const productData = await getProductContextInitialValue();
      console.log("Called");
      setProducts(productData);
    }

    void getProductsEffect();

  }, []);

  return (
    <ProductDataContext.Provider value={products}>
      {children}
    </ProductDataContext.Provider>
  )
}

export default ProductContext;
