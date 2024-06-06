import BigSearch from "./BigSearch";
import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../storage/products";
import Loading from "../Loading";
import Fuse from 'fuse.js'

export default function ProductSearch() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const search_term = useSelector((state) => state.products.search_term);
  const [filteredProducts, setFilteredProducts] = useState(products);

  console.log(filteredProducts);
  console.log(search_term);

  useEffect(() => {
    fetchProducts(dispatch);
  }, []);

  useEffect(() => {
    if (search_term) {
      const fuse = new Fuse(products, {
        keys: ['name', 'description', 'business_name'],
        isCaseSensitive: true,
        includeScore: 1,
      });
      const result = fuse.search(search_term);
      setFilteredProducts(result.map(({ item }) => item));
    } else {
      setFilteredProducts(products);
    }
  }, [search_term, products]);

  return (
    <>
      {filteredProducts?.length ? (
        <>
          <BigSearch />
          <ProductList products={filteredProducts} />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
