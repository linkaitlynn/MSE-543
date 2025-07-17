import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import WishlistPage from './pages/WishlistPage';
import './index.css';

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (product) => {
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
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <Header 
          cartCount={cart.reduce((total, item) => total + item.quantity, 0)}
          wishlistCount={wishlist.length}
        />
        <main className="pt-20 pb-6">
          <div className="container mx-auto px-4">
            <Routes>
              <Route
                path="/"
                element={
                  <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-6">
                    <Home 
                      addToCart={addToCart} 
                      toggleWishlist={toggleWishlist}
                      isInWishlist={isInWishlist}
                    />
                  </div>
                }
              />
              <Route
                path="/products"
                element={
                  <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-6">
                    <Products 
                      addToCart={addToCart} 
                      toggleWishlist={toggleWishlist}
                      isInWishlist={isInWishlist}
                    />
                  </div>
                }
              />
              <Route
                path="/cart"
                element={
                  <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-6">
                    <CartPage
                      cart={cart}
                      updateQuantity={updateQuantity}
                      removeFromCart={removeFromCart}
                    />
                  </div>
                }
              />
              <Route
                path="/wishlist"
                element={
                  <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-6">
                    <WishlistPage
                      wishlist={wishlist}
                      removeFromWishlist={removeFromWishlist}
                      addToCart={addToCart}
                      toggleWishlist={toggleWishlist}
                      isInWishlist={isInWishlist}
                    />
                  </div>
                }
              />
              <Route
                path="/checkout"
                element={
                  <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-6">
                    <CheckoutPage cart={cart} />
                  </div>
                }
              />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

// Change this from export default Home to:
export default App;