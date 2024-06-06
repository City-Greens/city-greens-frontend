import Product from './Product';

export default function ProductList({ products }) {

  return (
    <div className='flex flex-wrap w-4/6 h-max overflow-auto m-auto'>
      {
        products.map((product, key) => {
          return <Product key={key} product={product} />
        })
      }
    </div>
  )

}
