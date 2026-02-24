/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./index.{js,jsx,ts,tsx}",
        "./frontend/**/*.{js,jsx,ts,tsx}",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};