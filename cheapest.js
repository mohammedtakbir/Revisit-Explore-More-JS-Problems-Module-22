//* write a function to get the cheapest phone from an array of object
const phones = [
    { name: 'Xioami', price: 22000, storage: '128GB', color: 'Blue', ram: '6GB' },
    { name: 'Realme', price: 12000, storage: '64GB', color: 'Black', ram: '4GB' },
    { name: 'Oppo', price: 32000, storage: '128GB', color: 'Matte Black', ram: '8GB' },
    { name: 'Samsung', price: 44000, storage: '128GB', color: 'White', ram: '8GB' },
    { name: 'iphone', price: 72000, storage: '64GB', color: 'Black', ram: '4GB' },
    { name: 'Oneplus', price: 40000, storage: '128GB', color: 'Silver', ram: '8GB' },
]

function findCheapestPhone(phones) {
    let cheapestPhone = phones[0];
    // for (let i = 0; i < phones.length; i++) {
    //     const phone = phones[i];
    //     if (phone.price < cheapestPhone.price) {
    //         cheapestPhone = phone
    //     }
    // }
    // console.log(cheapestPhone)

    phones.forEach(phone => {
        if (phone.price < cheapestPhone.price) {
            cheapestPhone = phone
        }
    })
    console.log(cheapestPhone)
}
findCheapestPhone(phones);