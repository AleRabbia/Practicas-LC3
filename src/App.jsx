import './App.css'
import Products from './components/products/Products';

function App() {
  const products = ['table', 'couch', 'chair12', 'chair2'];

  return (
    <div>
      {products.map((product, index) => (
        <Products key={index} name={product} />
      ))}
    </div>
  );
}

export default App;