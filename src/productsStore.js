// sk_test_51MKVzoEtB6Ia1v1cxOIOmmVkzBuC1MSKQqE2wfesBYwMGIubri9yRARSkA4JpzSZMz5sPm5BZyw7bv3A4mxyXYYI00mfKEQFm1
// Computer Desk: price_1MKWAnEtB6Ia1v1cjQQKkTX8
// Keyboard: price_1MKWAGEtB6Ia1v1cs0hXThF6
// Headphones: price_1MKW9mEtB6Ia1v1cAnzC4RV7
// Coffee: price_1MKW8oEtB6Ia1v1chwtRDO3K

const productsArray = [
    {
        id: "price_1MKWAnEtB6Ia1v1cjQQKkTX8",
        title: "Computer Desk",
        price: 114.99
    },
    {
        id: "price_1MKWAGEtB6Ia1v1cs0hXThF6",
        title: "Keyboard",
        price: 84.99
    },
    {
        id: "price_1MKW9mEtB6Ia1v1cAnzC4RV7",
        title: "Headphones",
        price: 64.99
    },
    {
        id: "price_1MKW8oEtB6Ia1v1chwtRDO3K",
        title: "Coffee",
        price: 4.99
    }
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };