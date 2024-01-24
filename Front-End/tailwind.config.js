/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        // => @media (min-width: 375px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        navbarBlack: "#212121",
        navbarYellow: "#ecac02",
        navbarRed: "#bd0017",
        navbarBottomBlack: "#222425",
        navbarBottomBlackText: "#6c757d",
        buttonRed: "#bc0016",
        partyPurple: "#d91c5c",
        partyYellow: "#ffba0d",
      },
      backgroundImage: {
        masa: "url(https://www.mcdonalds.com.tr/assets/img/products-box-bg.jpg)",
        party:
          "url(https://www.mcdonalds.com.my/images/booking_system/birthday/bg_party_package.jpg?20200208)",
      },
    },
  },
  plugins: [],
};
