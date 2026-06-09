import { useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../assets/Data/product";

import CartDrawer from "../assets/Components/CartDrawer";
import Toast from "../assets/Components/Toast";

export default function ProductDetails({
  cart,
  addToCart,
  changeQty,
  removeFromCart,
}) {
  const { id } = useParams();

  const product = products.find(
    (p) => p.id === Number(id)
  );

  const [cartOpen, setCartOpen] = useState(false);

  const [toast, setToast] = useState({
    visible: false,
    message: "",
  });

  const toastTimer = useRef(null);

  const [selectedImage, setSelectedImage] =
    useState(null);

  const [selectedSize, setSelectedSize] =
    useState("");

  if (!product) {
    return (
      <h1 className="text-center mt-10 text-2xl">
        Product not found
      </h1>
    );
  }

  const currentImage =
    selectedImage || product.images?.[0];

  const currentSize =
    selectedSize || product.sizes?.[0] || "";

  const showToast = (message) => {
    setToast({
      visible: true,
      message,
    });

    clearTimeout(toastTimer.current);

    toastTimer.current = setTimeout(() => {
      setToast((prev) => ({
        ...prev,
        visible: false,
      }));
    }, 2500);
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      selectedSize: currentSize,
    });

    showToast(
      `${product.name} (${currentSize}) added to cart`
    );

    setCartOpen(true);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto py-12 px-6">

        {/* Breadcrumb */}
        <div className="mb-10 flex flex-wrap items-center text-sm">
          <Link
            to="/"
            className="text-gray-500 hover:text-black transition"
          >
            HOME
          </Link>

          <span className="mx-2 text-gray-400">/</span>

          <Link
            to={`/?category=${encodeURIComponent(product.category)}`}
            className="text-gray-500 uppercase hover:text-black transition"
          >
            {product.category}
          </Link>

          <span className="mx-2 text-gray-400">/</span>

          <span className="font-semibold text-black">
            {product.name}
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-16">

          {/* Images */}
          <div>
            <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
              {currentImage ? (
                <img
                  src={currentImage}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{
                    backgroundColor:
                      product.placeholderBg || "#111",
                  }}
                >
                  <span className="text-white text-6xl font-black">
                    JLS
                  </span>
                </div>
              )}
            </div>

            {product.images?.length > 1 && (
              <div className="flex gap-3 mt-4 flex-wrap">
                {product.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    onClick={() =>
                      setSelectedImage(img)
                    }
                    className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${currentImage === img
                        ? "border-black"
                        : "border-gray-300"
                      }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div>
            <span className="inline-block bg-gray-100 px-4 py-2 rounded-full text-sm mb-5">
              {product.category}
            </span>

            <h1 className="text-5xl font-bold mb-5">
              {product.name}
            </h1>

            <p className="text-3xl font-semibold mb-8">
              ₦
              {product.price.toLocaleString(
                "en-NG"
              )}
            </p>

            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              {product.description}
            </p>

            {product.material && (
              <p className="mb-3 text-lg">
                <strong>Material:</strong>{" "}
                {product.material}
              </p>
            )}

            {product.color && (
              <p className="mb-3 text-lg">
                <strong>Color:</strong>{" "}
                {product.color}
              </p>
            )}

            {product.fit && (
              <p className="mb-6 text-lg">
                <strong>Fit:</strong>{" "}
                {product.fit}
              </p>
            )}

            {product.sizes && (
              <div className="mb-8">
                <p className="font-semibold mb-4 text-lg">
                  Select Size
                </p>

                <div className="flex gap-3 flex-wrap">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() =>
                        setSelectedSize(size)
                      }
                      className={`w-14 h-14 border rounded-xl font-semibold transition ${currentSize === size
                          ? "bg-black text-white border-black"
                          : "bg-white text-black border-gray-300 hover:border-black"
                        }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                <p className="mt-4 text-gray-500">
                  Selected Size:
                  <span className="ml-2 font-semibold text-black">
                    {currentSize}
                  </span>
                </p>
              </div>
            )}

            <button
              onClick={handleAddToCart}
              className="bg-black text-white px-10 py-4 rounded-xl text-lg font-medium hover:bg-gray-800 transition"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onChangeQty={changeQty}
        onRemove={removeFromCart}
      />

      <Toast
        visible={toast.visible}
        message={toast.message}
      />
    </>
  );
}