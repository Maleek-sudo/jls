import TracksuitLong from "./Images/Tracksuitlong.jpg";
import TracksuitShort from "./Images/tracksuitshort.jpg";
import DenimJean from "./Images/Denimjean.jpg";
import Cap from "./Images/cap.jpg";
import TankTopWhite from "./Images/tanktopwhite.jpg";
import TankTopBlack from "./Images/tanktopblack.jpg"
import Armless from "./Images/armless.jpg";
import Top1 from "./Images/Top1.jpg";
import LongSleeve from "./Images/longsleeve.jpg";
import JerseySpecial from "./Images/jerseyspecial.jpg";
import JerseyWhite from "./Images/JerseyWhite.jpg";
import JerseyBlack from "./Images/JerseyBlack.jpg";
import Top15 from "./Images/Top15.jpg";
import Sock from "./Images/Sock.jpg";
import GoldCap from "./Images/GoldCap.jpg";
import Slide from "./Images/Slide.jpg";
import Top8 from "./Images/Top8.jpg";

export const categories = [
    "All",
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

export const products = [
    {
        id: 1,
        name: "JLS Track Suit - Long",
        price: 85000,
        category: "Track Suit",
        images: [TracksuitLong],
        hasVariants: true,
        badge: "Bestseller",

        description: "Premium two-piece track suit in jet black. Slim fit with contrast JLS branding.",

        material: "95% Cotton, 5% Elastane",
        color: "Black",
        sizes: ["S", "M", "L", "XL"],
        fit: "Slim Fit",

        placeholderBg: "#0d1b2a",
    },
    {
        id: 2,
        name: "JLS Track Suit - Short",
        price: 55000,
        category: "Track Suit",
        images: [TracksuitShort],
        hasVariants: true,
        badge: null,

        description: "Premium two-piece track suit in washed grey. Relaxed fit with embroidered JLS logo.",

        material: "95% Cotton, 5% Elastane",
        color: "Black",
        sizes: ["S", "M", "L", "XL"],
        fit: "Slim Fit",

        placeholderBg: "#2c2c2c",
    },
    {
        id: 3,
        name: "JLS Denim Jean - Slim",
        price: 35000,
        category: "Denim Jean",
        images: [DenimJean],
        hasVariants: true,
        badge: "New",

        description: "Slim-cut denim in rigid indigo wash. Five-pocket styling with JLS patch.",
        material: "95% Cotton, 5% Elastane",
        color: "Black",
        sizes: ["S", "M", "L", "XL"],
        fit: "Slim Fit",

        placeholderBg: "#1a2a4a",
    },
    {
        id: 4,
        name: "JLS Cap - Black",
        price: 18000,
        category: "Cap",
        images: [Cap],
        hasVariants: false,
        badge: null,

        description: "Structured six-panel cap in black with gold JLS embroidery.",

        material: "95% Cotton, 5% Elastane",
        color: "Black",
        sizes: ["S", "M", "L", "XL"],
        fit: "Slim Fit",

        placeholderBg: "#111111",
    },
    {
        id: 5,
        name: "JLS Tank Top - White",
        price: 25000,
        category: "Tank Top",
        images: [TankTopWhite],
        hasVariants: true,
        badge: null,

        description: "Clean white cotton tank with minimal JLS chest print. Everyday essential.",

        material: "95% Cotton, 5% Elastane",
        color: "Black",
        sizes: ["S", "M", "L", "XL"],
        fit: "Slim Fit",

        placeholderBg: "#3a3a3a",
    },
        {
        id: 6,
        name: "JLS Tank Top - Black",
        price: 25000,
        category: "Tank Top",
        images: [TankTopBlack],
        hasVariants: true,
        badge: null,

        description: "Clean white cotton tank with minimal JLS chest print. Everyday essential.",

        material: "95% Cotton, 5% Elastane",
        color: "Black",
        sizes: ["S", "M", "L", "XL"],
        fit: "Slim Fit",

        placeholderBg: "#3a3a3a",
    },

    {
        id: 7,
        name: "JLS Armless - Never Trippin",
        price: 40000,
        category: "Armless",
        images: [Armless],
        hasVariants: true,
        badge: null,

        description: "Cut-off muscle tee in heavy cotton. Raw hem with JLS back graphic.",

        material: "95% Cotton, 5% Elastane",
        color: "Black",
        sizes: ["S", "M", "L", "XL"],
        fit: "Slim Fit",

        placeholderBg: "#1a1a1a",
    },
    {
        id: 8,
        name: "JLS Top - Oversized",
        price: 35000,
        category: "Top",
        images: [Top1],
        hasVariants: true,
        badge: "New",

        description: "Drop-shoulder oversized tee in washed cotton. Statement JLS chest print.",

        material: "95% Cotton, 5% Elastane",
        color: "Black",
        sizes: ["S", "M", "L", "XL"],
        fit: "Slim Fit",

        placeholderBg: "#0d2a1a",
    },
    {
        id: 9,
        name: "JLS Long Sleeve - The New Era",
        price: 65000,
        category: "Long Sleeve",
        images: [LongSleeve],
        hasVariants: true,
        badge: null,

        description: "Heavyweight long sleeve in midnight navy. Ribbed cuffs with tonal JLS logo.",

        material: "95% Cotton, 5% Elastane",
        color: "Black",
        sizes: ["S", "M", "L", "XL"],
        fit: "Slim Fit",

        placeholderBg: "#0d1a3a",
    },
    {
        id: 10,
        name: "JLS Jersey - Gold Edition",
        price: 65000,
        category: "Jersey",
        images: [JerseySpecial],
        hasVariants: true,
        badge: "Limited",

        description: "Mesh basketball jersey in black with gold JLS numbering. Limited run.",

        material: "95% Cotton, 5% Elastane",
        color: "Black",
        sizes: ["S", "M", "L", "XL"],
        fit: "Slim Fit",

        placeholderBg: "#2a1a00",
    },
    {
        id: 11,
        name: "JLS Jersey - White",
        price: 65000,
        category: "Jersey",
        images: [JerseyWhite],
        hasVariants: true,
        badge: "Limited",

        description: "Mesh basketball jersey in black with gold JLS numbering. Limited run.",

        material: "95% Cotton, 5% Elastane",
        color: "Black",
        sizes: ["S", "M", "L", "XL"],
        fit: "Slim Fit",

        placeholderBg: "#2a1a00",
    },
    {
        id: 12,
        name: "JLS Jersey - Black",
        price: 65000,
        category: "Jersey",
        images: [JerseyBlack],
        hasVariants: true,
        badge: "Limited",

        description: "Mesh basketball jersey in black with gold JLS numbering. Limited run.",

        material: "95% Cotton, 5% Elastane",
        color: "Black",
        sizes: ["S", "M", "L", "XL"],
        fit: "Slim Fit",

        placeholderBg: "#2a1a00",
    },
    {
        id: 13,
        name: "JLS Slides - Black",
        price: 35000,
        category: "Slides",
        images: [Slide],
        hasVariants: true,
        badge: "Bestseller",

        description: "Quilted strap slides with moulded footbed. Gold JLS hardware on strap.",

        material: "95% Cotton, 5% Elastane",
        color: "Black",
        sizes: ["40", "41", "42", "43", "44", "45", "46"],
        fit: "Slim Fit",

        placeholderBg: "#0d0d0d",
    },
    {
        id: 14,
        name: "JLS Socks",
        price: 15000,
        category: "Socks",
        images: [Sock],
        hasVariants: false,
        badge: null,

        description: "Mid-length crew socks in black with JLS ankle branding. Pack of 2.",

        material: "95% Cotton, 5% Elastane",
        color: "Black",
        sizes: ["S", "M", "L", "XL"],
        fit: "Slim Fit",

        placeholderBg: "#1a1a2a",
    },
    {
        id: 15,
        name: "JLS Cap - Gold",
        price: 25000,
        category: "Cap",
        images: [GoldCap],
        hasVariants: false,
        badge: "Limited",

        description: "Structured six-panel cap in sand with gold JLS embroidery. Limited edition.",

        material: "95% Cotton, 5% Elastane",
        color: "Black",
        sizes: ["S", "M", "L", "XL"],
        fit: "Slim Fit",

        placeholderBg: "#2a1e00",
    },
    {
        id: 16,
        name: "JLS Top - Oversized",
        price: 35000,
        category: "Top",
        images: [Top15],
        hasVariants: true,
        badge: "New",

        description: "Drop-shoulder oversized tee in washed cotton. Statement JLS chest print.",

        material: "95% Cotton, 5% Elastane",
        color: "Black",
        sizes: ["S", "M", "L", "XL"],
        fit: "Slim Fit",

        placeholderBg: "#190d2a",
    },
    {
        id: 17,
        name: "JLS Top - Oversized",
        price: 35000,
        category: "Top",
        images: [Top8],
        hasVariants: true,
        badge: "New",

        description: "Drop-shoulder oversized tee in washed cotton. Statement JLS chest print.",

        material: "95% Cotton, 5% Elastane",
        color: "Black",
        sizes: ["S", "M", "L", "XL"],
        fit: "Slim Fit",

        placeholderBg: "#190d2a",
    },

];