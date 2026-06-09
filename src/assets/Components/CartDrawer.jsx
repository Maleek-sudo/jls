import { useNavigate } from "react-router-dom";

export default function CartDrawer({
  open,
  onClose,
  cart,
  onChangeQty,
  onRemove,
}) {
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handleCheckout = () => {
    onClose();
    navigate("/checkout");
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[340px] bg-white border-l border-[#e5e5e5] z-50 flex flex-col transition-transform duration-300 ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#e5e5e5]">
          <h2 className="text-[#111111] font-semibold text-base tracking-wide">
            Your Cart

            {cart.length > 0 && (
              <span className="ml-2 text-xs font-normal text-[#9a9a9a]">
                ({cart.reduce((sum, item) => sum + item.qty, 0)} items)
              </span>
            )}
          </h2>

          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-[#9a9a9a] hover:text-[#111111]"
          >
            ✕
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center mt-20 text-center">
              <div className="w-14 h-14 rounded-full bg-[#f5f5f3] flex items-center justify-center mb-3">
                <svg
                  className="w-6 h-6 text-[#9a9a9a]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>

              <p className="text-sm font-medium text-[#111111]">
                Your cart is empty
              </p>

              <p className="text-xs text-[#9a9a9a] mt-1">
                Add something to get started
              </p>
            </div>
          ) : (
            cart.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex gap-3 py-4 border-b border-[#f0f0f0]"
              >
                {/* Product Image */}
                <div className="w-16 h-16 bg-[#eeecea] rounded overflow-hidden shrink-0">
                  {item.images?.[0] ? (
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#0d1b2a]">
                      <span className="text-white text-xs font-black">
                        JLS
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#111111]">
                    {item.name}
                  </p>

                  <p className="text-xs text-[#9a9a9a] mt-1">
                    ₦{item.price.toLocaleString("en-NG")}
                  </p>

                  {item.selectedSize && (
                    <p className="text-xs text-gray-500 mt-1">
                      Size:{" "}
                      <span className="font-medium">
                        {item.selectedSize}
                      </span>
                    </p>
                  )}

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 mt-3">
                    <button
                      onClick={() =>
                        onChangeQty(index, -1)
                      }
                      className="w-7 h-7 border border-gray-300 rounded flex items-center justify-center"
                    >
                      −
                    </button>

                    <span className="font-semibold">
                      {item.qty}
                    </span>

                    <button
                      onClick={() =>
                        onChangeQty(index, 1)
                      }
                      className="w-7 h-7 border border-gray-300 rounded flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => onRemove(index)}
                    className="mt-2 text-xs text-red-500 hover:text-red-700"
                  >
                    Remove Item
                  </button>
                </div>

                {/* Item Total */}
                <div className="text-sm font-semibold text-[#111111]">
                  ₦
                  {(item.price * item.qty).toLocaleString(
                    "en-NG"
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="px-6 py-5 border-t border-[#e5e5e5] bg-white">
            <div className="flex justify-between items-center mb-5">
              <span className="text-xs uppercase tracking-widest text-[#9a9a9a]">
                Subtotal
              </span>

              <span className="text-xl font-bold text-[#111111]">
                ₦{total.toLocaleString("en-NG")}
              </span>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-[#1a3a3a] hover:bg-[#0d2020] text-white py-4 font-bold text-xs uppercase tracking-[0.15em] transition"
            >
              Proceed to Checkout
            </button>

            <button
              onClick={onClose}
              className="w-full mt-2 py-3 text-xs text-[#9a9a9a] hover:text-[#111111]"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}