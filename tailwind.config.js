

module.exports = {
    purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
    theme: {
        fontFamily: {
            'display': ['Antic Didone', 'sans-serif'],
            'body': ['Antic Didone', 'sans-serif']
        },
        extend: { 
            inset: {
                'half': '50%'
            },
            colors: {
                'first-color': '#5d6470',
                'second-color': '#a77448',
                'third-color': '#e3c58f',
                'banner-background': '#774f7da3',
                'background-common': '#845b84',
                'main-color': '#845b84'
            }
        }
    }
}