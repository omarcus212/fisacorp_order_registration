// tailwind.config.js
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'], // importante garantir que o Tailwind leia seus arquivos
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
