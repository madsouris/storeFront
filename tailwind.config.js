/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [
        require("daisyui"),
        require("tailwind-bootstrap-grid")({
            containerMaxWidths: {
                sm: "540px",
                md: "720px",
                lg: "960px",
                xl: "1140px",
            },
            generateContainer: false,
        }),
    ],
    // daisyUI config (optional)
    daisyui: {
        styled: true,
        themes: true,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        darkTheme: "dark",
    },
};
