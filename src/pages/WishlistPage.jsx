import { useNavigate } from 'react-router-dom';
import Product from '../components/Product';

const WishlistPage = ({ wishlist, removeFromWishlist, addToCart, toggleWishlist, isInWishlist }) => {
  const navigate = useNavigate();

  if (wishlist.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="mb-6">
          <svg className="w-24 h-24 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-4">Your wishlist is empty</h2>
        <p className="text-gray-600 mb-6">Start adding products to your wishlist!</p>
        <button 
          onClick={() => navigate('/products')}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Browse Products
        </button>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">My Wishlist</h1>
        <span className="text-gray-600">{wishlist.length} items</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlist.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img
                src={product.image || 'https://via.placeholder.com/300x200?text=Product+Image'}
                alt={product.name}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x200?text=Product+Image';
                }}
              />
              <button
                onClick={() => toggleWishlist(product)}
                className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-red-500 fill-current"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
              {product.description && (
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
              )}
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-green-600">${product.price}</span>
                <div className="space-x-2">
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {wishlist.length > 0 && (
        <div className="mt-8 text-center">
          <button
            onClick={() => {
              wishlist.forEach(product => addToCart(product));
              navigate('/cart');
            }}
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Add All to Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default WishlistPage; 