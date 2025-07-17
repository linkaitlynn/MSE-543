import Product from './Product';

const ProductsGrid = ({ products, addToCart, toggleWishlist }) => {
  return (
    <div className="products-grid">
      {products.map(product => (
        <Product 
          key={product.id}
          product={product}
          addToCart={addToCart}
          toggleWishlist={toggleWishlist}
          isInWishlist={false} // You'll need to implement wishlist logic
        />
      ))}
    </div>
  );
};

export default ProductsGrid;