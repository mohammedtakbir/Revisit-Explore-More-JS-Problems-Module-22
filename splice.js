const arr = [10, 20, 30, 40, 50, 60]
arr.splice(1, 0, 99); //? adding new elements in the array
arr.splice(0, 1, 100) //? replacing existing element
console.log(arr)
arr.splice(3, 1) //? deleting the element
console.log(arr)
