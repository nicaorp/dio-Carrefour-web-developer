import React from "react";


const buttonA = <button>Histório cos clientes</button>

const buttonB = <button>Cadastrar Cliente</button>

const hasCustomer = true;


const App = () => {

    const renderShowHistory = () => (
        <div>
            Clique no botão abaixo para visulizar o histórico dos clientes.
            <br />
            {buttonA}
        </div>
    )

    const renderAddCustomer = () => (
        <div>
            Clique abaixo cadastrar um novo clientes
            <br />
            {buttonB}
        </div>
    )

        const showCustomer = () => {
            if (!hasCustomer ) return null;

            return (
                <div>
                    <h1>Nome do Cliente: Nicolas Ferreira</h1>
                </div>
            )
        }

    return (
        <div>
            <p>Digital</p>
            <p>Bem Vindo a nossa aula</p>
            {hasCustomer ? renderShowHistory() : renderAddCustomer()}
            <div>
                {showCustomer()}
            </div>
        </div >
    );
};

export default App;


