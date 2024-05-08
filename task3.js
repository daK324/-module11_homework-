const sum = x => {
    return function(y) {
        return x + y
    }
}
console.log(sum(42)(5))