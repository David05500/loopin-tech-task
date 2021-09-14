module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: {
                'negative-gradient': "url('/negative-gradient.svg')",
                'negative-face': "url('/negative-face.svg')",
                'neutral-gradient': "url('/neutral-gradient.svg')",
                'neutral-face': "url('/neutral-face.svg')",
                'positive-gradient': "url('/positive-gradient.svg')",
                'positive-face': "url('/positive-face.svg')",
            }
        },
        colors: {
            offWhite: "#F4F9FA",
            borderColor: "#E6E9EA",
            white: "#FFFFFF",
            green: "#00B8A9"
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
