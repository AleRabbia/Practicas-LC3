import PropTypes from 'prop-types';
import WatchList from '../watchList/WatchList';

const MovieFilter = ({ movies }) => {
    const watchListFilter = movies.filter((movie) => {
        return movie.Director === 'Christopher Nolan' || parseFloat(movie.imdbRating) > 8.0
    });
    const movieTitles = watchListFilter.map(movie => movie.Title);

    return (
        <div>
            <h1>Nombre de peliculas:</h1>
            <WatchList movies={movieTitles} />
        </div>
    );
}

MovieFilter.propTypes = {
    movies: PropTypes.array.isRequired,
};

export default MovieFilter;