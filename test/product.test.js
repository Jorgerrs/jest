const {
    resetProducts,
    addProduct,
    removeProduct,
    getProducts
} = require('../src/product');

beforeEach(() => {
    resetProducts();
});

describe('addProduct', () => {
    it('debería agregar un producto', () => {
        addProduct('Camiseta', 20);
        const products = getProducts();
        expect(products).toEqual([{ id: 1, name: 'Camiseta', price: 20 }]);
    });

    it('debería lanzar error si name o price no están definidos', () => {
        expect(() => addProduct()).toThrow('Name and price must be defined');
    });
});

describe('removeProduct', () => {
    it('debería eliminar un producto', () => {
        addProduct('Zapatos', 50);
        removeProduct(1);
        expect(getProducts()).toEqual([]);
    });
});