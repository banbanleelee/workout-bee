/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  plugins: [
    require("flowbite/plugin")
  ],
  theme: {},
  variants: {
    extend: {
      // ...
      // Add the 'hover' variant
      backgroundColor: ['responsive', 'hover', 'focus'],
    },
  },
};