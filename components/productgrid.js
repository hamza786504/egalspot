import ProductCard from './productcard';

function ProductGrid({ products, limit , itemsPerRow }) {
  // Check if a limit is provided and slice the products array accordingly
  products = limit ? products.slice(0, limit) : products;
  return (
    <>
      <div className="mt-10 p-4 mx-auto lg:max-w-6xl md:max-w-4xl">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-16">Collection</h2>
        <div className="flex flex-wrap justify-start w-full items-stretch">
          {/* Map over the limited products array */}
          {products.map((product) => (
            <ProductCard key={product.id} itemsPerRow={itemsPerRow} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductGrid;