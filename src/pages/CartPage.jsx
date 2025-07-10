import { useNavigate } from 'react-router-dom';

const CartPage = ({ cart, updateQuantity, removeFromCart }) => {
  const navigate = useNavigate();
  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    if (cart.length > 0) {
      navigate('/checkout');
    }
  };

  if (cart.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-6">Add some products to get started!</p>
        <button 
          onClick={() => navigate('/products')}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="cart-page max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="bg-white rounded-lg shadow p-6">
        {cart.map(item => (
          <div key={item.id} className="flex items-center justify-between py-4 border-b last:border-b-0">
            <div className="flex items-center space-x-4">
              <img
                src={item.image || 'https://via.placeholder.com/80x80?text=Product'}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/80x80?text=Product';
                }}
              />
              <div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-600">${item.price}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300"
                >
                  -
                </button>
                <span className="w-12 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300"
                >
                  +
                </button>
              </div>
              
              <div className="text-right">
                <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        ))}
        
        <div className="mt-6 pt-6 border-t">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xl font-semibold">Subtotal: ${subtotal.toFixed(2)}</p>
            </div>
            <button 
              onClick={handleCheckout}
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;