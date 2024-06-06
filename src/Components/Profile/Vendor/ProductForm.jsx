import React, { useState } from 'react';

export default function ProductForm() {
  // State to manage form visibility


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
    console.log(form)
    const name = form.name.value;
    const price = form.price.value;
    const description = form.description.value;
    const newProduct = { name, price, description };
    handleSubmit(newProduct);
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
