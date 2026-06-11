import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Toast from "../assets/Components/Toast.jsx";


export default function Checkout({ cart, setCart }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
  });

  const [cardDetails, setCardDetails] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("paystack");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: "" });
  const toastTimer = useRef(null);

  const shipping = 3000;
  const tax = 1500;
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const total = subtotal + shipping + tax;

  const showToast = (message) => {
    setToast({ visible: true, message });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 2500);
  };

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCardInput = (e) => {
    const { name, value } = e.target;

    if (name === "cardNumber") {
      const digits = value.replace(/\D/g, "").slice(0, 16);
      const formatted = digits.replace(/(.{4})/g, "$1 ").trim();
      setCardDetails((prev) => ({ ...prev, cardNumber: formatted }));
      return;
    }

    if (name === "expiry") {
      const digits = value.replace(/\D/g, "").slice(0, 4);
      const formatted =
        digits.length > 2
          ? digits.slice(0, 2) + "/" + digits.slice(2)
          : digits;
      setCardDetails((prev) => ({ ...prev, expiry: formatted }));
      return;
    }

    if (name === "cvv") {
      const digits = value.replace(/\D/g, "").slice(0, 3);
      setCardDetails((prev) => ({ ...prev, cvv: digits }));
      return;
    }

    setCardDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = () => {
    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.phone ||
      !form.address ||
      !form.city
    ) {
      showToast("Please fill all required fields.");
      return;
    }

    const completeOrder = () => {
      showToast("Order placed successfully!");

      setTimeout(() => {
        setCart([]); // CLEAR CART
        setOrderPlaced(true);
      }, 1500);
    };

    if (paymentMethod === "card") {
      if (
        !cardDetails.cardName ||
        !cardDetails.cardNumber ||
        !cardDetails.expiry ||
        !cardDetails.cvv
      ) {
        showToast("Please fill in your card details.");
        return;
      }

      if (
        cardDetails.cardNumber.replace(/\s/g, "").length !== 16
      ) {
        showToast("Please enter a valid card number.");
        return;
      }

      if (cardDetails.cvv.length !== 3) {
        showToast("Please enter a valid CVV.");
        return;
      }

      completeOrder();
      return;
    }

    if (paymentMethod === "bank-transfer") {
      completeOrder();
      return;
    }

    if (paymentMethod === "cod") {
      completeOrder();
      return;
    }

    if (paymentMethod === "paystack") {
      showToast("Redirecting to Paystack...");

      setTimeout(() => {
        setCart([]); // CLEAR CART
        setOrderPlaced(true);
      }, 1000);

      return;
    }
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="max-w-md text-center">
          <h1 className="text-4xl font-bold mb-4 text-green-600">
            Order Successful
          </h1>
          <p className="text-gray-600 mb-6">
            Thank you for your order. We will contact you shortly.
          </p>
          <Link
            to="/"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
        <Link to="/" className="bg-black text-white px-6 py-3 rounded-lg">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="px-6 md:px-12 py-10">
            <h1 className="text-4xl font-bold mb-8">Checkout</h1>
            <h2 className="text-2xl font-semibold mb-5">Delivery</h2>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  name="firstName"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={handleInput}
                  className="border rounded-xl p-4"
                />
                <input
                  name="lastName"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleInput}
                  className="border rounded-xl p-4"
                />
              </div>

              <input
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleInput}
                className="w-full border rounded-xl p-4"
              />
              <input
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleInput}
                className="w-full border rounded-xl p-4"
              />
              <input
                name="address"
                placeholder="Address"
                value={form.address}
                onChange={handleInput}
                className="w-full border rounded-xl p-4"
              />
              <input
                name="apartment"
                placeholder="Apartment, Suite, etc (optional)"
                value={form.apartment}
                onChange={handleInput}
                className="w-full border rounded-xl p-4"
              />

              <div className="grid grid-cols-3 gap-4">
                <input
                  name="city"
                  placeholder="City"
                  value={form.city}
                  onChange={handleInput}
                  className="border rounded-xl p-4"
                />
                <input
                  name="state"
                  placeholder="State"
                  value={form.state}
                  onChange={handleInput}
                  className="border rounded-xl p-4"
                />
                <input
                  placeholder="Postal Code"
                  className="border rounded-xl p-4"
                />
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-10 mb-5">
              Payment Method
            </h2>

            <div className="space-y-4">
              <label className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer">
                <input
                  type="radio"
                  checked={paymentMethod === "paystack"}
                  onChange={() => setPaymentMethod("paystack")}
                />
                Paystack
              </label>

              <label className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer">
                <input
                  type="radio"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                />
                Pay by Card
              </label>

              {paymentMethod === "card" && (
                <div className="border rounded-xl p-5 space-y-4 bg-[#f9f9f9]">
                  <input
                    name="cardName"
                    placeholder="Name on Card"
                    value={cardDetails.cardName}
                    onChange={handleCardInput}
                    className="w-full border rounded-xl p-4 bg-white"
                  />
                  <input
                    name="cardNumber"
                    placeholder="Card Number (0123 4567 8901 2345)"
                    value={cardDetails.cardNumber}
                    onChange={handleCardInput}
                    maxLength={19}
                    className="w-full border rounded-xl p-4 bg-white tracking-widest"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      name="expiry"
                      placeholder="MM/YY"
                      value={cardDetails.expiry}
                      onChange={handleCardInput}
                      maxLength={5}
                      className="border rounded-xl p-4 bg-white"
                    />
                    <input
                      name="cvv"
                      placeholder="CVV"
                      value={cardDetails.cvv}
                      onChange={handleCardInput}
                      maxLength={3}
                      type="password"
                      className="border rounded-xl p-4 bg-white"
                    />
                  </div>
                </div>
              )}

              <label className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer">
                <input
                  type="radio"
                  checked={paymentMethod === "bank-transfer"}
                  onChange={() => setPaymentMethod("bank-transfer")}
                />
                Bank Transfer
              </label>

              {paymentMethod === "bank-transfer" && (
                <div className="border rounded-xl p-5 bg-[#f9f9f9] space-y-4">
                  <h3 className="font-semibold text-lg">
                    Bank Transfer Details
                  </h3>

                  <div className="space-y-3">
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-500">
                        Bank Name
                      </span>
                      <span className="font-medium">
                        OPay
                      </span>
                    </div>

                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-500">
                        Account Name
                      </span>
                      <span className="font-medium">
                        Just A Lifestyle
                      </span>
                    </div>

                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-500">
                        Account Number
                      </span>

                      <div className="flex items-center gap-2">
                        <span className="font-bold text-lg">
                          8148082132
                        </span>

                        <button
                          type="button"
                          onClick={() => {
                            navigator.clipboard.writeText(
                              "1234567890"
                            );
                            showToast(
                              "Account number copied"
                            );
                          }}
                          className="px-3 py-1 text-xs bg-black text-white rounded-md"
                        >
                          Copy
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm text-yellow-800">
                    After payment, send your payment
                    receipt via WhatsApp or email for
                    verification before your order is
                    processed.
                  </div>
                </div>
              )}

              <label className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer">
                <input
                  type="radio"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                Cash On Delivery
              </label>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="w-full mt-8 bg-[#1a3a3a] hover:bg-[#0d2020] text-white py-4 rounded-xl font-semibold transition"
            >
              Complete Order
            </button>

            <button
              onClick={() => navigate("/")}
              className="w-full mt-3 py-4 rounded-xl font-semibold border border-[#1a3a3a] text-[#1a3a3a] hover:bg-[#f0f4f4] transition"
            >
              ← Back to Home
            </button>
          </div>

          <div className="bg-[#f7f7f7] px-6 md:px-12 py-10 border-l">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center mb-5"
              >
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    Size: {item.selectedSize}
                  </p>
                  <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                </div>
                <p>₦{(item.price * item.qty).toLocaleString("en-NG")}</p>
              </div>
            ))}

            <div className="mt-10 space-y-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₦{subtotal.toLocaleString("en-NG")}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₦{shipping.toLocaleString("en-NG")}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>₦{tax.toLocaleString("en-NG")}</span>
              </div>
              <div className="border-t pt-4 flex justify-between text-2xl font-bold">
                <span>Total</span>
                <span>₦{total.toLocaleString("en-NG")}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Toast visible={toast.visible} message={toast.message} />
    </>
  );
}