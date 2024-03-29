import PropTypes from 'prop-types';

const Beers = ({ beerName, beerStyle, price, available }) => {
    
    return (
        <div>
            <h1>{beerName}</h1>
            <h2>{beerStyle}</h2>
            <p>{"$" + price * 1000}</p>
        </div>
    )
}


Beers.propTypes = {
    beerName: PropTypes.string,
    beerStyle: PropTypes.string,
    price: PropTypes.number,
    available: PropTypes.bool,
}

export default Beers;
