import Product from './Product';

const ProductsGrid = ({ products, addToCart, toggleWishlist, isInWishlist }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <Product
          key={product.id}
          product={product}
          addToCart={addToCart}
          toggleWishlist={toggleWishlist}
          isInWishlist={isInWishlist(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductsGrid;
