

module.exports = {
    purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
    theme: {
        fontFamily: {
            'display': ['Poppins', 'sans-serif'],
            'body': ['Roboto', 'sans-serif']
        },
        extend: { 
            flexGrow: {
                '2': 2
            },
            inset: {
                'half': '50%'
            },
            colors: {
                'first-color': '#5d6470',
                'second-color': '#2ba57d',
                'third-color': '#e3c58f',
                'banner-background': '#774f7da3',
                'background-common': '#845b84',
                'main-color': '#845b84',
                'custom-white': '#e2e1e1',
                'white-transparent': '#d6d4d457'
            }
        }
    }
}