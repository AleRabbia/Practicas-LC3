import React from 'react';
import { Table as BootstrapTable } from "react-bootstrap";

const Table = ({ netIncomes }) => {
    const totalIncome = netIncomes.reduce((acc, curr) => acc + curr.income, 0);
    const averageIncome = totalIncome / netIncomes.length;

    return (
        <div>
            <BootstrapTable striped>
                <thead className="thead-dark">
                    <tr>
                        <th>Marca</th>
                        <th>Ingreso Neto</th>
                    </tr>
                </thead>
                <tbody>
                    {netIncomes.map((item, index) => (
                        <tr key={index}>
                            <td>{item.brand}</td>
                            <td>${item.income}</td>
                        </tr>
                    ))}
                </tbody>
            </BootstrapTable>
            <p className="mt-3">Promedio de ingreso neto: ${averageIncome.toFixed(2)}</p>
        </div>
    );
};

export default Table;
