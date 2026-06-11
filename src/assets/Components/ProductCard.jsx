import { Link } from "react-router-dom";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="flex flex-col bg-white group">
      <Link to={`/product/${product.id}`}>
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden cursor-pointer">
          {product.images?.length ? (
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{
                backgroundColor:
                  product.placeholderBg || "#0d1b2a",
              }}
            >
              <span
                className="text-white font-black tracking-widest select-none"
                style={{
                  fontSize: "clamp(32px, 5vw, 56px)",
                  fontFamily:
                    "'Bebas Neue', 'Impact', sans-serif",
                }}
              >
                JLS
              </span>
            </div>
          )}

          <span className="absolute top-2 left-2 bg-white/90 text-[#111111] text-[10px] font-semibold px-2 py-0.5 uppercase tracking-wider">
            {product.category}
          </span>

          {product.badge && (
            <span
              className={`absolute top-2 right-2 text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider ${
                product.badge === "New"
                  ? "bg-[#1a3a3a] text-white"
                  : product.badge === "Limited"
                  ? "bg-[#c9a84c] text-[#0d1b2a]"
                  : "bg-[#111111] text-white"
              }`}
            >
              {product.badge}
            </span>
          )}
        </div>

        <div className="pt-3 px-1 pb-1">
          <p className="text-sm text-[#111111] font-medium leading-snug line-clamp-2">
            {product.name}
          </p>

          <p className="text-sm text-[#111111] font-semibold mt-1">
            ₦{product.price?.toLocaleString("en-NG")}
          </p>
        </div>
      </Link>
      
      <div className="px-1 pb-3 mt-2">
        <button
          onClick={() => onAddToCart(product)}
          className="w-full bg-[#1a3a3a] hover:bg-[#0d2020] active:scale-[0.98] text-white text-[11px] font-bold tracking-[0.12em] uppercase py-3 transition-all duration-200"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}