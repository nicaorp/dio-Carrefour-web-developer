function idadeEmDias(n) {
    let anos = n / 365;
    let resto = n % 365;
    let meses = resto / 30;
    let restoDias

    if (n < 30) {
        restoDias = n;
    }else {
         restoDias = resto % 30;

    }

    console.log(resto)

    console.log(parseInt(anos), 'Anos');
    console.log(parseInt(meses), 'Meses');
    console.log(parseInt(restoDias), 'Dias');

    


}

idadeEmDias(800);