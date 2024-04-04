import PropTypes from 'prop-types';
import WatchList from '../watchList/WatchList';

const MovieFilter = ({ movies }) => {
    const watchListFilter = movies.filter((movie) => {
        return movie.Director === 'Christopher Nolan' && parseFloat(movie.imdbRating) > 8.5
    });

    return (
        <div>
            <h1>Nombre de películas:</h1>
            {watchListFilter.map((movie, index) => (
                <div key={index}>
                    <WatchList 
                      name={movie.Title}
                      director={movie.Director}
                      rating={parseFloat(movie.imdbRating)}
                      poster={movie.Poster}
                    />
                </div>
            ))}
        </div>
    );
}

MovieFilter.propTypes = {
    movies: PropTypes.array.isRequired,
};

export default MovieFilter;
