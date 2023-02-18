function recursive(i) {
    if (i === 1) {
        return i;
    } 
    return i + recursive(i - 1)
}
const res = recursive(5);
console.log(res)

/* 

? 5 + recursive(4)
? 5 + 4 + recursive(3)
? 5 + 4 + 3 + recursive(2)
? 5 + 4 + 3 + 2 + recursive(1)
? 5 + 4 + 3 + 2 + 1 = 15

*/