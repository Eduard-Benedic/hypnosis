exports.createPages = ({ actions: { createPage } }) => {
    createPage({
      path: "/no-data/",
      component: require.resolve("./src/templates/no-data.js"),
    })

    createPage({
        path: '/with-context/',
        component: require.resolve("./src/templates/withContext.js"),
        context: {
            name: 'Eduard benedic', 
            surname: 'Tot la fel'
        }
    })

    const products = require('./data/products.json');
    
    products.forEach((product) => {
        console.log(product)
        createPage({
            path: `/product/${product.slug}/`,
            component: require.resolve('./src/templates/ProductTemplate.js'),
            context: product
        })
    })



}

