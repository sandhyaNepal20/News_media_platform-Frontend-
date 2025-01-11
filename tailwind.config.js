


const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",  // This is for React projects
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};





// module.exports = {
//   content: [
//     // ...
//     flowbite.content(),
//   ],
//   plugins: [
//     // ...
//     flowbite.plugin(),
//   ],
// };