import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Toast from "./Toast.jsx";
import {
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

import logo from "../logo.png";
// import Toast from "./Toast";

const socials = [
  {
    title: "Instagram",
    href: "https://www.instagram.com/justalifestyle10",
    icon: FaInstagram,
  },
  {
    title: "TikTok",
    href: "https://www.tiktok.com/@justalifestyle10",
    icon: FaTiktok,
  },
  {
    title: "WhatsApp",
    href: "https://wa.me/2348148082132",
    icon: FaWhatsapp,
  },
];

export default function Footer() {
  const [input, setInput] = useState("");

  const [toast, setToast] = useState({
    visible: false,
    message: "",
  });

  const toastTimer = useRef(null);

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

  const handleSubscribe = () => {
    const value = input.trim();

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const phoneRegex =
      /^(\+234|234|0)[789][01]\d{8}$/;

    if (
      emailRegex.test(value) ||
      phoneRegex.test(value)
    ) {
      showToast(
        "Newsletter Subscription Successful"
      );

      setInput("");
    } else {
      showToast(
        "Please enter a valid email or phone number"
      );
    }
  };

  return (
    <>
      <footer className="bg-[#0d1b2a] text-white mt-20">

        {/* First Section */}
        <div className="max-w-7xl mx-auto px-6 pt-14 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-white/10">

          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="Just A Lifestyle"
              className="h-16 w-auto mb-5 object-contain"
            />

            <p className="text-white/50 text-sm leading-relaxed">
              Premium streetwear designed for confidence,
              culture, and everyday lifestyle.
            </p>

            <div className="flex gap-3 mt-6">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.title}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.title}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white/70 hover:text-[#c9a84c] hover:border-[#c9a84c] transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-[#c9a84c] text-[11px] font-bold uppercase tracking-[0.2em] mb-5">
              Shop
            </p>

            <Link to="/?category=Track Suit" className="block text-sm text-white/50 hover:text-white mb-2">
              Track Suits
            </Link>

            <Link to="/?category=Denim Jean" className="block text-sm text-white/50 hover:text-white mb-2">
              Denim Jeans
            </Link>

            <Link to="/?category=Cap" className="block text-sm text-white/50 hover:text-white mb-2">
              Caps
            </Link>

            <Link to="/?category=Tank Top" className="block text-sm text-white/50 hover:text-white mb-2">
              Tank Tops
            </Link>

            <Link to="/?category=Armless" className="block text-sm text-white/50 hover:text-white mb-2">
              Armless
            </Link>

            <Link to="/?category=Top" className="block text-sm text-white/50 hover:text-white mb-2">
              Tops
            </Link>

            <Link to="/?category=Long Sleeve" className="block text-sm text-white/50 hover:text-white mb-2">
              Long Sleeves
            </Link>

            <Link to="/?category=Jersey" className="block text-sm text-white/50 hover:text-white mb-2">
              Jerseys
            </Link>

            <Link to="/?category=Slides" className="block text-sm text-white/50 hover:text-white mb-2">
              Slides
            </Link>

            <Link to="/?category=Socks" className="block text-sm text-white/50 hover:text-white">
              Socks
            </Link>
          </div>

          <div>
            <p className="text-[#c9a84c] text-[11px] font-bold uppercase tracking-[0.2em] mb-5">
              Help
            </p>

            <p className="text-sm text-white/50 mb-2">
              Shipping Info
            </p>

            <p className="text-sm text-white/50 mb-2">
              Returns
            </p>

            <p className="text-sm text-white/50 mb-2">
              Size Guide
            </p>

            <p className="text-sm text-white/50 mb-2">
              FAQs
            </p>
          </div>

          <div>
            <p className="text-[#c9a84c] text-[11px] font-bold uppercase tracking-[0.2em] mb-5">
              Company
            </p>

            <Link
              to="/about"
              className="block text-sm text-white/50 hover:text-white mb-2"
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className="block text-sm text-white/50 hover:text-white mb-2"
            >
              Contact Us
            </Link>

            <div className="mt-5 space-y-2">
              <p className="text-sm text-white/50">
                📍 Lagos, Nigeria
              </p>

              <a
                href="mailto:hello@justalifestyle.com"
                className="block text-sm text-white/50 hover:text-white"
              >
                ✉️ yungmickey00@gmail.com
              </a>

              <a
                href="tel:+2348148082132"
                className="block text-sm text-white/50 hover:text-white"
              >
                📞 +234 814 808 2132
              </a>
            </div>
          </div>
        </div>

        {/* Discount Section */}
        <div className="max-w-7xl mx-auto px-6 py-10 border-b border-white/10">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c9a84c] mb-4">
            Sign Up for Discounts & Updates
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
            <input
              type="text"
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              placeholder="Enter your phone number or email address"
              className="flex-1 bg-white/5 border border-white/15 text-white placeholder:text-white/30 text-sm px-4 py-3 focus:outline-none"
            />

            <button
              onClick={handleSubscribe}
              className="bg-[#1a3a3a] hover:bg-[#0d2020] text-white text-sm font-semibold px-7 py-3 transition"
            >
              Subscribe
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/30">
            @ 2026 Just A Lifestyle. All rights reserved.
          </p>

          <p className="text-xs text-white/30">
            Designed in Lagos, Nigeria.
          </p>
        </div>
      </footer>

      <Toast
        visible={toast.visible}
        message={toast.message}
      />
    </>
  );
}