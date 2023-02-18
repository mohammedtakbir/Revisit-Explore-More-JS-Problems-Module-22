const products = [
    {id: 1, name: 'MI 13 phone', price: 32000},
    {id: 1, name: 'macbook air', price: 132000},
    {id: 1, name: 'Iphone 14', price: 89000},
    {id: 1, name: 'lg monitor', price: 2000},
    {id: 1, name: 'Galaxy s23 ultra Phone', price: 75000}
];

let phones = [];
for(const product of products){
    if(product.name.toLowerCase().includes('Phone'.toLowerCase())){
        phones.push(product)
    }
}
console.log(phones)