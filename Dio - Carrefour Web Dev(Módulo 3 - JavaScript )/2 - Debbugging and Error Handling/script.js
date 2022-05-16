function validaNumero(arr, num) {
    try {

        if (!arr && !num) throw new ReferenceError("Parametros não enviados");
        if (typeof arr !== 'object') throw new TypeError("Array type must be Object");
        if (typeof num !== 'number') throw new TypeError("Num must be Number Type");
        if (arr.length !== num) throw new RangeError("num must be equals of Array lenght");

        return arr;

    } catch (error) {

        if (error instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError!");
            console.log(error.message);
        } else if (error instanceof TypeError) {
            console.log("Este erro é um Type Error");
            console.log(error.message);
        } else if (error instanceof RangeError) {
            console.log("Este erro é um Range Error");
            console.log(error.message);
        }
        else {
            console.log("Ocorreu um tipo de erro não esperado." + error );
        }
    }
}

console.log(validaNumero([1, 2, 3], 2));