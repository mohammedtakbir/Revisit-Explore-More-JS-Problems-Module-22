//* write a function to remove the duplicate items from an array using while loop
// function removeDuplicateItems(numbers) {
//     let i = 0;
//     let unique = [];
//     while (i < numbers.length) {
//         const number = numbers[i];
//         if (!unique.includes(number)) {
//             unique.push(number)
//         }
//         i++;
//     }
//     console.log(unique)
// }
const arr = [25, 14, 23, 25, 65, 85, 14, 49, 65, 85, 85, 65, 25];
// removeDuplicateItems(arr)

//* write a function to remove the duplicate items from an array using filter method
let unique = [];
arr.forEach(num => {
    if(!unique.includes(num)){
        unique.push(num)
    }
})
console.log(unique)