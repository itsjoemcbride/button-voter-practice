/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  plugins: [],
  safelist: [
    {
      pattern: /bg-\w+-[1-9]00/,
    },
  ],
};
