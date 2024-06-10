import defaultImage from '../../../assets/city-greens-logo.png';
const vite_backend_url = import.meta.env.VITE_BACKEND_URL;

export default function Product({ product }) {

  const { name, price, description } = product;

  const handleDelete = async () => {
    try {
      console.log('product', product)
      const response = await fetch(`${vite_backend_url}/delete-product`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      const deleted_bool = await response.json();
      if (deleted_bool) {
        alert('Product Deleted');
        window.location.reload();
      }

    } catch (err) {
      console.error(err);
    }
  }

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
        <button className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700" onClick={() => handleDelete()}>
          Delete Product
        </button>
      </div>
    </div>
  );
}
