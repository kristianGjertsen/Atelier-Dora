/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                canvas: "#f9f7f4",
                charcoal: "#1b1b1b",
                "dust-blue": "#6b93a8",
                ochre: "#e7b26a",
                clay: "#d8a39d",
                slate: "#ece8e2",
                highlight: "#3d7a8a",
            },
        },
    },
    plugins: [],
};
