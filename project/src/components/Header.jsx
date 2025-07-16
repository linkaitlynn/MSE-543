import { Link, useLocation } from 'react-router-dom';

const Header = ({ cartCount, wishlistCount }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors">
            FreshMart
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive('/') 
                  ? 'bg-green-600 text-white shadow-md' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive('/products') 
                  ? 'bg-green-600 text-white shadow-md' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
              }`}
            >
              Products
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link 
              to="/wishlist" 
              className={`relative p-2 rounded-lg transition-all duration-200 ${
                isActive('/wishlist') 
                  ? 'bg-pink-100 text-pink-600' 
                  : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-md">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link 
              to="/cart" 
              className={`relative p-2 rounded-lg transition-all duration-200 ${
                isActive('/cart') 
                  ? 'bg-red-100 text-red-600' 
                  : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-md">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
