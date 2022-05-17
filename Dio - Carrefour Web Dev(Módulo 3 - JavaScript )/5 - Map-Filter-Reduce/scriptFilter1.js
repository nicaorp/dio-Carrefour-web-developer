function filtraPares(arr) {
    return arr.filter(number => {
        if (number % 2 == 0){
            return number;
        }
    });
}

const arr = [2,5,4,3,3,2,22,92];

console.log('Numeros pares: ', filtraPares(arr));