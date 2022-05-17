const lista = [
    {
        nome : 'Leite',
        valor : 5
    },
    {
        nome : 'Peito de Frango',
        valor : 26
    },
    {
        nome : 'Toddy',
        valor : 18
    }
];

const saldoDisponivel = 100;

function compras(saldoDisponivel, lista) {
    return lista.reduce(function(prev, curr) {
        return prev - curr.valor;
    }, saldoDisponivel)
}

console.log(compras(saldoDisponivel,lista))










