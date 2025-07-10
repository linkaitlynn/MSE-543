import Hero from '../components/Hero';
import DealOfTheDay from '../components/DealOfTheDay';
import ProductsGrid from '../components/ProductsGrid';

const Home = ({ addToCart, toggleWishlist, isInWishlist }) => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Grapes',
      price: 10,
      image: 'https://images.unsplash.com/photo-1631299106224-aae61c217164?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Fresh organic vegetables'
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
    }
  ];

  return (
    <>
      <Hero />
      <DealOfTheDay />
      <h2 className="text-2xl font-bold my-6">Featured Products</h2>
      <ProductsGrid 
        products={featuredProducts}
        addToCart={addToCart}
        toggleWishlist={toggleWishlist}
        isInWishlist={isInWishlist}
      />
    </>
  );
};

export default Home;