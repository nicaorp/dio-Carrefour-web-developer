function mapMultiplyByTwo(arr) {
    return arr.map(number => {
        return number * 2;
    });
};

const arr = [2, 4, 6, 10, 22];

console.log('Multiplcado por 2:', mapMultiplyByTwo(arr))