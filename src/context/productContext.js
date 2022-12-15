import { createContext, useState, useEffect } from 'react';
import axios from 'axios';


export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);


  useEffect(()=> {
    const API= "/api/v1/products";
    axios.get(API).then(res=> {
      console.log (res.data.data.products)
      setProducts(res.data.data.products)
    })
  
  }, [])

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};