import React from "react";

const App = () => {
    
    const name = 'Nicolas Ferreira'
    
    const handleChange = (e) => {
        const { value } = e.target
        console.log(value)
    }
    
    const showEvent = (e) => {
        console.log('Evento clicado')
        console.log(e)
        alert(name);
    }

    const deleteButton = <button onClick={showEvent}>Mostrar evento</button>
    
    return (

        <div>
            <p>Digital</p>
            <p>Bem Vindo a nossa aula</p>
            <input onChange={handleChange} />
            {deleteButton} 
        </div >
    );
};

export default App;


