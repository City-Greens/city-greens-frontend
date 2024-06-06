
export default function BigSearch() {
  return (
    <div className="py-10">
    <div className="flex justify-center items-center">
      <label className="flex items-center">
        <input
          type="radio"
          name="search-option"
          value="Products"
          className="form-radio text-blue-600 h-4 w-4"
          checked
        />
        <span className="ml-2 text-gray-700">Products</span>
      </label>
      <label className="flex items-center px-5">
        <input
          type="radio"
          name="search-option"
          value="Vendors"
          className="form-radio text-blue-600 h-4 w-4"
        />
        <span className="ml-2 text-gray-700">Vendors</span>
      </label>
    </div>
    <div className="flex justify-center items-center">
      <input
        type="text"
        placeholder="Search..."
        className="w-full max-w-2xl p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />
      <button
        className="ml-4 px-6 py-4 bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Search
      </button>
      </div>
    </div>
  )
}