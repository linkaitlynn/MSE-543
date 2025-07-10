import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-green-400 to-green-600 text-white py-16 mb-8">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Fresh Groceries Delivered
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Get fresh, organic groceries delivered to your doorstep. Quality products, competitive prices, and excellent service.
        </p>
        <div className="space-x-4">
          <Link
            to="/products"
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Shop Now
          </Link>
          <Link
            to="/products"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-block"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
