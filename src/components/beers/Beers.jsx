import PropTypes from 'prop-types';

const Beers = ({ beerStyle }) => {
    
    return (
        <div>            
            <li>{beerStyle}</li>
            
        </div>
    )
}


Beers.propTypes = {
    beerStyle: PropTypes.string
}

export default Beers;
