import { createContext, useState } from 'react';

//termékek a json-ből
import PRODUCTS from '../shopdata.json';

//termék tömb
export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };
  return (<ProductsContext.Provider value={value}>{children}</ProductsContext.Provider> );
};
