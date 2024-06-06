import BigSearch from "./BigSearch";
import { useEffect, useState } from "react";
import ProductList from "./ProductList";

export default function ProductSearch() {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const response = await fetch("http://localhost:4242/all-products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const products = await response.json();
      setProducts(products);
      console.log(products);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <BigSearch />
      {products?.length ? (
        <ProductList products={products} />
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}
