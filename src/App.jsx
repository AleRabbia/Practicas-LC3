
import './App.css'
import Family from './components/family/Family';

function App() {
    const persons = [{ name: 'Juan', age: 26 }, { name: 'Gabriel', age: 27 }, { name: 'Valentina', age: 22 }, { name: 'Paula', age: 25 }, { name: 'Andrés', age: 20 }];

    const personsOrder = persons.sort((a, b) => b.age - a.age)

    return (
        <div>
            <h1>Lista de nombres:</h1>
            <Family persons={personsOrder} />
        </div>
    );
}

export default App;
