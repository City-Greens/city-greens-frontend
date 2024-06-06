import Product from './Product';

export default function ProductList({ products }) {

  return (
    <div className='flex flex-wrap w-full h-screen overflow-y-scroll'>
      {
        products.map((product, key) => {
          return <Product key={key} product={product} />
        })
      }
    </div>
  )

}
