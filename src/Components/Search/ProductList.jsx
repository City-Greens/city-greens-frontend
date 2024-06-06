import Product from './Product';

export default function ProductList({ products }) {

  return (
    <>
      {
        products.map((product, key) => {
          return <Product key={key} product={product} />
        })
      }
    </>
  )

}
