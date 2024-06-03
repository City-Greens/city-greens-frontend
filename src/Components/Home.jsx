import Hero from './Hero';
import BigSearch from './BigSearch';
import NearbyVendors from './NearbyVendors';


export default function Home() {
  const data = [
    {
      id: 1,
      name: 'John Doe',
      products: ['Product A', 'Product B', 'Product C'],
      distance: 10
    },
    {
      id: 2,
      name: 'Jane Smith',
      products: ['Product X', 'Product Y'],
      distance: 15
    },
    {
      id: 3,
      name: 'Alice Johnson',
      products: ['Product Z', 'Product W'],
      distance: 20
    },
    {
      id: 4,
      name: 'Bob Brown',
      products: ['Product D', 'Product E', 'Product F'],
      distance: 25
    }
  ];

  return (
    <>
      <Hero />
      <BigSearch />
      <NearbyVendors cardData={data} />
    </>
  )
}