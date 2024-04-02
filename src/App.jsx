
import './App.css'
import Persons from './components/persons/Persons';

function App() {
    const names = ['Parker','Simmons','Lewis','Poe'];
    const nameFilters = names.filter((nameF) => {return nameF.charAt(0) === 'P'})
    return (
        <div>            
            <h1>Lista de nombres:</h1>
            {nameFilters.map((name, index) => (
                <Persons key={index} name={name} />
            ))}
        </div>
    );
}

export default App;
