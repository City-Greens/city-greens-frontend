import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getSearchedProducts } from '../../storage/products'; // make sure to import the action

export default function BigSearch() {
  const state_search_term = useSelector((state) => state.products.search_term);
  const [searchTerm, setSearchTerm] = useState(state_search_term);


  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    dispatch(getSearchedProducts(e.target.value));
  }

  return (
    <div className="py-10">
      <div className="flex justify-center items-center">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          className="w-full max-w-2xl p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          onChange={handleSearch}
        />
      </div>
    </div>
  )
}
