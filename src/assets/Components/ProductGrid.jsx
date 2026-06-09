import ProductCard from "./ProductCard";

export default function ProductGrid({ products, onAddToCart }) {

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="w-16 h-16 rounded-full bg-[#eeecea] flex items-center justify-center mb-4">
          <svg className="w-7 h-7 text-[#9a9a9a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
        <p className="text-[#111111] font-medium text-base">No products in this category yet</p>
        <p className="text-[#9a9a9a] text-sm mt-1">Check back soon or browse another category</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}