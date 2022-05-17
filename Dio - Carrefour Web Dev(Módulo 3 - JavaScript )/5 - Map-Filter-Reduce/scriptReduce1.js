function somaTodos(arr) {
    return arr.reduce(function(prev, current) {
        return prev + current;
    }, 0);
}

const arr = [2,3];

console.log(somaTodos(arr));