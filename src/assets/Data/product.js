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

        material: "100% Polyester Performance Fabric — lightweight, moisture-wicking, and quick-dry for training, travel, or everyday wear.",
        color: "Black and Grey",
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

        description: "A sleek two-piece short tracksuit in all black. The zip-up short-sleeve top features the JLS oval logo on the chest and a stunning back graphic — a laurel wreath crest with 'The JLS Club / 2025 Propaganda' in white and red.",

        material: "100% Polyester Performance Fabric — smooth, lightweight, and breathable for warm-weather wear, travel, or casual outings.",
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

        description: "Upgrade your streetwear collection with these premium oversized denim jorts, designed for both comfort and style. Featuring a relaxed wide-leg fit, durable denim construction, and bold graphic detailing, these shorts deliver a modern look with a vintage-inspired edge.",
        material: "High-quality denim fabric crafted for durability, comfort, and everyday wear.",
        color: "Black and Blue",
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

        description: "A clean white, athletic-cut tank top in washed black with contrast cream ribbed trim along the neckline and armholes. Features the iconic JLS monogram logo embroidered on the left chest.",

        material: "100% Combed Cotton Jersey — soft, breathable, and built for all-day wear",
        color: "White",
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

        description: "A clean black, athletic-cut tank top in washed black with contrast cream ribbed trim along the neckline and armholes. Features the iconic JLS monogram logo embroidered on the left chest.",

        material: "100% Combed Cotton Jersey — soft, breathable, and built for all-day wear",
        color: "Black",
        sizes: ["S", "M", "L", "XL"],
        fit: "Slim Fit",

        placeholderBg: "#3a3a3a",
    },

    {
        id: 7,
        name: "JLS Armless - Never Tripp'n",
        price: 40000,
        category: "Armless",
        images: [Armless],
        hasVariants: true,
        badge: null,

        description: "A head-turning all-over print tank featuring a dark, fiery street art graphic — masked figure, cash, flames, and bold gold lettering reading (Never Tripp'N) with the #DopeSkill tag at the bottom. Deep red distressed background gives it a raw, underground energy.",

        material: "100% Polyester Sublimation Print — vivid color retention, lightweight, and quick-dry for all-day comfort.",
        color: "Red",
        sizes: ["S", "M", "L", "XL"],
        fit: "Slim Fit",

        placeholderBg: "#1a1a1a",
    },
    {
        id: 8,
        name: "JLS Grind- Graphic Top",
        price: 35000,
        category: "Top",
        images: [Top1],
        hasVariants: true,
        badge: "New",

        description: "A clean black oversized tee with a subtle JLS oval logo on the front chest. The real statement is on the back — a bold airbrushed-style graphic of a masked, chained-up street character with vibrant red, green, and gold tones, 'GRIND' spray-painted large above, and the elegant'Just A Lifestyle' script flowing beneath",

        material: "100% Heavyweight Combed Cotton — thick and structured with a smooth surface for vivid, high-detail back print.",
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

        description: "A bold statement piece featuring a large back graphic of the JAL anime-style character with graffiti-inspired (Just A Lifestyle) lettering in red, white, and blue. The standout detail is the double-sleeve design — black body with white inner long sleeves peeking through.",

        material: "100% Heavyweight Cotton — structured feel with a premium, streetwear-ready drop",
        color: "Black",
        sizes: ["S", "M", "L", "XL"],
        fit: "Slim Fit",

        placeholderBg: "#0d1a3a",
    },
    {
        id: 10,
        name: "JLS Jersey - Marble Wave Polo Jersey",
        price: 65000,
        category: "Jersey",
        images: [JerseySpecial],
        hasVariants: true,
        badge: "Limited",

        description: "Mesh basketball jersey in black with gold JLS numbering. Limited run.",

        material: "100% Polyester Sublimation Print — smooth, breathable, and lightweight with vivid color",
        color: "Navy & Burnt Orange Marble",
        sizes: ["S", "M", "L", "XL"],
        fit: "Slim Fit",

        placeholderBg: "#2a1a00",
    },
    {
        id: 11,
        name: "JLS 'Member 20' Jersey - White",
        price: 65000,
        category: "Jersey",
        images: [JerseyWhite],
        hasVariants: true,
        badge: "Limited",

        description: "A clean white all-over tonal wave-pattern jersey with black V-neck collar trim. The front features the JLS.COM.NG branding with a playful duck mascot graphic, while the back displays the bold 'Member 20' numbering — making it feel exclusive and part of a crew.",

        material: "100% Polyester Mesh Sublimation — lightweight, breathable, and built for movement with crisp print detail throughout.",
        color: "White",
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

        description: "A clean black all-over tonal wave-pattern jersey with white V-neck collar trim. The front features the JLS.COM.NG branding with a playful duck mascot graphic, while the back displays the bold 'Member 20' numbering — making it feel exclusive and part of a crew.",

        material: "100% Polyester Mesh Sublimation — lightweight, breathable, and built for movement with crisp print detail throughout.",
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

        material: "PU Leather Quilted Upper | EVA Cushioned Footbed | Rubber Outsole — soft underfoot, durable, and built to last.",
        color: "Black",
        sizes: ["40", "41", "42", "43", "44", "45", "46"],
        fit: "Slim Fit",

        placeholderBg: "#0d0d0d",
    },
    {
        id: 14,
        name: "JLS Signature Crew Socks",
        price: 15000,
        category: "Socks",
        images: [Sock],
        hasVariants: false,
        badge: null,

        description: "Clean white crew-length socks with ribbed upper, cushioned sole, and the bold JLS monogram logo on the ankle. 'Just A Lifestyle' branding runs along the foot for a subtle finishing touch.",

        material: "80% Cotton, 15% Polyester, 5% Elastane — soft, breathable, and stretchy with all-day cushioned support",
        color: "White",
        sizes: ["S", "M", "L", "XL"],
        fit: "Slim Fit",

        placeholderBg: "#1a1a2a",
    },
    {
        id: 15,
        name: "JLS Cap - Gold(Limited Edition)",
        price: 25000,
        category: "Cap",
        images: [GoldCap],
        hasVariants: false,
        badge: "Limited",

        description: "Structured six-panel cap in sand with gold JLS embroidery. Limited edition.",

        material: "95% Cotton, 5% Elastane",
        color: "Gold",
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

        description: "Drop-shoulder oversized tee in washed cotton.  The back keeps it clean with the gold JLS logo and 'Just A Lifestyle' branding at the neckline.",

        material: "100% Heavyweight Combed Cotton — dense, premium feel with a smooth print surface for sharp graphic detail.",
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

        material: "100% Heavyweight Combed Cotton — thick, soft, and premium with a structured oversized drop for that sought-after boxy silhouette.",
        color: "Black and White",
        sizes: ["S", "M", "L", "XL"],
        fit: "Slim Fit",

        placeholderBg: "#190d2a",
    },

];