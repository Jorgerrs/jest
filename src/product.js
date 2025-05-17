let products = [];
let id = 0;

function resetProducts() {
    products = [];
    id = 0;
}

function getProducts() {
    return products;
}

function addProduct(name, price) {
    if (!name || !price) throw new Error('Name and price must be defined');
    if (products.some(p => p.name === name)) throw new Error('Product already exists');
    products.push({id: ++id, name, price});
}

function removeProduct(id) {
    const index = products.findIndex(p => p.id === id);
    if (index === -1) throw new Error('Product not found');
    products.splice(index, 1);
}

module.exports = {
    resetProducts,
    addProduct,
    removeProduct,
    getProducts
};