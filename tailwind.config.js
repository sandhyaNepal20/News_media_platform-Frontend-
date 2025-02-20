/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Ensures Tailwind scans all React files
    "node_modules/flowbite-react/**/*.js" // Ensures Flowbite components work
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require("flowbite/plugin"), // Correct way to include Flowbite
  ],
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