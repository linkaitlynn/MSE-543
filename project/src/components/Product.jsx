import { useState } from 'react';

const Product = ({ product, addToCart, toggleWishlist, isInWishlist }) => {
  const [quantity, setQuantity] = useState(0);
  const [hasClickedAddToCart, setHasClickedAddToCart] = useState(false);

  const handleWishlistToggle = () => {
    toggleWishlist(product);
  };

  const handleAddToCart = () => {
    if (!hasClickedAddToCart) {
      // First time clicking - just show quantity controls
      setQuantity(1);
      setHasClickedAddToCart(true);
    } else {
      // Second time clicking - actually add to cart
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
      // Reset to original state
      setQuantity(0);
      setHasClickedAddToCart(false);
    }
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prev => Math.max(0, prev - 1));
  };

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-white/30 hover:bg-white/80">
      <div className="relative">
        <img
          src={product.image || 'https://via.placeholder.com/300x200?text=Product+Image'}
          alt={product.name}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x200?text=Product+Image';
          }}
        />
        <div className="relative group">
          <button
            onClick={handleWishlistToggle}
            className="absolute top-2 right-2 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200 border border-white/50"
          >
            <svg
              className={`w-5 h-5 ${isInWishlist ? 'text-red-500 fill-current' : 'text-gray-400'}`}
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
          {/* Tooltip */}
          <div className="absolute top-12 right-2 bg-gray-800/90 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10 shadow-lg border border-gray-700/50">
            {isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
        {product.description && (
          <p className="text-gray-600 text-sm mb-3">{product.description}</p>
        )}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xl font-bold text-green-600">${product.price}</span>
        </div>
        
        {/* Quantity Selector - Only show after first Add to Cart click */}
        {hasClickedAddToCart && (
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Quantity:</span>
              <div className="flex items-center border border-gray-300/50 rounded-lg bg-white/50 backdrop-blur-sm">
                <button
                  onClick={decreaseQuantity}
                  className="w-8 h-8 bg-gray-200/80 hover:bg-gray-300/80 flex items-center justify-center rounded-l-lg transition-all duration-200"
                >
                  -
                </button>
                <span className="w-12 text-center text-sm font-medium bg-white/30">{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className="w-8 h-8 bg-gray-200/80 hover:bg-gray-300/80 flex items-center justify-center rounded-r-lg transition-all duration-200"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          {hasClickedAddToCart ? `Add ${quantity} to Cart` : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default Product;
