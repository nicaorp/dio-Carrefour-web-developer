import React from "react";


const listCustomer = [
    {
        id: 1,
        name: 'Nicolas Ferreira',
        skills: ['React', 'Node', 'CSS', 'JAVA']
    },
    {
        id: 2,
        name: 'Aline Ferreira',
        skills: ['AWS', 'VUE', 'COBOL', 'GOLANG']
    },
    {
        id: 3,
        name: 'Nilton Ferreira',
        skills: ['RUBY', 'Node', 'CSS', 'HTML']
    },
    {
        id: 4,
        name: 'Neto Ferreira',
        skills: ['C', 'C#', 'BI', 'JS']
    },

]

const App = () => {

    const renderCustomers = (customer, index) => {
        return (
            <div key={`customer-${customer.id}`}>
                <li>{customer.name}</li>
                {customer.skills.map(renderSkills)}
            </div>
        )
    }

    const renderSkills = (skill, index) => {
        return (
            <div style={{paddingLeft: '30px'}} key={`skill-${index}`}>
                <li>{skill}</li>
            </div>
        )
    }


    return (

        <div>
            <p>Digital</p>
            <p>Bem Vindo a nossa aula</p>
            <div>
                <ul>
                    {listCustomer.map(renderCustomers)}
                </ul>

            </div>
        </div >
    );
};

export default App;


