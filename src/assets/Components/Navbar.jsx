import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../logo.png";

const collectionItems = [
  "Track Suit",
  "Cap",
  "Denim Jean",
  "Tank Top",
  "Armless",
  "Top",
  "Long Sleeve",
  "Jersey",
  "Slides",
  "Socks",
];

export default function Navbar({
  cartCount = 0,
  onCartOpen,
  searchTerm = "",
  setSearchTerm = () => {},
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();
  const showSearch = location.pathname === "/";

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#e5e5e5]">
      <div
        className={`max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4 ${
          showSearch ? "" : "py-2"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="shrink-0">
          <img
            src={logo}
            alt="Just A Lifestyle"
            className="h-14 w-14 object-contain"
          />
        </Link>

        {/* Desktop Search - Homepage Only */}
        {showSearch && (
          <div className="hidden md:flex flex-1 max-w-xl relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-10 pl-4 pr-10 border border-[#e5e5e5] bg-[#f5f5f3] rounded-md text-sm text-[#111111] placeholder:text-[#9a9a9a] focus:outline-none focus:ring-2 focus:ring-[#1a3a3a]"
            />

            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9a9a9a]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
              />
            </svg>
          </div>
        )}

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-1 text-sm font-medium text-[#111111]">
            <span>NGN</span>
          </div>

          <Link
            to="/about"
            className="hidden md:block text-sm font-medium text-[#111111] hover:text-[#1a3a3a]"
          >
            About Us
          </Link>

          <Link
            to="/contact"
            className="hidden md:block text-sm font-medium text-[#111111] hover:text-[#1a3a3a]"
          >
            Contact Us
          </Link>

          {/* <Link
            to="/login"
            className="hidden md:block text-sm font-medium text-[#111111] hover:text-[#1a3a3a]"
          >
            Login/Sign Up
          </Link> */}

          {/* Cart */}
          <button
            onClick={onCartOpen}
            className="relative text-[#111111] hover:text-[#1a3a3a]"
            aria-label="Open cart"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0"
              />
            </svg>

            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#1a3a3a] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu */}
          <button
            className="md:hidden text-[#111111]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search - Homepage Only */}
      {showSearch && (
        <div className="md:hidden px-4 pb-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-10 pl-4 pr-10 border border-[#e5e5e5] bg-[#f5f5f3] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3a3a]"
            />

            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9a9a9a]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
              />
            </svg>
          </div>
        </div>
      )}

      {/* Mobile Menu Content */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#e5e5e5] px-6 py-4">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-[#111111]"
          >
            Home
          </Link>

          <p className="text-xs font-bold text-gray-400 uppercase mt-3 mb-2">
            Collections
          </p>

          {collectionItems.map((item) => (
            <button
              key={item}
              className="block w-full text-left py-2 text-sm text-gray-600 hover:text-[#1a3a3a]"
            >
              {item}
            </button>
          ))}

          <div className="border-t mt-3 pt-3">
            <Link
              to="/about"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-[#111111]"
            >
              About Us
            </Link>

            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-[#111111]"
            >
              Contact
            </Link>

            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-[#111111]"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}