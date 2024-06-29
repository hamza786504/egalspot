import ProductCard from './productcard';

function ProductGrid({ products, limit , itemsPerRow }) {
  // Check if a limit is provided and slice the products array accordingly
  products = limit ? products.slice(0, limit) : products;
  return (
    <>
      <div className="lg:max-w-6xl md:max-w-4xl">
        <div className="flex flex-wrap justify-start w-full items-stretch">
          {/* Map over the limited products array */}
          {products.map((product) => (
            <ProductCard key={product._id} itemsPerRow={itemsPerRow} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductGrid;
