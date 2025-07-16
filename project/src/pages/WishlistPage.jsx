import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from '../components/Product';

const WishlistPage = ({ wishlist, removeFromWishlist, addToCart, toggleWishlist, isInWishlist }) => {
  const navigate = useNavigate();
  const [addedToCartItems, setAddedToCartItems] = useState(new Set());

  const handleAddToCart = (product) => {
    addToCart(product);
    // Add visual feedback
    setAddedToCartItems(prev => new Set([...prev, product.id]));
    // Remove feedback after 2 seconds
    setTimeout(() => {
      setAddedToCartItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(product.id);
        return newSet;
      });
    }, 2000);
  };

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
          className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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
      
      {/* Success Message */}
      {addedToCartItems.size > 0 && (
        <div className="mb-6 p-4 bg-green-100 border border-green-200 rounded-lg">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-green-800 font-medium">
              {addedToCartItems.size === 1 
                ? 'Item added to cart!' 
                : `${addedToCartItems.size} items added to cart!`
              }
            </span>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlist.map(product => (
          <div key={product.id} className="relative">
            {/* Added to Cart Overlay */}
            {addedToCartItems.has(product.id) && (
              <div className="absolute inset-0 bg-green-500/20 backdrop-blur-sm rounded-xl z-10 flex items-center justify-center">
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-green-800 font-semibold">Added to Cart!</span>
                  </div>
                </div>
              </div>
            )}
            
            <Product
              product={product}
              addToCart={handleAddToCart}
              toggleWishlist={toggleWishlist}
              isInWishlist={isInWishlist}
            />
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
            className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Add All to Cart ({wishlist.length} items)
          </button>
        </div>
      )}
    </div>
  );
};

export default WishlistPage; 