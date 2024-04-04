
import './App.css'
import MovieFilter from './components/movieFilter/MovieFilter'
import watchList from './components/array/Array';

function App() {
    

    return (
        <div>
            <MovieFilter movies={watchList} />
           
        </div>
    );
}

export default App;
