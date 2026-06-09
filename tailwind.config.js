// /** @type {import('tailwindcss').Config} */
// export default {
//     content: ["./index.html", "./src/**/*.{js,jsx}"],
//     theme: {
//         extend: {
//             colors: {
//                 gold: "#D4A017",
//                 "gold-light": "#F0C040",
//                 jet: "#0a0a0a",
//                 charcoal: "#1a1a1a",
//             },
//             fontFamily: {
//                 heading: ["'Bebas Neue'", "sans-serif"],
//                 body: ["'DM Sans'", "sans-serif"],
//             },
//         },
//     },
//     plugins: [],
// };


/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                gold: "#D4A017",
                "gold-light": "#F0C040",
                jet: "#0d0f14",
                card: "#131722",
                "card-hover": "#1a1f2e",
            },
            fontFamily: {
                heading: ["'Bebas Neue'", "sans-serif"],
                body: ["'DM Sans'", "sans-serif"],
            },
            fontSize: {
                "hero": ["clamp(48px,8vw,96px)", { letterSpacing: "0.06em", lineHeight: "1" }],
            },
        },
    },
    plugins: [],
};