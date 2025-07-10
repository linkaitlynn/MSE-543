// src/hooks/useRouteTracking.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../utils/analytics';

const useRouteTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // For hash router, we need to construct the full path including the base path
    const basePath = window.location.pathname; // This will be /MSE-543/
    const hashPath = location.pathname + location.search; // This will be /products, /cart, etc.
    const fullPath = basePath + '#' + hashPath;
    
    // Create a readable page title based on the hash path
    const getPageTitle = (pathname) => {
      const routes = {
        '/': 'Home - MSE-543',
        '/products': 'Products - MSE-543',
        '/cart': 'Shopping Cart - MSE-543',
        '/wishlist': 'Wishlist - MSE-543',
        '/checkout': 'Checkout - MSE-543'
      };
      
      return routes[pathname] || 'Page - MSE-543';
    };

    const pageTitle = getPageTitle(location.pathname);
    
    // Track the page view with the full path
    trackPageView(fullPath, pageTitle);
    
    // Optional: Log for debugging (remove in production)
    console.log('GA4 Page View:', { 
      fullPath, 
      title: pageTitle, 
      basePath,
      hashPath,
      currentHash: window.location.hash
    });
    
  }, [location]);
};

export default useRouteTracking;