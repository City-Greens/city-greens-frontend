import BigSearch from "./BigSearch";
import { useEffect } from "react";
import ProductList from "./ProductList";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../storage/products";

export default function ProductSearch() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  console.log(products);

  useEffect(() => {
    fetchProducts(dispatch);
  }, []);


  return (
    <>
      {products?.length ? (
        <>
          <BigSearch />
          <ProductList products={products} />
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}
