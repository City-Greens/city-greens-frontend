import defaultImage from '../../../assets/city-greens-logo.png';

export default function Product({ name, price, description }) {
  return (
    <div className="w-96 mx-5 bg-white shadow-lg rounded-lg overflow-hidden mt-4">
      <div className="flex">
        <div className="w-1/3">
          <img className="h-full w-full object-cover" src={defaultImage} alt={name} />
        </div>
        <div className="w-2/3 px-6 py-4">
          <h3 className="font-bold text-xl mb-2">{name}</h3>
          <p className="text-gray-700 text-base">Price: ${price}</p>
          <p className="text-gray-700 text-base mt-2">Description: {description}</p>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between">
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
          Edit Product
        </button>
        <button className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700">
          Delete Product
        </button>
      </div>
    </div>
  );
}
