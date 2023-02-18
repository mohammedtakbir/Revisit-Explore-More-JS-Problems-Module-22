function exploreArguments(num1, num2){
    // console.log(num1, num2)
    // console.log(arguments[5])
    // console.log(arguments)
    for(const number of arguments){
        console.log(number)
    }
}
exploreArguments(12, 52, 235, 65, 45, 87)