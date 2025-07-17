import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import WishlistPage from './pages/WishlistPage';
import { initGA, trackAddToCart, trackRemoveFromCart, trackAddToWishlist } from './utils/analytics';
import useRouteTracking from './pages/useRouteTracking';
import './index.css';

// Component to handle route tracking
function RouteTracker() {
  useRouteTracking();
  return null;
}

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Initialize Google Analytics on app mount
  useEffect(() => {
    initGA();
  }, []);

  const addToCart = (product) => {
    // Track the add to cart event
    trackAddToCart(product);
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    // Find the product before removing it for tracking
    const productToRemove = cart.find(item => item.id === productId);
    if (productToRemove) {
      trackRemoveFromCart(productToRemove);
    }
    
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const toggleWishlist = (product) => {
    const isCurrentlyInWishlist = wishlist.some(item => item.id === product.id);
    
    // Track add to wishlist event
    if (!isCurrentlyInWishlist) {
      trackAddToWishlist(product);
    }
    
    setWishlist(prevWishlist => {
      if (prevWishlist.some(item => item.id === product.id)) {
        return prevWishlist.filter(item => item.id !== product.id);
      }
      return [...prevWishlist, product];
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist(prevWishlist => prevWishlist.filter(item => item.id !== productId));
  };

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <RouteTracker />
        <Header 
          cartCount={cart.reduce((total, item) => total + item.quantity, 0)}
          wishlistCount={wishlist.length}
        />
        <main className="flex-grow container mx-auto px-4 py-6">
          <Routes>
            <Route
              path="/"
              element={
                <Home 
                  addToCart={addToCart} 
                  toggleWishlist={toggleWishlist}
                  isInWishlist={isInWishlist}
                />
              }
            />
            <Route
              path="/products"
              element={
                <Products 
                  addToCart={addToCart} 
                  toggleWishlist={toggleWishlist}
                  isInWishlist={isInWishlist}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <CartPage
                  cart={cart}
                  updateQuantity={updateQuantity}
                  removeFromCart={removeFromCart}
                />
              }
            />
            <Route
              path="/wishlist"
              element={
                <WishlistPage
                  wishlist={wishlist}
                  removeFromWishlist={removeFromWishlist}
                  addToCart={addToCart}
                  toggleWishlist={toggleWishlist}
                  isInWishlist={isInWishlist}
                />
              }
            />
            <Route
              path="/checkout"
              element={<CheckoutPage cart={cart} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;