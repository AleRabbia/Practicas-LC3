import PropTypes from 'prop-types';

const Beers = ({ beerName, beerStyle, price, available }) => {
    
    return (
        <div>
            <h4>Nombre: {beerName}</h4>
            <h5>Estilo: {beerStyle}</h5>
            <p>Valor: {"$" + price * 1000}</p>
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
