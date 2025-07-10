import ProductsGrid from '../components/ProductsGrid';

const Products = ({ addToCart, toggleWishlist, isInWishlist }) => {
  const allProducts = [
    {
        id: 1,
        name: 'Grapes',
        price: 10,
        image: 'https://images.unsplash.com/photo-1631299106224-aae61c217164?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Fresh organic grapes'
    },
    {
        id: 2,
        name: 'Oranges',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Sweet organic fruits'
    },
    {
      id: 3,
      name: 'Fresh Bread',
      price: 12,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop',
      description: 'Freshly baked bread'
    },
    {
      id: 4,
      name: 'Milk',
      price: 7.99,
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=300&fit=crop',
      description: 'Fresh dairy products'
    },
    {
      id: 5,
      name: 'Organic Meat',
      price: 23.99,
      image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=300&fit=crop',
      description: 'Premium organic meat'
    },
    {
      id: 6,
      name: 'Cod Fish',
      price: 12,
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop',
      description: 'Fresh caught fish'
    },
    {
      id: 7,
      name: 'Eggs',
      price: 12.32,
      image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=300&fit=crop',
      description: 'Farm fresh organic eggs'
    },
    {
      id: 8,
      name: 'Herbs',
      price: 8,
      image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=400&h=300&fit=crop',
      description: 'Fresh aromatic herbs'
    },
    {
      id: 9,
      name: 'Nuts',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop',
      description: 'Premium organic nuts'
    }
  ];

  return (
    <div className="products-page">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      <ProductsGrid 
        products={allProducts}
        addToCart={addToCart}
        toggleWishlist={toggleWishlist}
        isInWishlist={isInWishlist}
      />
    </div>
  );
};

export default Products;
