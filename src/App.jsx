import React from 'react';
import Table from "./components/table/Table.jsx";

const netIncomes = [
    { brand: 'McDonalds', income: 1291283 },
    { brand: 'Burger King', income: 1927361 },
    { brand: 'KFC', income: 1098463 }
];

function App() {
    return (
        <div className="container">
            <h1 className="mt-4 mb-3 white-text">Tabla de Ingresos</h1>
            <div className="row">
                <div className="col">
                    <Table netIncomes={netIncomes} />
                </div>
            </div>
        </div>
    );
}

export default App;
