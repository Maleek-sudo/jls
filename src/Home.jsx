import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Hero from "./assets/Components/Hero.jsx";
import CategoryTabs from "./assets/Components/CategoryTabs.jsx";
import ProductGrid from "./assets/Components/ProductGrid.jsx";
import Pagination from "./assets/Components/Pagination.jsx";
import CartDrawer from "./assets/Components/CartDrawer.jsx";
import Toast from "./assets/Components/Toast.jsx";
import Footer from "./assets/Components/Footer.jsx";

import { products } from "./assets/Data/product.js";

const ITEMS_PER_PAGE = 8;

export default function Home({
  cart,
  setCart,
  addToCart,
  searchTerm,
}) {
  const [searchParams] = useSearchParams();

  const categoryFromUrl =
    searchParams.get("category") || "All";

  const [activeCategory, setActiveCategory] =
    useState(categoryFromUrl);

  const [currentPage, setCurrentPage] =
    useState(1);

  const [cartOpen, setCartOpen] =
    useState(false);

  const [toast, setToast] = useState({
    visible: false,
    message: "",
  });

  const toastTimer = useRef(null);

  useEffect(() => {
    setActiveCategory(categoryFromUrl);
    setCurrentPage(1);
  }, [categoryFromUrl]);

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

  const handleAddToCart = (product) => {
    addToCart(product);

    showToast(
      `${product.name} added to cart`
    );

    setCartOpen(true);
  };

  const categoryFiltered =
    activeCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category ===
            activeCategory
        );

  const filtered =
    categoryFiltered.filter((product) => {
      const search =
        searchTerm.toLowerCase();

      return (
        product.name
          .toLowerCase()
          .includes(search) ||
        product.category
          .toLowerCase()
          .includes(search)
      );
    });

  const totalPages = Math.ceil(
    filtered.length / ITEMS_PER_PAGE
  );

  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (
    category
  ) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const changeQty = (index, delta) => {
    setCart((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              qty: Math.max(
                1,
                item.qty + delta
              ),
            }
          : item
      )
    );
  };

  const removeFromCart = (index) => {
    setCart((prev) =>
      prev.filter((_, i) => i !== index)
    );

    showToast("Item removed from cart");
  };

  return (
    <div className="min-h-screen bg-[#f5f5f3] text-[#111111]">
      <Hero />

      <CategoryTabs
        active={activeCategory}
        onChange={handleCategoryChange}
      />

      <main
        id="products"
        className="max-w-7xl mx-auto px-6 py-10"
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[#111111] font-semibold text-lg">
            {searchTerm
              ? `Search Results for "${searchTerm}"`
              : activeCategory === "All"
              ? "All Products"
              : activeCategory}

            <span className="ml-2 text-sm font-normal text-[#6b6b6b]">
              ({filtered.length} items)
            </span>
          </h2>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-xl font-semibold text-[#111111]">
              No products found
            </h3>

            <p className="text-[#6b6b6b] mt-2">
              Try another search term.
            </p>
          </div>
        ) : (
          <>
            <ProductGrid
              products={paginated}
              onAddToCart={
                handleAddToCart
              }
            />

            {totalPages > 1 && (
              <Pagination
                current={currentPage}
                total={totalPages}
                onChange={
                  setCurrentPage
                }
              />
            )}
          </>
        )}
      </main>

      <Footer />

      <CartDrawer
        open={cartOpen}
        onClose={() =>
          setCartOpen(false)
        }
        cart={cart}
        onChangeQty={changeQty}
        onRemove={removeFromCart}
      />

      <Toast
        visible={toast.visible}
        message={toast.message}
      />
    </div>
  );
}