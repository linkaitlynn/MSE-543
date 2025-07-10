// src/utils/analytics.js

// Replace with your actual GA4 Measurement ID
export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

// Initialize Google Analytics with hash change tracking
export const initGA = () => {
  // Load the Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
    // Enable enhanced measurement to track hash changes
    enhanced_measurement_scroll: true,
    // Send page view on initialization
    send_page_view: true
  });

  // Additional hash change listener as backup
  let lastHash = window.location.hash;
  const trackHashChange = () => {
    if (window.location.hash !== lastHash) {
      lastHash = window.location.hash;
      const fullPath = window.location.pathname + window.location.hash;
      
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'page_view', {
          page_path: fullPath,
          page_location: window.location.href,
        });
      }
    }
  };

  // Listen for hash changes
  window.addEventListener('hashchange', trackHashChange);
  
  // Cleanup function (you might want to call this when the app unmounts)
  return () => {
    window.removeEventListener('hashchange', trackHashChange);
  };
};

// Track page views with hash router support
export const trackPageView = (path, title) => {
  if (typeof window.gtag !== 'undefined') {
    // For hash router, we need to include the hash in the page path
    const fullPath = window.location.pathname + window.location.hash;
    
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: fullPath,
      page_title: title,
      page_location: window.location.href,
    });
    
    // Also send as a page_view event for better tracking
    window.gtag('event', 'page_view', {
      page_path: fullPath,
      page_title: title,
      page_location: window.location.href,
    });
  }
};

// Track custom events
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, parameters);
  }
};

// E-commerce tracking functions
export const trackPurchase = (transactionId, items, value, currency = 'USD') => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'purchase', {
      transaction_id: transactionId,
      value: value,
      currency: currency,
      items: items
    });
  }
};

export const trackAddToCart = (item, currency = 'USD') => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'add_to_cart', {
      currency: currency,
      value: item.price,
      items: [{
        item_id: item.id,
        item_name: item.name,
        category: item.category,
        price: item.price,
        quantity: 1
      }]
    });
  }
};

export const trackRemoveFromCart = (item, currency = 'USD') => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'remove_from_cart', {
      currency: currency,
      value: item.price,
      items: [{
        item_id: item.id,
        item_name: item.name,
        category: item.category,
        price: item.price,
        quantity: 1
      }]
    });
  }
};

export const trackAddToWishlist = (item, currency = 'USD') => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'add_to_wishlist', {
      currency: currency,
      value: item.price,
      items: [{
        item_id: item.id,
        item_name: item.name,
        category: item.category,
        price: item.price,
        quantity: 1
      }]
    });
  }
};