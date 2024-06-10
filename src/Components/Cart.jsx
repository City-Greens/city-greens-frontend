import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCustomer, removeFromCart, clearCart } from '../storage/cart';
import useAuthClaim from '../hooks/customAuth';

const vite_backend_url = import.meta.env.VITE_BACKEND_URL;

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const customer = useSelector((state) => state.cart.customer);
  const stripe_id = useAuthClaim('stripe_id');
  const dispatch = useDispatch();

  useEffect(() => {
    if (stripe_id) {
      dispatch(setCustomer({ stripeId: stripe_id }));
    }
  }, [stripe_id, dispatch]);

  const createCheckoutSession = async () => {
    try {
      const response = await fetch(`${vite_backend_url}/checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          line_items: cart.map(item => ({
            price: item.default_price,
            quantity: item.quantity,
          })),
          customer_id: customer.stripeId,
          vendor_id: cart[0].stripeAccount,
        }),
      });

      const session = await response.json();
      console.log(session.url);
      if (session.url) {
        window.location.href = session.url;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  let totalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    totalPrice += parseFloat(cart[i].price.slice(0, -4)) * cart[i].quantity;
  }
  

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg mt-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cart.length ? (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">Price: ${item.price}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="bg-red-500 text-white font-bold py-1 px-2 rounded hover:bg-red-700"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="text-right font-bold text-xl">
            Total: ${totalPrice.toFixed(2)}
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={handleClearCart}
              className="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-700"
            >
              Clear Cart
            </button>
            <button
              onClick={createCheckoutSession}
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
            >
              Checkout
            </button>
          </div>
        </>
      ) : (
        <p className="text-gray-600">Your cart is empty</p>
      )}
    </div>
  );
}
