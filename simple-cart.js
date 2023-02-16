const cart = [
    { name: 'Monitor', price: 10, quantity: 2 },
    { name: 'Mobo', price: 10, quantity: 2 },
    { name: 'CPU', price: 10, quantity: 4 },
    { name: 'SSD', price: 10, quantity: 6 },
    { name: 'PSU', price: 10, quantity: 7 }
]

function total(products) {
    let i = 0;
    let sum = 0;
    while (i < products.length) {
        const product = products[i];
        sum += (product.price * product.quantity);
        i++;
    }
    console.log(sum)
}
total(cart)