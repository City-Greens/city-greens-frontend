
import InfoCard from './VendorInfoCard';

export default function NearbyVendors(props) {
  return (
  <div className="container mx-auto py-8">
    <h1 className="text-2xl font-bold mb-4">Nearby Vendors</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {props.cardData.map((item, index) => (
        <InfoCard key={index} name={item.name} products={item.products} distance={item.distance} />
      ))}
    </div>
  </div>
  )
}