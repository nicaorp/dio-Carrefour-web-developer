//ATIVIDADE 1

const maca = {
    value : 3
};

const uva = {
    value : 2
};

function mapComThis(arr, thisArg) {
    return arr.map(function (item) {
        return item * this.value;
    },thisArg);
}

const nums = [1,2];

console.log('this -> maça', mapComThis(nums, maca));