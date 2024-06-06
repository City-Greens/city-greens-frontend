import React, { useState } from 'react';
import useAuthClaim from '../../../hooks/customAuth';

export default function ProductForm() {
  // State to manage form visibility
  const stripe_id = useAuthClaim('stripe_id');

  const handleSubmit = async (newProduct) => {
    try {
      const response = await fetch('http://localhost:4242/add-product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });
      const products = await response.json();

    } catch (err) {
      console.error(err);
    }
  };

  const addNewProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const default_price_data = {
      unit_amount_decimal: form.price.value,
      currency: 'USD',
    };
    const quantity = form.quantity.value;
    const description = form.description.value;
    const vendor_id = stripe_id;
    const newProduct = { name, quantity, default_price_data, description, vendor_id };
    handleSubmit(newProduct);
    form.reset();
    alert('Product Added')
  }
  return (
    <div>

      <form className="mt-4 max-w-lg mx-auto bg-white p-8 rounded shadow-md" onSubmit={addNewProduct}>
        <p className='text-center w-full text-3xl py-4'> Create New Product </p>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            step="0.01"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">
            Amount in Stock:
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>

    </div>
  );
};
